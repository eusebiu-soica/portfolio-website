"use client";

import {
  Form,
  Input,
  Textarea,
  Button,
  Card,
  CardBody,
} from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import globe from "@/assets/globe.json";
import { Send } from "lucide-react";
import { sendEmail } from "@/libs/actions";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [submitted, setSubmitted] = useState<any>(null);
  const [errors, setErrors] = useState<any>({});
  const [isClient, setIsClient] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const sanitizeInput = (input: string) => {
    return input?.replace(/<[^>]*>?/gm, "")?.trim();
  };

  const validateInput = (data: Record<string, string>) => {
    const newErrors: Record<string, string> = {};

    if (!data.name || data.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters long.";
    }

    if (/[^a-zA-Z0-9\s]/.test(data.name)) {
      newErrors.name = "Name contains invalid characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!data.message || data.message.length < 5) {
      newErrors.message = "Message must be at least 5 characters long.";
    }

    return newErrors;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    data.name = sanitizeInput(data.name);
    data.email = sanitizeInput(data.email);
    data.message = sanitizeInput(data.message);

    const validationErrors = validateInput(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }

    if (!recaptchaToken) {
      setErrors({ recaptcha: "Please complete the reCAPTCHA" });
      setIsLoading(false);
      return;
    }

    setErrors({});
    setSubmitted(data);

    try {
      const response = await sendEmail(data.name, data.email, data.message, recaptchaToken);
      if (response.status == 200) {
        setResponseMessage("Email sent successfully!");
        if (formRef.current) {
          formRef.current.reset();
        }
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      } else {
        setResponseMessage("Failed to send email");
      }
    } catch (error) {
      console.error("Failed to send email", error);
      setResponseMessage("Failed to send email");
    } finally {
      setIsLoading(false);
      setRecaptchaToken(null);
    }
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const inputClasses = {
    input: '!bg-transparent',
    innerWrapper: '!bg-transparent',
    inputWrapper: [
      '!bg-[#061622]',
      "!backdrop-[#061622]",
      "!hover:bg-[#061622]",
      "data-[hover=true]:!bg-[#061622]",
      "group-data-[focus=true]:!bg-[#061622]",
      "!cursor-text",
      "h-12 md:h-11"
    ],
  }

  const cardVariants = {
    hidden: { y: 100 },
    visible: { y: 0, transition: { type: "spring", duration: 0.6 } },
  };

  return (
    <section
      data-section="5"
      className="snap-section min-h-screen flex flex-col gap-16 relative overflow-hidden items-start px-4 lg:px-28 py-20 bg-background"
    >
      <div className="px-5 lg:px-0 z-10">
        <h1 className="text-3xl lg:text-6xl font-extrabold">
          Let's <span className="text-primary">keep in touch</span>
        </h1>
      </div>

      <motion.div
        whileInView={"visible"}
        initial="hidden"
        viewport={{ once: true }}
        variants={cardVariants}
        className="w-full"
      >
        <Card className="bg-[#0A1E2E] shadow-large z-10 w-full lg:w-1/2">
          <CardBody className="flex justify-start items-start flex-col">
            <Form
              className="w-full justify-start items-start p-4"
              validationBehavior="native"
              validationErrors={errors}
              onSubmit={onSubmit}
              ref={formRef}
            >
              <div className="flex flex-col gap-4 w-full">
                <Input
                  isRequired
                  errorMessage={({ validationDetails }) => {
                    if (validationDetails.valueMissing) {
                      return "Please enter your name";
                    }
                    return errors.name;
                  }}
                  label="Name"
                  labelPlacement="outside"
                  name="name"
                  placeholder="Your name"
                  classNames={inputClasses}
                  radius="sm"
                />

                <Input
                  isRequired
                  errorMessage={({ validationDetails }) => {
                    if (validationDetails.valueMissing) {
                      return "Please enter your email";
                    }
                    if (validationDetails.typeMismatch) {
                      return "Please enter a valid email address.";
                    }
                    return errors.email;
                  }}
                  label="Email"
                  labelPlacement="outside"
                  name="email"
                  placeholder="Your email"
                  type="email"
                  classNames={inputClasses}
                  radius="sm"
                />

                <Textarea
                  isRequired
                  label="Message"
                  minRows={5}
                  labelPlacement="outside"
                  placeholder="Your message"
                  classNames={inputClasses}
                  radius="sm"
                  name="message"
                  errorMessage={errors.message}
                />

                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="your_site_key"
                  onChange={handleRecaptchaChange}
                  className="mb-4"
                />
                {errors.recaptcha && (
                  <p className="text-red-500 text-sm">{errors.recaptcha}</p>
                )}

                <div className="flex mt-4 justify-end">
                  <Button
                    className="g-recaptcha font-medium w-full md:w-1/3 h-12 md:h-11 relative hover:bg-[#b2e6fb]"
                    radius="sm"
                    startContent={<Send size={16} />}
                    color="primary"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send message"}
                  </Button>
                </div>
              </div>
              {responseMessage && (
                <p className="mt-4 text-center text-sm text-gray-300">
                  {responseMessage}
                </p>
              )}
            </Form>
          </CardBody>
        </Card>
      </motion.div>

      {isClient && (
        <Lottie
          animationData={globe}
          className="absolute right-0 md:-right-1/3 scale-[3] top-60 md:top-0 md:scale-100 opacity-30 z-0"
        />
      )}
    </section>
  );
}
