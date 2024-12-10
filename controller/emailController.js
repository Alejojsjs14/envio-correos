import httpstatus from "http-status";
import transporter from "../helpers/emailHelper.js";

class emailController {
  /**
   * Método estático para enviar correos electrónicos utilizando Nodemailer.
   *
   * @function email
   * @param {object} req.body - Contiene los datos necesarios para el correo.
   * @param {string} req.body.to - Dirección de correo electrónico del destinatario.
   * @param {string} req.body.subject - Asunto del correo.
   * @param {object} res - Objeto de la respuesta HTTP utilizado para enviar el resultado al cliente.
   * @param {function} next - Función para pasar al siguiente middleware en caso de error.
   *
   * @returns {object} Respuesta JSON que confirma el envío exitoso del correo, o pasa el error al siguiente middleware.
   *
   * @property {object} mailOptions - Configuración del correo electrónico.
   * @property {string} mailOptions.from - Dirección de correo del remitente (desde `process.env.EMAIL`).
   * @property {string} mailOptions.to - Dirección del destinatario (desde `req.body.to`).
   * @property {string} mailOptions.subject - Asunto del correo (desde `req.body.subject`).
   *
   * @note
   * - Las imágenes incrustadas usan identificadores únicos (`cid`) que deben coincidir entre el contenido HTML y los adjuntos.
   *
   */
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
