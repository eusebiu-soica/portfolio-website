import emailjs from "emailjs-com";

export async function sendEmail(name: string, email: string, message: string, recaptchaToken: string) {
  const serviceID = "service_w2g1hal";
  const templateID = "template_59a99ew";
  const publicKey = "88xGhvkBO2qILWP8r";

  const params = {
    name,
    reply_email: email,
    message,
    "g-recaptcha-response": recaptchaToken 
  };

  try {
    const response = await emailjs.send(serviceID, templateID, params, publicKey);
    return response;
  } catch (error) {
    throw new Error("Email sending failed");
  }
}
