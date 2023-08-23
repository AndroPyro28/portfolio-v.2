import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailJs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { toast } from "react-hot-toast";

const Contact = () => {
  const initialFormValue = {
    email: "",
    name: "",
    message: "",
  };
  const formRef = useRef<any>();
  const [form, setForm] = useState(initialFormValue);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailJs
      .send(
        "service_pba66lp",
        "template_r7umi7l",
        {
          from_name:  `${form.name} - ${form.email}` ,
          to_name: "Andro",
          from_email: form.email,
          to_email: "menandroeugenio1028@gmail.com",
          message: form.message,
        },
        "ubKU-yTGR3f1aj4w5"
      )
      .then(() => {
        setLoading(false);
        toast.success("Thank you, I will get back to you as soon as possible.");
        setForm((prev) => initialFormValue);
      })
      .catch(() => {
        toast.error("Something went wrong...");
      });
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-md"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
