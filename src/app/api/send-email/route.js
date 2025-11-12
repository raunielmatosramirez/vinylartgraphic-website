import { Resend } from "resend";

// Inicializar Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validar campos requeridos
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY no configurada");
      return Response.json(
        { error: "Error de configuración del servidor" },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Vinylartgraphic Form <onboarding@resend.dev>",
      to: ["raunielmatos@gmail.com"], // Cambia por tu email
      subject: `Contacto: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #f8f9fa; padding: 20px; border-radius: 5px; }
              .content { margin: 20px 0; }
              .field { margin-bottom: 10px; }
              .field strong { display: inline-block; width: 80px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Nuevo mensaje de contacto</h1>
              </div>
              <div class="content">
                <div class="field"><strong>Nombre:</strong> ${name}</div>
                <div class="field"><strong>Email:</strong> ${email}</div>
                <div class="field"><strong>Asunto:</strong> ${subject}</div>
                <div class="field"><strong>Mensaje:</strong></div>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
                  ${message.replace(/\n/g, "<br>")}
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });
    if (error) {
      console.error("Error de Resend:", error);
      return Response.json({ error: error.message }, { status: 500 });
    }
    return Response.json({
      success: true,
      message: "Email enviado correctamente",
      data,
    });
  } catch (error) {
    console.error("Error general:", error);
    return Response.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
