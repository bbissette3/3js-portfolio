import { useFormik } from "formik";
import * as Yup from "yup";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Please enter your name."),
  email: Yup.string().email("Invalid email address").required("Required"),
  message: Yup.string().required("Please enter your message."),
});

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await emailjs.send(
          import.meta.env.VITE_REACT_APP_EMAILJS_SERVICEID,
          import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATEID,
          values,
          import.meta.env.VITE_REACT_APP_EMAILJS_USERID
        );
        toast.success("Message sent");
        formik.resetForm();
      } catch (err) {
        toast.error("Failed to send message");
      }
    },
  });

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form
          onSubmit={formik.handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
            {formik.errors.name ? (
              <div className="pl-5 pt-2 text-red-500 opacity-100">
                {formik.errors.name}
              </div>
            ) : null}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
            {formik.errors.email ? (
              <div className="pl-5 pt-2 text-red-500 opacity-100">
                {formik.errors.email}
              </div>
            ) : null}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
            {formik.errors.message ? (
              <div className="pl-5 pt-2 text-red-500 opacity-100">
                {formik.errors.message}
              </div>
            ) : null}
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:scale-[0.95]"
          >
            Send
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
