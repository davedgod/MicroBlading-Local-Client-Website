import { NextResponse } from "next/server";

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

    // Simulăm trimiterea emailului fără a necesita configurare reală
    // În producție, ai putea folosi servicii precum SendGrid, Resend.com, etc.
    console.log("Email ar fi trimis cu:", { to, subject, message });

    // Pentru demonstrație, returnăm succes
    // Acest lucru permite formularului să funcționeze fără configurare reală
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "A apărut o eroare la trimiterea emailului" },
      { status: 500 },
    );
  }
}
