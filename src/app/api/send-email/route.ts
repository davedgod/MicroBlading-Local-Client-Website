import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { to, subject, message } = body;

    // Validate inputs
    if (!to || !subject || !message) {
      return NextResponse.json(
        { error: "Lipsesc câmpuri obligatorii" },
        { status: 400 },
      );
    }

    // Trimite email folosind Resend
    const { data, error } = await resend.emails.send({
      from: "Formular Contact <onboarding@resend.dev>", // Poți schimba cu domeniul tău după verificare
      to: [to],
      subject: subject,
      text: message,
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "A apărut o eroare la trimiterea emailului" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "A apărut o eroare la trimiterea emailului" },
      { status: 500 },
    );
  }
}
