import { createTransport } from "nodemailer";

/**
 * Configura un transporte SMTP para el envío de correos electrónicos.
 * Utiliza el servicio de Gmail y autentica las solicitudes con credenciales
 * almacenadas en variables de entorno.
 *
 * @constant {object} transporter - Instancia de transporte configurada para enviar correos.
 *
 * @property {string} service - Especifica el servicio de correo a utilizar. En este caso, "gmail".
 * @property {object} auth - Contiene las credenciales para autenticarse con el servidor SMTP.
 * @property {string} auth.user - Dirección de correo electrónico utilizada como remitente. Se obtiene de la variable de entorno `EMAIL`.
 * @property {string} auth.pass - Contraseña o token de aplicación para la cuenta de correo. Se obtiene de la variable de entorno `EMAIL_PASSWORD`.
 *
 * @note
 * - Asegúrate de configurar correctamente las variables de entorno `EMAIL` y `EMAIL_PASSWORD`.
 * - Si estás utilizando autenticación de dos factores en Gmail, usa un **App Password** en lugar de la contraseña regular.
 *
 */
const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default transporter;
