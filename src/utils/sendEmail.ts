// utils/sendEmail.ts
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export const handleSendMessage = async (
    e: React.FormEvent<HTMLFormElement>
) => {
    e.preventDefault();

    // ⚠️ Save currentTarget BEFORE any await — React nullifies the synthetic
    // event after the first await, so e.currentTarget becomes null otherwise.
    const form = e.currentTarget;

    const toastId = toast.loading("Sending message...");
    try {
        await emailjs.sendForm(
            "service_3df9qqj",
            "template_nloykpm",
            form,                   // ← use saved ref, not e.currentTarget
            "Q9d3XCSKak1DDPg6C"
        );

        toast.success("Message sent!", {
            description: "I'll get back to you as soon as possible.",
            duration: 4000,
            id: toastId,
        });

        form.reset();               // ← use saved ref here too

    } catch (error) {
        toast.error("Failed to send message", { id: toastId });
    }
};