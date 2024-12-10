import httpStatus from "http-status";

/**
 * Middleware para manejar errores en la aplicación.
 * Captura los errores generados durante la ejecución de las solicitudes y envía
 * una respuesta JSON con información detallada sobre el error.
 *
 * @function errorHandler
 * @param {object} err - Objeto de error generado durante la ejecución.
 * @param {object} _req - Objeto de la solicitud HTTP (no utilizado en este middleware, indicado con _).
 * @param {object} res - Objeto de la respuesta HTTP utilizado para enviar la respuesta al cliente.
 * @param {function} _next - Función next para pasar al siguiente middleware (no utilizada, indicada con _).
 *
 * @returns {void} Envía una respuesta HTTP con el código de error y detalles en formato JSON.
 *
 *
 * @note
 * - Este middleware asume que los errores tienen un statusCode definido. Si no se proporciona,
 *   se usa el estado HTTP 500 (Internal Server Error) por defecto.
 *
 */
const errorHandler = (err, _req, res, _next) => {
  const { statusCode, message } = err;

  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    status: statusCode,
    code: httpStatus.INTERNAL_SERVER_ERROR,
    message,
  });
};

export default errorHandler;
