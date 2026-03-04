import sqlite3
from werkzeug.security import generate_password_hash

conn = sqlite3.connect("database.db")
c = conn.cursor()

hashed_password = generate_password_hash("admin123")

c.execute(
    "UPDATE admin SET password=? WHERE username=?",
    (hashed_password, "admin")
)

conn.commit()
conn.close()

print("Admin password hashed successfully!")