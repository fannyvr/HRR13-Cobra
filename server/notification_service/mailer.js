var nodemailer = require ('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
//var EmailTemplate = require('email-templates').Email.Template;
var schedule = require('node-schedule');
var mg = require('nodemailer-mailgun-transport');

module.exports = {
  signupEmail: function(username){
    var auth = {
      auth: {
        api_key: 'key-d5f3c75b9660f61d5e0d22d401873be4',
        domain: 'sandbox838378b8b1a243919bd401f6bbe55d2a.mailgun.org'
      }
    }

    var nodemailerMailgun = nodemailer.createTransport(mg(auth));

    nodemailerMailgun.sendMail({
      from: '"Marco Polo" <your.trip.planner.co@sandbox838378b8b1a243919bd401f6bbe55d2a.mailgun.org>',
      to: username, // An array if you have multiple recipients.
      subject: 'Welcome to Trip Planner!!',
      // 'h:Reply-To': 'reply2this@company.com',
      // //You can use "html:" to send HTML email content. It's magic!
      html: '<p>We hope to make your next vacation the best vacation.</p>',
      //You can use "text:" to send plain-text content. It's oldschool!
      text: 'Mailgun rocks, pow pow!'
    }, function (err, info) {
      if (err) {
        console.log('Error: ' + err);
      }
      else {
        console.log('Response: ' + info);
      }
    });
    
    
    
  },
  
  signinEmail: function(username){
    
    var auth = {
      auth: {
        api_key: 'key-d5f3c75b9660f61d5e0d22d401873be4',
        domain: 'sandbox838378b8b1a243919bd401f6bbe55d2a.mailgun.org'
      }
    }

    var nodemailerMailgun = nodemailer.createTransport(mg(auth));

    nodemailerMailgun.sendMail({
      from: '"Marco Polo" <your.trip.planner.co@sandbox838378b8b1a243919bd401f6bbe55d2a.mailgun.org>',
      to: username, // An array if you have multiple recipients.
      subject: 'Hey you!',
      // 'h:Reply-To': 'reply2this@company.com',
      // //You can use "html:" to send HTML email content. It's magic!
      html: '<p>Looks like someone signed into your Trip Planner Account...<b>hope it was you...</b></p>',
      //You can use "text:" to send plain-text content. It's oldschool!
      text: 'Mailgun rocks, pow pow!'
    }, function (err, info) {
      if (err) {
        console.log('Error: ' + err);
      }
      else {
        console.log('Response: ' + info);
      }
    });
    
    
    
  },
  
  reminderEmail: function(username){
    var auth = {
      auth: {
        api_key: 'key-d5f3c75b9660f61d5e0d22d401873be4',
        domain: 'sandbox838378b8b1a243919bd401f6bbe55d2a.mailgun.org'
      }
    }

    var nodemailerMailgun = nodemailer.createTransport(mg(auth));

    nodemailerMailgun.sendMail({
      from: '"Marco Polo" <your.trip.planner.co@sandbox838378b8b1a243919bd401f6bbe55d2a.mailgun.org>',
      to: username, // An array if you have multiple recipients.
      subject: 'Booking Reminder!!!',
      // 'h:Reply-To': 'reply2this@company.com',
      // //You can use "html:" to send HTML email content. It's magic!
      html: '<p>Your next trip is just around the corner. This is just a friendly reminder to make sure everything is booked.</p>',
      //You can use "text:" to send plain-text content. It's oldschool!
      text: 'Mailgun rocks, pow pow!'
    }, function (err, info) {
      if (err) {
        console.log('Error: ' + err);
      }
      else {
        console.log('Response: ' + info);
      }
    });
  }
  
  // pwdReminder: function(username, password){
  //   var sendPwdReminder = transporter.templateSender(new EmailTemplate('../templates/password_reminder'), {
  //     from: 'trip.planner.co@gmail.com'
  //   });
    
  //   sendPwdReminder({
  //     to: username,
  //     subject: 'Password Reminder'
  //   }, {
  //     username: username,
  //     password: password,
  //   }, function(err, res){
  //     if(err){
  //       console.log('error');
  //     }
  //     console.log('Password reminder sent')
  //   }
  //   });
  // },

}



