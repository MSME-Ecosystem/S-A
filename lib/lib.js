
const nodemailer = require("nodemailer");
var connection = require("./db");
var menu_list;
function getDate() {

    let date_ob = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

// prints date in YYYY-MM-DD format
// console.log(year + "-" + month + "-" + date);

// prints date & time in YYYY-MM-DD HH:MM:SS format
console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
let dt=year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

return dt;
// prints time in HH:MM format
// console.log(hours + ":" + minutes);
}

async function sendemail() {
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 465,
        secure: false, // true for 465, false for other ports
        auth: {
            // user: 'adeniyijamesa@gmail.com', // generated ethereal user
            // pass: 'GOlusanya2888!', // generated ethereal password
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
          },
        });
      
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo "adeniyijamesa@gmail.com', // sender address
        to: "james.adeniyi@accessng.com", // list of receivers
        subject: "Hello", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    // var transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //       user: 'adeniyijamesa@gmail.com',
    //       pass: 'GOlusanya2888!'
    //     }
    //   });
      
    //   var mailOptions = {
    //     from: 'adeniyijamesa@gmail.com',
    //     to: 'james.adeniyi@accessng.com',
    //     subject: 'Sending Email using Node.js',
    //     text: 'That was easy!'
    //   };
      
    //   transporter.sendMail(mailOptions, function(error, info){
    //     if (error) {
    //       console.log(error);
          
    //       console.log('Email error: ' + error);
    //     } else {
    //       console.log('Email sent: ' + info.response);
    //     }
    //   });
}

function getMenu(role_id){
      
        return new Promise(function(resolve, reject) {
          // The Promise constructor should catch any errors thrown on
          // this tick. Alternately, try/catch and reject(err) on catch.
          // var connection = getMySQL_connection();
  
        //   var query_str ="select * from main_menu_tb where menu_level='0' and menu_id in (select menu_id from menugroup where role_id =?) order by menu_id asc";
         
          var query_str ="SELECT mg.role_id,mg.menu_id,mm.menu_name,mm.menu_url,mm.parent_id,mm.menu_level,mm.menu_icon from menugroup mg INNER JOIN main_menu_tb mm ON mg.menu_id=mm.menu_id WHERE mg.role_id=? order by mm.menu_id asc, mm.menu_url";
          
          var query_var = [role_id];
          
        //   console.log('Email sent: ' + query_str);
          connection.query(query_str, query_var, function (err, rows, fields) {
              // Call reject on error states,
              // call resolve with results
              if (err) {
                //   console.log('Email sent: ' + err);
                  return reject(err);
              }
            //   console.log('Email sent: ' + rows);
              resolve(rows);
          });
      });
}



module.exports = { sendemail ,getDate,getMenu};