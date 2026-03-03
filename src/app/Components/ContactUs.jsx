"use client";
import React, { useEffect, useState } from "react";
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
  const [messageType, setMessageType] = useState(""); // "success" | "error" | ""
  const [errors, setErrors] = useState({});

  // Formspree configuration
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzddddlb";
  const FORMSPREE_SUCCESS_REDIRECT = "https://vinylartgraphic.com/thank-you"; // Opcional

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
        formData.message,
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

    // Clear previous messages
    setSubmitMessage("");
    setMessageType("");

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setSubmitMessage("Please correct the form errors");
      setMessageType("error");
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const sanitizedData = sanitizeData(formData);

      // Prepare FormData for Formspree (required format)
      const formDataToSend = new FormData();
      formDataToSend.append("name", sanitizedData.name);
      formDataToSend.append("email", sanitizedData.email);
      formDataToSend.append("subject", sanitizedData.subject);
      formDataToSend.append("message", sanitizedData.message);

      // Optional: Add _replyto for better email routing
      formDataToSend.append("_replyto", sanitizedData.email);

      // Optional: Add redirect URL
      if (FORMSPREE_SUCCESS_REDIRECT) {
        formDataToSend.append("_next", FORMSPREE_SUCCESS_REDIRECT);
      }

      // Send to Formspree
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        // Success
        setSubmitMessage(
          "Your message has been sent successfully! We'll get back to you soon.",
        );
        setMessageType("success");

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Optional: Auto-clear success message after 8 seconds
        setTimeout(() => {
          setSubmitMessage("");
          setMessageType("");
        }, 8000);
      } else {
        // Formspree specific error
        const errorMsg =
          result.error || "Failed to send message. Please try again.";
        setSubmitMessage(`Error: ${errorMsg}`);
        setMessageType("error");
      }
    } catch (error) {
      // Network or other errors
      console.error("Form submission error:", error);
      setSubmitMessage(
        "Network error. Please check your connection and try again.",
      );
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clear message after timeout
  useEffect(() => {
    if (submitMessage && messageType === "error") {
      const timer = setTimeout(() => {
        setSubmitMessage("");
        setMessageType("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitMessage, messageType]);

  return (
    <>
      <div className='w-full'>
        <h1 className='text-[35px] font-bold text-[#FFFF00] mt-[40px] text-center'>
          CONTACT US
        </h1>
        {/* Mensaje de contacto clickable */}
        <div className='relative text-center mt-8 mb-4'>
          <div className='relative flex justify-center'>
            <span
              className='px-4 text-sm animate-[neon_2s_ease-in-out_infinite]'
              style={{
                color: "#9ca3af",
                textShadow:
                  "0 0 5px rgba(250,204,21,0.3), 0 0 10px rgba(250,204,21,0.2)",
              }}
            >
              ⚡ Click any contact to connect instantly ⚡
            </span>
          </div>
        </div>

        {/* Agrega esto a tu archivo CSS global */}
        <style jsx>{`
          @keyframes neon {
            0%,
            100% {
              text-shadow:
                0 0 5px rgba(250, 204, 21, 0.3),
                0 0 10px rgba(250, 204, 21, 0.2);
              color: #9ca3af;
            }
            50% {
              text-shadow:
                0 0 10px rgba(250, 204, 21, 0.6),
                0 0 20px rgba(250, 204, 21, 0.4),
                0 0 30px rgba(250, 204, 21, 0.2);
              color: #ffffff;
            }
          }
        `}</style>
        <div className='flex justify-center mt-[40px] mb-[30px]'>
          <div className='w-[100%] max-w-4xl h-[1px] border-t-2 border-dashed border-[#FFFF00]'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          {/* Número 1 - Celular */}
          <a
            href='tel:+17865327005'
            className='flex items-center justify-center gap-1 p-2 '
            onClick={(e) => {
              if (
                !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent,
                )
              ) {
                e.preventDefault();
                alert("Por favor llama desde tu teléfono al (786) 532-7005");
              }
            }}
          >
            <Image
              src='/CELLICON.svg'
              alt='Icono celular'
              width={20}
              height={20}
              className='w-8 h-8'
            />
            <p className='text-white text-[16px] font-bold lg:text-[16px]'>
              (786) 532-7005
            </p>
          </a>

          {/* Número 2 - Oficina */}
          <a
            href='tel:+13059607677'
            className='flex items-center justify-center gap-1 p-2 '
            onClick={(e) => {
              if (
                !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent,
                )
              ) {
                e.preventDefault();
                alert("Por favor llama desde tu teléfono al (305) 960-7677");
              }
            }}
          >
            <Image
              src='/TELEFONOOFICINAICON.svg'
              alt='Icono oficina'
              width={20}
              height={20}
              className='w-8 h-8'
            />
            <p className='text-white text-[16px] font-bold lg:text-[16px]'>
              (305) 960-7677
            </p>
          </a>

          {/* Email */}
          <a
            href='mailto:info@vinylartgraphic.com'
            onClick={(e) => {
              // Detectar si es desktop
              if (
                !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent,
                )
              ) {
                e.preventDefault();
                // Opción A: Mostrar mensaje
                alert(
                  "Email: info@vinylartgraphic.com\n\nYour default email client will open.",
                );
                // Opción B: Abrir en Gmail web (opcional)
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=info@vinylartgraphic.com",
                  "_blank",
                );
              }
            }}
            className='flex items-center justify-center gap-2 p-2 md:col-span-2'
          >
            <Image
              src='/EMAILICON.svg'
              alt='Icono email'
              width={20}
              height={20}
              className='w-8 h-8 group-hover:scale-110 transition-transform'
            />
            <p className='text-white text-[16px] lg:text-[16px]'>
              info@vinylartgraphic.com
            </p>
          </a>
          {/* Dirección - Abre en Google Maps */}
          <a
            href='https://www.google.com/maps/search/?api=1&query=4910+E+4th+Ave+Hialeah+FL+33013'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 p-2 md:col-span-2'
          >
            <Image
              src='/UBICACIoNICON.svg'
              alt='ubicación'
              width={20}
              height={20}
              className='w-8 h-8'
            />
            <p className='text-white text-[16px] lg:text-[16px] text-center'>
              4910 E 4th Ave, Hialeah, FL 33013
            </p>
          </a>

          {/* Horario - No clickable */}
          <div className='flex items-center justify-center gap-2 p-2'>
            <Image
              src='/CALENDARIOICON.svg'
              alt='horario'
              width={20}
              height={20}
              className='w-8 h-8'
            />
            <p className='text-white text-[16px] lg:text-[16px]'>
              Monday – Friday
            </p>
          </div>

          <div className='flex items-center justify-center gap-2 p-2'>
            <Image
              src='/RELOJICON.svg'
              alt='horario'
              width={20}
              height={20}
              className='w-8 h-8'
            />
            <p className='text-white font-bold text-[14px] lg:text-[14px]'>
              10:00 – 17:00
            </p>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className='flex justify-center mt-[40px]'>
          <div className='w-[90%] max-w-4xl h-[1px] border-t-2 border-[#FFFF00] mb-[35px]'></div>
        </div>

        {/* Título del formulario */}
        <h2 className='text-[24px] font-bold text-[#FFFF00] mb-[20px] text-center'>
          GET IN TOUCH
        </h2>

        {/* Formulario */}
        <div className='w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8'>
          <form className='space-y-6' onSubmit={handleSubmit} noValidate>
            <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
              <div className='flex-1'>
                <input
                  type='text'
                  id='name'
                  name='name'
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
                  name='email'
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
                name='subject'
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
                name='message'
                placeholder='Your message*'
                value={formData.message}
                onChange={handleChange}
                rows={6}
                maxLength={1000}
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

            {/* Status Message */}
            {submitMessage && (
              <div
                className={`p-4 rounded-lg border ${
                  messageType === "success"
                    ? "bg-green-500/10 text-green-300 border-green-500/30"
                    : "bg-red-500/10 text-red-300 border-red-500/30"
                }`}
              >
                <div className='flex items-start'>
                  <span className='mr-2 text-lg'>
                    {messageType === "success" ? "✅" : "⚠️"}
                  </span>
                  <span className='flex-1'>{submitMessage}</span>
                </div>
              </div>
            )}

            <button
              type='submit'
              disabled={isSubmitting}
              className={`w-[200px] py-3 text-white text-sm hover:cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed ${
                isSubmitting
                  ? "bg-pink-700"
                  : "bg-pink-500 hover:bg-white hover:text-pink-500"
              }`}
            >
              {isSubmitting ? (
                <span className='flex items-center justify-center'>
                  <svg
                    className='animate-spin h-4 w-4 mr-2 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    ></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    ></path>
                  </svg>
                  SENDING...
                </span>
              ) : (
                "SUBMIT QUESTION"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
