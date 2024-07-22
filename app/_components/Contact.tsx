"use client";

import z from "zod";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import toast from "react-hot-toast";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";
import { Textarea } from "./ui/Textarea";
import { MailPlus, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "../_lib/hooks";
import { ContactFormSchema } from "../_lib/schema";
import { sendEmail } from "@/app/_actions/sendEmail";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.5);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
    const result = await sendEmail(data);
    if (result?.success) {
      console.log({ data: result.data });
      toast.success("Email Sent!");
      reset();
      return;
    }
    // Toast Error :(
    toast.error("Something went wrong");
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mx-auto mb-8 px-2 pb-8 sm:w-2/3 md:w-2/5"
    >
      <motion.div className="flex items-center justify-center text-center">
        <SectionHeading>
          <MailPlus size={20} className="mr-2" />
          Contact Me
        </SectionHeading>
      </motion.div>
      <form onSubmit={handleSubmit(processForm)} className="text-gray-300">
        <Label className="text-slate-300">Full Name</Label>
        <Input
          {...register("fullName")}
          name="fullName"
          placeholder="Full Name..."
          id="name"
          type="text"
          maxLength={50}
          className="mb-3"
        />
        {errors.fullName && (
          <p className="pb-2 font-nunito font-normal text-red-500">
            {errors.fullName.message}
          </p>
        )}
        <Label className="text-slate-300">Email</Label>
        <Input
          {...register("email")}
          name="email"
          placeholder="Email..."
          id="email"
          type="email"
          maxLength={50}
          className="mb-3 w-full"
        />
        {errors.email && (
          <p className="pb-2 font-nunito font-normal text-red-500">
            {errors.email.message}
          </p>
        )}
        <Label className="text-slate-300">Message</Label>
        <Textarea
          {...register("message")}
          name="message"
          placeholder="Message..."
          id="message"
          cols={30}
          rows={5}
          maxLength={500}
          className="mb-3 resize-none"
        />
        {errors.message && (
          <p className="pb-2 font-nunito font-normal text-red-500">
            {errors.message.message}
          </p>
        )}
        <Button
          type="submit"
          className="group z-[1000] mt-2 flex h-full w-full items-center justify-center gap-2 rounded-full bg-slate-300 font-raleway text-base font-bold text-slate-800 outline-none transition-all duration-500 hover:scale-105 hover:bg-slate-300 focus:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="h-full items-center justify-center rounded-full text-center">
              Sending...
            </div>
          ) : (
            <>
              Submit Message{" "}
              <Send className="text-xs text-slate-900 opacity-70 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />{" "}
            </>
          )}
        </Button>
      </form>
    </motion.section>
  );
};

export default Contact;
