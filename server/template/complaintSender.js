exports.complaintSender = ( name, contactNo, title, description, location) => {
    return`
        <!DOCTYPE html>
        <html>
            <head>
            <meta charset="UTF-8">
            <title>Complaint!!!</title>
            <style>
    body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f2f2f2;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
        }
        h1 {
            color: #4c84ff;
        }
        p {
            color: #555;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            margin-bottom: 10px;
        }
        .email-bg {
            background: linear-gradient(45deg, #4c84ff, #ff6f61);
            color: #fff;
            padding: 20px;
            border-radius: 10px 10px 0 0;
        }
            </style>
            </head>
            
            <body>
            <div class="container">
            <div class="header">
            <h1>New Complaint Received</h1>
            </div>
            <div class="content">
            <p>Hello Sir,</p>
        <p>A new complaint has been registered on our website. Here are the details:</p>
            <p>Complaint Details:</p>
            <ul>
                <li><strong>Title:</strong> ${title}</li>
                <li><strong>Description:</strong> ${description}</li>
            <li><strong>Location:</strong> ${location}</li>
            <li><strong>Mobile Number:</strong> ${contactNo}</li>
            <li><strong>Name:</strong> ${name}</li>
            </ul>
            <p>Thank you for your attention to this matter.</p>
        <p>Sincerely,</p>
        <p>The Complaint Box</p>
            </div>
            
            </body>
    </html>`;
};