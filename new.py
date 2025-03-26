from flask import Flask, request, jsonify
from flask_mail import Mail, Message

app = Flask(__name__)

# Configure SMTP settings (Update with your details)
app.config['MAIL_SERVER'] = 'mail.scmconnect.in'  # cPanel Mail Server
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'no-reply@scmconnect.in'  # Your cPanel email
app.config['MAIL_PASSWORD'] = 'jK5^gO67%!lO'  # Your email password
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)

@app.route('/send_mail', methods=['POST'])
def send_mail():
    try:
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        msg = Message("New Inquiry from " + name,
                      sender="no-reply@scmconnect.in",
                      recipients=["no-reply@scmconnect.in"])  # Change this to your email
        msg.body = f"Name: {name}\nEmail: {email}\nMessage: {message}"

        mail.send(msg)
        return jsonify({"status": "success", "message": "Inquiry sent!"})

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
