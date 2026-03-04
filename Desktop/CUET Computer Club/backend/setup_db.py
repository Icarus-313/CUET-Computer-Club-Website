import sqlite3

# Connect to database (creates if it doesn't exist)
conn = sqlite3.connect('database.db')
c = conn.cursor()

# Create table for events
c.execute('''
CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    image TEXT
)
''')

conn.commit()
conn.close()

print("Database created successfully!")