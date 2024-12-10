import httpstatus from "http-status";
import transporter from "../helpers/emailHelper.js";

class emailController {
  static async email(req, res, next) {
    const { to, subject, text } = req.body;

    // Set up email options
    const mailOptions = {
      from: process.env.EMAIL,
      to,
      subject,
      text,
      // HTML body
      html: `<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>
      <p>Here's a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>`,

      // An array of attachments
      attachments: [
        // String attachment
        {
            filename: 'notes.txt',
            content: 'Some notes about this e-mail',
            contentType: 'text/plain' // optional, would be detected from the filename
        },

      ],
    };

    // Send the email
    try {
      let info = await transporter.sendMail(mailOptions);
      console.log("Email sent: " + info.response);
      return res.status(httpstatus.OK).json({
        message: "Correo enviado exitosamente",
        info,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default emailController;
