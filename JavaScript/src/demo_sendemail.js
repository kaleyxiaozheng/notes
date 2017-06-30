var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'zheng.kaley.x@gmail.com',
        pass: 'z9x8c7v6'
    }
});

var mailOptions = {
    from: 'zheng.kaley.x@gmail.com',
    to: 'zhaoyi0113@gmail.com, otherperson@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Hello, my dear pea!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});