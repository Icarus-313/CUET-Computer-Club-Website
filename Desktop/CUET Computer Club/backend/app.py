from flask import Flask, render_template, request, redirect, session
import os
import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = "cuet_computer_club_secret"

@app.route("/")
def home():
    # Connect to database
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    
    # Fetch all events
    c.execute("SELECT * FROM events")
    events = c.fetchall()
    
    conn.close()
    
    # Pass events to template
    return render_template("index.html", events=events)
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

    if admin and check_password_hash(admin[2], password):
       session["admin_logged_in"] = True
       return redirect("/admin/dashboard")
    else:
       return "Invalid credentials. <a href='/admin'>Try again</a>"
    conn.close()

    if admin:
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
    c.execute("SELECT * FROM events")
    events = c.fetchall()
    conn.close()

    return render_template("admin_dashboard.html", events=events)
@app.route("/admin/add_event", methods=["POST"])
def add_event():
    if not session.get("admin_logged_in"):
        return redirect("/admin")

    title = request.form["title"]
    description = request.form["description"]
    image = request.files["image"]

    image_filename = None
    if image and image.filename != "":
        image_filename = image.filename
        image.save(os.path.join("static/images", image_filename))

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
@app.route("/admin/logout")
def admin_logout():
    session.pop("admin_logged_in", None)
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)