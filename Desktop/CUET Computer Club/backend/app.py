from flask import Flask, render_template, request, redirect, session
import os
import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash

from PIL import Image
import uuid

app = Flask(__name__)
app.secret_key = "cuet_computer_club_secret"

def save_resized_image(image_file):
    if not image_file or image_file.filename == "":
        return None

    ext = os.path.splitext(image_file.filename)[1]
    filename = f"{uuid.uuid4().hex}{ext}"

    filepath = os.path.join("static/images", filename)

    img = Image.open(image_file)
    img.thumbnail((800, 800))
    img.save(filepath)

    return filename


def save_square_profile(image_file):
    if not image_file or image_file.filename == "":
        return None

    ext = os.path.splitext(image_file.filename)[1]
    filename = f"{uuid.uuid4().hex}{ext}"

    filepath = os.path.join("static/images", filename)

    img = Image.open(image_file)

    width, height = img.size
    min_side = min(width, height)

    left = (width - min_side) // 2
    top = (height - min_side) // 2
    right = left + min_side
    bottom = top + min_side

    img = img.crop((left, top, right, bottom))

    img = img.resize((500, 500))

    img.save(filepath)

    return filename

@app.route("/")
def home():
    # Connect to database
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    
    # Fetch all events
    c.execute("SELECT * FROM events")
    events = c.fetchall()
    

    # Fetch team members
    c.execute("SELECT * FROM team_members")
    team_members = c.fetchall()
    conn.close()
    
    # Pass events to template
    return render_template("index.html", events=events, team_members=team_members)
@app.route("/admin")
def admin():
    return render_template("admin_login.html")
@app.route("/admin/login", methods=["POST"])
def admin_login():
    username = request.form["username"]
    password = request.form["password"]

    conn = sqlite3.connect("database.db")
    c = conn.cursor()
    c.execute("SELECT * FROM admin WHERE username=?", (username,))
    admin = c.fetchone()
    conn.close()

    if admin and check_password_hash(admin[2], password):
        session["admin_logged_in"] = True
        return redirect("/admin/dashboard")
    else:
        return "Invalid credentials. <a href='/admin'>Try again</a>"
@app.route("/admin/dashboard")
def admin_dashboard():
    if not session.get("admin_logged_in"):
        return redirect("/admin")

    conn = sqlite3.connect("database.db")
    c = conn.cursor()

    # Fetch events
    c.execute("SELECT * FROM events")
    events = c.fetchall()

    # Fetch executive members
    c.execute("SELECT * FROM team_members")
    members = c.fetchall()

    conn.close()

    return render_template("admin_dashboard.html", events=events, members=members)
@app.route("/admin/add_event", methods=["POST"])
def add_event():
    if not session.get("admin_logged_in"):
        return redirect("/admin")

    title = request.form["title"]
    description = request.form["description"]
    image = request.files["image"]

    image_filename = save_resized_image(image)

    conn = sqlite3.connect("database.db")
    c = conn.cursor()
    c.execute(
        "INSERT INTO events (title, description, image) VALUES (?, ?, ?)",
        (title, description, image_filename)
    )
    conn.commit()
    conn.close()

    return redirect("/admin/dashboard")
@app.route("/admin/delete_event/<int:event_id>")
def delete_event(event_id):
    if not session.get("admin_logged_in"):
        return redirect("/admin")

    conn = sqlite3.connect("database.db")
    c = conn.cursor()
    c.execute("DELETE FROM events WHERE id=?", (event_id,))
    conn.commit()
    conn.close()

    return redirect("/admin/dashboard")

@app.route("/admin/edit_event/<int:event_id>", methods=["GET", "POST"])
def edit_event(event_id):
    if not session.get("admin_logged_in"):
        return redirect("/admin")

    conn = sqlite3.connect("database.db")
    c = conn.cursor()

    if request.method == "POST":
        title = request.form["title"]
        description = request.form["description"]
        image_file = request.files.get("image")

        if image_file and image_file.filename != "":
            filename = save_resized_image(image_file)
            c.execute("UPDATE events SET title=?, description=?, image=? WHERE id=?",
                      (title, description, filename, event_id))
        else:
            c.execute("UPDATE events SET title=?, description=? WHERE id=?",
                      (title, description, event_id))

        conn.commit()
        conn.close()
        return redirect("/admin/dashboard")

    # GET request - fetch current event data
    c.execute("SELECT * FROM events WHERE id=?", (event_id,))
    event = c.fetchone()
    conn.close()
    return render_template("edit_event.html", event=event)
@app.route("/admin/add_member", methods=["POST"])
def add_member():
    if not session.get("admin_logged_in"):
        return redirect("/admin")

    name = request.form["name"]
    role = request.form["role"]
    image_file = request.files.get("image")

    filename = save_square_profile(image_file)

    conn = sqlite3.connect("database.db")
    c = conn.cursor()
    c.execute(
        "INSERT INTO team_members (name, role, image) VALUES (?, ?, ?)",
        (name, role, filename)
    )
    conn.commit()
    conn.close()

    return redirect("/admin/dashboard")
@app.route("/admin/edit_member/<int:member_id>", methods=["GET", "POST"])
def edit_member(member_id):
    if not session.get("admin_logged_in"):
        return redirect("/admin")

    conn = sqlite3.connect("database.db")
    c = conn.cursor()

    if request.method == "POST":
        name = request.form["name"]
        role = request.form["role"]
        image_file = request.files.get("image")

        if image_file and image_file.filename != "":
            filename = save_square_profile(image_file)
            c.execute("UPDATE team_members SET name=?, role=?, image=? WHERE id=?",
                      (name, role, filename, member_id))
        else:
            c.execute("UPDATE team_members SET name=?, role=? WHERE id=?",
                      (name, role, member_id))

        conn.commit()
        conn.close()
        return redirect("/admin/dashboard")

    # GET request - fetch current member data
    c.execute("SELECT * FROM team_members WHERE id=?", (member_id,))
    member = c.fetchone()
    conn.close()
    return render_template("edit_member.html", member=member)
@app.route("/admin/delete_member/<int:member_id>")
def delete_member(member_id):
    if not session.get("admin_logged_in"):
        return redirect("/admin")

    conn = sqlite3.connect("database.db")
    c = conn.cursor()
    c.execute("DELETE FROM team_members WHERE id=?", (member_id,))
    conn.commit()
    conn.close()

    return redirect("/admin/dashboard")
@app.route("/admin/logout")
def admin_logout():
    session.pop("admin_logged_in", None)
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)