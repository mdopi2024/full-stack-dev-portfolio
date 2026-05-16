// utils/sendEmail.ts

import emailjs from "@emailjs/browser";
import React from "react";

export const handleSendMessage = async (
    e: React.FormEvent<HTMLFormElement>
) => {
    e.preventDefault();

    try {
        await emailjs.sendForm(
            "service_3df9qqj",
            "template_nloykpm",
            e.currentTarget,
            "Q9d3XCSKak1DDPg6C"
        );

        alert("Message sent successfully!");

        e.currentTarget.reset();
    } catch (error: any) {
        console.log("Full error object:", error);
        console.log("Error JSON:", JSON.stringify(error, null, 2));
        console.log("Error message:", error?.text || error?.message);

        alert("Failed to send message");
    }
}