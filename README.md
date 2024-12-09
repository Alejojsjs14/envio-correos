# 📧 Envío de Correos con Gmail

Este proyecto contiene código para enviar correos electrónicos utilizando **SMTP** con **Gmail**.  
Perfecto para integraciones rápidas o automatización de notificaciones por correo. 🚀

---

## 🛠️ Cómo ejecutar el servidor

Para iniciar el servidor local, asegúrate de tener instalado **Node.js** y luego usa el siguiente comando:

```bash
npm start
```

---

## ⚙️ Configuración de Variables de Entorno

Antes de ejecutar el proyecto, configura las siguientes variables en tu archivo `.env`:

- `PORT` - El puerto en el que correrá el servidor (por ejemplo: 3000).
- `EMAIL` - Dirección de correo electrónico desde la cual se enviarán los correos.
- `EMAIL_PASSWORD` - Contraseña o token de la cuenta de correo configurada.

### Ejemplo de archivo `.env`:

```env
PORT=3000
EMAIL=tu_correo@gmail.com
EMAIL_PASSWORD=tu_contraseña_o_token
```

---

## 📋 Requisitos Previos

1. **Node.js** y **npm** instalados en tu máquina.
2. Configuración en tu cuenta de Gmail:
   - Habilita el acceso para aplicaciones menos seguras (si es necesario).  
   - Si usas autenticación de dos pasos, genera un **App Password** y utilízalo en lugar de tu contraseña habitual.
3. Verifica que el puerto configurado no esté en uso.

---

## 📎 Notas adicionales

- Este proyecto utiliza **Nodemailer** para manejar la configuración SMTP.
- Para evitar bloqueos de tu cuenta de Gmail, sigue las políticas de uso de Gmail sobre SMTP.  
- Si encuentras problemas al enviar correos, verifica las credenciales en tu archivo `.env`.

---

## 🧪 Pruebas y Verificación

1. Inicia el servidor con `npm start`.
2. Envía un correo de prueba utilizando la funcionalidad implementada.
3. Verifica que el correo se haya recibido correctamente.

💡 **Consejo:** Para depurar errores, revisa los logs del servidor.

---

¡Listo! Ahora puedes enviar correos fácilmente con Gmail y SMTP. 😎
