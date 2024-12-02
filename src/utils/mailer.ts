import nodemailer from 'nodemailer'
import { v4 as uuid } from 'uuid'
import { usersTable } from '@/db/schema'
import { db } from '@/db/index';
import { eq } from 'drizzle-orm'
import dotenv from 'dotenv'
dotenv.config()
//TODO
export const sendMail = async ({ email, emailType, userId }: SendMailParams) => {
    const verfiyEmailToken = uuid();
    //Make a token, and store it in database and send it through email
    if (emailType == "VERIFY") {
        await db.update(usersTable).set({
            verifyToken: verfiyEmailToken,
            verifyTokenExpiry: new Date(Date.now() + 3600000).toISOString(),
        }).where(eq(usersTable.email, email))

    } else if (emailType == "PASSWORDVERIFY") {
        await db.update(usersTable).set({
            verifyPasswordToken: verfiyEmailToken,
            verfiyPasswordTokenExpiry: new Date(Date.now() + 3600000).toISOString()
        }).where(eq(usersTable.email, email))
    }

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
        html: `<h1> ${emailType === 'VERIFY' ? 'VERIFY EMAIL' : 'RESET PASSWORD'}</h1>
        <p>
            Click <a href="${process.env.DOMAIN}/verfiy?token=${verfiyEmailToken}">
            here
            </a> to ${emailType === 'VERIFY' ? 'verify your email' : 'reset your password'}.
        </p>`, // html body
    }

    try {
        const info = await transporter.sendMail(mailOptions)
        console.log("message sent " + info.messageId)
    } catch (error) {
        console.log(error)
    }
}