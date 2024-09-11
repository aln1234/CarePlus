"use server";

import { ID } from "node-appwrite";
import { messaging } from "../appwrite.config";
import { parseStringify } from "../utils";

//sen sms notification

export const sendSMSNotification = async (userId: string, content: string) => {
  try {
    const message = await messaging.createSms(
      ID.unique(),
      content,
      [],
      [userId]
    );
    return parseStringify(message);
  } catch (error) {
    console.error("An errror occured while sending sms:", error);
  }
};

export const testSms = async () => {
  console.log("I am message");
  const smsMessage = `Greetings from CarePulse. Reason`;
  await sendSMSNotification("669f82cb001d4f1f5ee9", smsMessage);
};
