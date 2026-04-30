from flask import Flask, render_template, request, jsonify, send_file, abort
import sqlite3
import os
import re
from datetime import datetime

app = Flask(__name__)
app.config['DATABASE'] = os.path.join(app.instance_path, 'portfolio.db')
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev-secret-key-change-in-production')

os.makedirs(app.instance_path, exist_ok=True)

def get_db():
    conn = sqlite3.connect(app.config['DATABASE'])
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    with get_db() as conn:
        conn.execute('''
            CREATE TABLE IF NOT EXISTS contacts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                message TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        conn.commit()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name', '').strip()
    email = data.get('email', '').strip()
    message = data.get('message', '').strip()

    if not name or not email or not message:
        return jsonify({'success': False, 'error': 'All fields are required.'}), 400

    email_pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    if not re.match(email_pattern, email):
        return jsonify({'success': False, 'error': 'Invalid email address.'}), 400

    try:
        with get_db() as conn:
            conn.execute(
                'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
                (name, email, message)
            )
            conn.commit()
        return jsonify({'success': True, 'message': 'Message received! I will get back to you soon.'})
    except Exception as e:
        return jsonify({'success': False, 'error': 'Server error. Please try again.'}), 500

@app.route('/resume')
def download_resume():
    resume_path = os.path.join(app.root_path, 'static', 'assets', 'Mrinmayee_Gokhale_Resume.pdf')
    if os.path.exists(resume_path):
        return send_file(resume_path, as_attachment=True, download_name='Mrinmayee_Gokhale_Resume.pdf')
    else:
        abort(404)

if __name__ == '__main__':
    init_db()
    app.run(debug=False, host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
