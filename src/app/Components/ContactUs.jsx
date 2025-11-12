"use client";
import React, { useState } from "react";
import Image from "next/image";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    } else if (formData.name.length > 50) {
      newErrors.name = "Name cannot exceed 50 characters";
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s\-'.]{2,50}$/.test(formData.name)) {
      newErrors.name = "Name contains invalid characters";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    } else if (formData.email.length > 100) {
      newErrors.email = "Email cannot exceed 100 characters";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.length < 5) {
      newErrors.subject = "Subject must be at least 5 characters long";
    } else if (formData.subject.length > 100) {
      newErrors.subject = "Subject cannot exceed 100 characters";
    } else if (/(<script|javascript:|onclick|onload)/i.test(formData.subject)) {
      newErrors.subject = "Subject contains invalid content";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    } else if (formData.message.length > 1000) {
      newErrors.message = "Message cannot exceed 1000 characters";
    } else if (
      /(<script|javascript:|onclick|onload|http:\/\/|https:\/\/){2,}/i.test(
        formData.message
      )
    ) {
      newErrors.message = "Message contains invalid content";
    }

    return newErrors;
  };
  const sanitizeData = (data) => {
    return {
      name: data.name.trim().replace(/<[^>]*>/g, ""), // Remove HTML tags
      email: data.email.trim().toLowerCase(),
      subject: data.subject.trim().replace(/<[^>]*>/g, ""),
      message: data.message.trim().replace(/<[^>]*>/g, ""),
    };
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "name" && value.length > 50) return;
    if (id === "email" && value.length > 100) return;
    if (id === "subject" && value.length > 100) return;
    if (id === "message" && value.length > 1000) return;
    setFormData({
      ...formData,
      [id]: value,
    });
    if (errors[id]) {
      setErrors({
        ...errors,
        [id]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setSubmitMessage("❌ Please correct the form errors");
      return;
    }
    setIsSubmitting(true);
    setSubmitMessage("");
    setErrors({});
    try {
      const sanitizedData = sanitizeData(formData);
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sanitizedData),
      });
      const result = await response.json();
      if (response.ok) {
        setSubmitMessage("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitMessage(
          `❌ Error: ${result.error || "Failed to send message"}`
        );
      }
    } catch (error) {
      setSubmitMessage("❌ Connection error. Please try again.");
      console.error("Fetch error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className='w-full '>
        <h1 className='text-[35px] font-bold text-[#FFFF00] mt-[40px] text-center'>
          CONTACT US
        </h1>
        <div className='flex justify-center mt-[40px] mb-[30px]'>
          <div className='w-[100%] max-w-4xl h-[1px] border-t-2 border-dashed border-[#FFFF00]'></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <div className='flex items-center justify-center gap-1 p-2'>
            <Image
              src='/images-footer/CELLICON.svg'
              alt='Icono 1'
              width={20}
              height={20}
              className='w-8 h-8'
            />
            <p className='text-white text-[16px] font-bold lg:text-[16px]'>
              +1 (786) 532-7005
            </p>
          </div>
          <div className='flex items-center justify-center gap-2 p-2'>
            <Image
              src='/images-footer/EMAILICON.svg'
              alt='Icono 2'
              width={20}
              height={20}
              className='w-8 h-8'
            />
            <p className='text-white text-[16px] lg:text-[16px]'>
              info@vinylartgraphic.com
            </p>
          </div>
          <div className='flex items-center justify-center gap-2 p-2 md:col-span-2'>
            <Image
              src='/images-footer/UBICACIÓNICON.svg'
              alt='ubication'
              width={20}
              height={20}
              className='w-8 h-8'
            />
            <p className='text-white text-[16px] lg:text-[16px] text-center'>
              4910 E 4 ave Hialeah, Florida 33013
            </p>
          </div>
          <div className='flex items-center justify-center gap-2 p-2'>
            <Image
              src='/images-footer/EMAILICON.svg'
              alt='email'
              width={20}
              height={20}
              className='w-8 h-8'
            />
            <p className='text-white text-[16px] lg:text-[16px]'>
              Weekdays: Open | Weekend: Closed
            </p>
          </div>
          <div className='flex items-center justify-center gap-2 p-2'>
            <Image
              src='/images-footer/RELOJICON.svg'
              alt='clock'
              width={20}
              height={20}
              className='w-8 h-8'
            />
            <p className='text-white font-bold text-[14px] lg:text-[14px]'>
              10:00 – 17:00
            </p>
          </div>
        </div>
        <div className='flex justify-center mt-[40px]'>
          <div className='w-[90%] max-w-4xl h-[1px] border-t-2 border-[#FFFF00] mb-[35px]'></div>
        </div>
        <h2 className='text-[24px] font-bold text-[#FFFF00]  mb-[20px]'>
          GET IN TOUCH
        </h2>
       <div className='w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8'>
  <form className='space-y-6' onSubmit={handleSubmit} noValidate>
    <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
      <div className='flex-1'>
    <input
      type='text'
      id='name'
      placeholder='Name*'
      value={formData.name}
      onChange={handleChange}
      required
      className={`w-full px-4 py-3 bg-transparent border-1 border-white text-white placeholder-gray-300 outline-none transition-colors focus:bg-white/10 ${
        errors.name ? "border-red-500" : "border-white"
      }`}
    />
    {errors.name && (
      <p className='text-red-400 text-sm mt-1'>{errors.name}</p>
    )}
  </div>
  <div className='flex-1'>
    <input
      type='email'
      id='email'
      placeholder='Email*'
      value={formData.email}
      onChange={handleChange}
      required
      className={`w-full px-4 py-3 bg-transparent border-1 border-white text-white placeholder-gray-300 outline-none transition-colors focus:bg-white/10 ${
        errors.email ? "border-red-500" : "border-white"
      }`}
    />
    {errors.email && (
      <p className='text-red-400 text-sm mt-1'>{errors.email}</p>
    )}
  </div>
</div>
<div>
  <input
    type='text'
    id='subject'
    placeholder='Subject*'
    value={formData.subject}
    onChange={handleChange}
    required
    className={`w-full px-4 py-3 bg-transparent border-1 border-white text-white placeholder-gray-300 outline-none transition-colors focus:bg-white/10 ${
      errors.subject ? "border-red-500" : "border-white"
    }`}
  />
  {errors.subject && (
    <p className='text-red-400 text-sm mt-1'>{errors.subject}</p>
  )}
</div>
<div>
  <textarea
    id='message'
    placeholder='Your message*'
    value={formData.message}
    onChange={handleChange}
    rows={6}
    required
    className={`w-full px-4 py-3 bg-transparent border-1 border-white text-white placeholder-gray-300 outline-none resize-vertical transition-colors focus:bg-white/10 ${
      errors.message ? "border-red-500" : "border-white"
    }`}
  />
  {errors.message && (
    <p className='text-red-400 text-sm mt-1'>{errors.message}</p>
  )}
  <div className='text-right text-sm text-gray-400 mt-1'>
    {formData.message.length}/1000
  </div>
</div>
{submitMessage && (
  <div
    className={`p-3 rounded ${
      submitMessage.includes("✅")
        ? "bg-green-500/20 text-green-300"
        : "bg-red-500/20 text-red-300"
    }`}
  >
    {submitMessage}
  </div>
)}
<button
  type='submit'
  disabled={isSubmitting}
  className='w-[200px] py-1 bg-pink-500 text-white text-sm hover:bg-white hover:cursor-pointer hover:text-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed'
>
  {isSubmitting ? "SENDING..." : "SUBMIT QUESTION"}
</button>
  </form>
</div>
      </div>
    </>
  );
};

export default ContactUs;
