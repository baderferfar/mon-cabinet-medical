"use server";

import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { z } from "zod";
import { formSchema } from "./schemas";

const resendApiKey = process.env.RESEND_API_KEY;
const emailSenderAddress = process.env.EMAIL_SENDER_ADDRESS;
const emailRecipientAddress = process.env.EMAIL_RECIPIENT_ADDRESS;
const resend = new Resend(resendApiKey);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    // TODO: Add this emailFormData to some database

    const { error } = await resend.emails.send({
      from: emailSenderAddress!,
      to: emailRecipientAddress!,
      subject: "Prise de contact",
      react: EmailTemplate ({data: emailFormData}) ,
    });
  
    if (error) {
      throw error;
    }
  } catch (e) {
    throw e;
  }
};