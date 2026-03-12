import sqlite3

# Connect to the database (creates database.db if not exists)
conn = sqlite3.connect("database.db")
c = conn.cursor()

# Create team_members table
c.execute('''
CREATE TABLE IF NOT EXISTS team_members (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    image TEXT
)
''')

conn.commit()
conn.close()

print("Team members table created successfully!")