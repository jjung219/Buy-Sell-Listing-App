// const express = require('express');
// const router = express.Router();
// const accountSid = 'AC61d0166b8786243c9e0dc45e168c8363';
// const authToken = '';
// const client = require('twilio')(accountSid, authToken);


// // const sgMail = require('@sendgrid/mail')
// // sgMail.setApiKey(process.env.SENDGRID_API_KEY);


// module.exports = (db) => {

//   router.get("/:id/",(req,res)=>{
//     const userId = req.session['user_id'];
//     const itemId = req.params.id;
//     const templateVars = { user: userId,item_id:itemId };

//     res.render("contact", templateVars);
//   });

// const toEmail = function(item_id){
//   return db.query(`SELECT users.email FROM users JOIN items ON users.id = items.user_id WHERE items.id = $1`,[item_id])
//   .then(res=> res.rows[0])
//   .catch(err=>console.log(err));
// }


// router.post("/:id/",(req,res)=>{
//    const {name,email,subject,message} = req.body;
//    const itemId = req.params.id;
//     // console.log(req.body);
//     // res.send(req.body);

//     client.messages
//       .create({
//          body: 'Hello',
//          from: '+12513197721',
//          to: ''
//        })
//       .then(message => console.log(message.sid))
//       .done();

//   // toEmail(itemId).then(user=>{

//   //   const msg = {
//   //     to: user.email, // Change to your recipient
//   //     from: email,    // Change to your verified sender
//   //     subject: subject,
//   //    text: message,
//   //    html: `<strong>${message}</strong>`,
//   //  }
//   //  sgMail
//   //    .send(msg)
//   //    .then(() => {
//   //      console.log('Email sent')
//   //      res.send("Email sent");
//   //    })
//   //    .catch((error) => {
//   //      console.error(error.response.body)
//   //    })
//   //  });

//   })
//   return router;
// }
