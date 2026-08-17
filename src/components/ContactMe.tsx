import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MailIcon,
  PhoneIcon,
  LocateFixedIcon,
  Send,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "gauravkum0996@gmail.com",
    href: "mailto:gauravkum0996@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8595733794",
    href: "tel:+91 8595733794",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "New Delhi",
    href: "#",
  },
];
export default function Contact() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsloading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    setSubmitStatus({
      type: "",
      message: "",
    });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const tempId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !tempId || !publicKey) {
        throw new Error(
          "Emailjs coinfiguration is missing. please check environment varirable.",
        );
      }
      await emailjs.send(
        serviceId,
        tempId,
        {
          name: formdata.name,
          email: formdata.email,
          message: formdata.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully. I'll get back to you soon.",
      });

      setFormdata({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.log(`Error : ${err}`);
      setSubmitStatus({
        type: `error`,
        message: "Message not sent. Please try again later.",
      });
    } finally {
      setIsloading(false);
    }
  };
  return (
    <section className="py-30 bg-[#05161f] ">
      <div className="container max-w-4xl m-auto ">
        <div className="flex gap-3">
          <form
            className="space-y-5 pt-4 w-full max-w-lg  px-5 shadow-[0px_0px_4px_0px_#fff] rounded-lg backdrop-blur-2xl"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                required
                id="name"
                value={formdata.name}
                onChange={(e) => {
                  setFormdata({ ...formdata, name: e.target.value });
                }}
                placeholder="Enter Your Name"
                className=" shadow-[0px_0px_1px_0px_#fff] my-2 outline-none px-2 py-1 w-full rounded-md focus:ring-1 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                required
                id="email"
                value={formdata.email}
                onChange={(e) => {
                  setFormdata({ ...formdata, email: e.target.value });
                }}
                placeholder="example@gmail.com"
                className=" shadow-[0px_0px_1px_0px_#fff] my-2 outline-none px-2 py-1 w-full rounded-md focus:ring-1 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label htmlFor="Message"> Message :</label>
              <textarea
                rows={3}
                value={formdata.message}
                onChange={(e) => {
                  setFormdata({ ...formdata, message: e.target.value });
                }}
                placeholder="Enter Your Message Here !"
                required
                id="Message"
                className=" shadow-[0px_0px_1px_0px_#fff] my-2 outline-none px-2 py-1 w-full rounded-md focus:ring-1 focus:ring-cyan-400 resize-none"
              />
              <button
                type="submit"
                className="w-full text-center bg-teal-700 text-white py-2 cursor-pointer rounded-md"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div>Sending....</div>
                ) : (
                  <div className="flex justify-center items-center gap-3">
                    Send <Send size={16} />
                  </div>
                )}
              </button>

              {submitStatus.type && (
                <div
                  className={`my-2 flex items-center gap-2 border p-2 px-3 text-white ${
                    submitStatus.type === "success"
                      ? "border-green-900 bg-green-950/20"
                      : "border-red-900 bg-red-950/20"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="text-green-400" />
                  ) : (
                    <AlertCircle className="text-red-400" />
                  )}

                  <p className="text-xs">{submitStatus.message}</p>
                </div>
              )}
            </div>
          </form>
          <div className="flex flex-col w-md gap-3 backdrop-blur-2xl">
            <div className="p-3 shadow-[0px_0px_4px_0px_#fff]  rounded-lg ">
              <h4>Contact Information</h4>
              <div className="flex flex-col space-y-3">
                <div className="flex gap-3 items-center ">
                  <MailIcon size={30} className="p-2 bg-teal-700 rounded-md " />
                  <div className="flex flex-col gap-0">
                    <span className="text-xs text-white/90 font-sans">
                      {contactInfo[0].label}
                    </span>
                    <p className="text-md text-white/20 m-0">
                      {contactInfo[0].value}
                    </p>
                  </div>
                </div>
                <div className="flex  gap-3 items-center">
                  <PhoneIcon
                    size={30}
                    className="p-2 bg-teal-700 rounded-md "
                  />
                  <div>
                    <span className="text-xs text-white/90 font-sans">
                      {contactInfo[1].label}
                    </span>
                    <p className="text-md text-white/20 m-0">
                      {contactInfo[1].value}
                    </p>
                  </div>
                </div>
                <div className="flex  gap-3 items-center">
                  <LocateFixedIcon
                    size={30}
                    className="p-2 bg-teal-700 rounded-md "
                  />
                  <div>
                    <span className="text-xs text-white/90 font-sans">
                      {contactInfo[2].label}
                    </span>
                    <p className="text-md text-white/20 m-0">
                      {contactInfo[2].value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 shadow-[0px_0px_1px_0px_#fff] rounded-lg backdrop-blur-2xl">
              <div className="flex gap-2 items-center py-2">
                <span className="w-2 h-2 rounded-2xl bg-teal-600 animate-pulse inline-block" />
                <p>Currently Available</p>
              </div>
              <p className="text-sm text-white/30">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
