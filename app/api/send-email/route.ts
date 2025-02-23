import { NextResponse } from 'next/server';
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY!);

export async function POST(request: Request) {
    const message = await request.json();

    const status = await (async () => {
        try {
          await sgMail.send(message);
          return true;
        } catch (error: any) {
          return false;
        }
    })();

    return status ? NextResponse.json({ message: 'Email sent successfully' }) : NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
}