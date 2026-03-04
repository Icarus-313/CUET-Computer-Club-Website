import sqlite3

conn = sqlite3.connect('database.db')
c = conn.cursor()

# Create admin table
c.execute('''
CREATE TABLE IF NOT EXISTS admin (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
)
''')

# Insert default admin
c.execute(
    "INSERT OR IGNORE INTO admin (username, password) VALUES (?, ?)",
    ("admin", "admin123")
)

conn.commit()
conn.close()

print("Admin table created successfully!")