import nodemailer from 'nodemailer'
import {v4 as uuid} from 'uuid'
//TODO
export const sendMail = async ({email, emailType, userId } : SendMailParams) => {
    const verfiyEmailToken = uuid();
    //Make a token, and store it in database and send it through email
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",   //❌
        port: 587,   //❌
        secure: false,
        auth: {
            user: "goyaldanish542@gmail.com",    //❌
            pass: "kwfy lhga medv gpqs",     //❌
        },
    });
    const mailOptions = {
        from: "goyaldanish542@gmail.com", // sender address
        to: email, // list of receivers
        subject: emailType, // Subject line
        text: emailType === "VERIFY" ? "VERIFY YOUR MAIL" : "FORGET PASSWORD", // plain text body
        html: "<b>Hello world?</b>", // html body
    }

    try {
        const info = await transporter.sendMail(mailOptions)
        console.log("message sent " + info.messageId)
    } catch (error) {
        console.log(error)
    }
}