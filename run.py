#!/usr/bin/env python3
"""Run script - initializes DB and starts the Flask dev server."""
from app import app, init_db

if __name__ == '__main__':
    init_db()
    print("✅ Database initialized.")
    print("🚀 Starting server at http://localhost:5000")
    app.run(debug=True, host='0.0.0.0', port=5000)
