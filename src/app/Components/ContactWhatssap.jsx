"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { IoMdSend } from "react-icons/io";

const WhatsAppButton = () => {
  const phoneNumber = "+1 7865327005";
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);
  const containerRef = useRef(null);

  // Ajustar altura del textarea automáticamente
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [message]);

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-100">
      {/* Chat Container */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-70 bg-black/90 backdrop-blur-sm rounded-sm shadow-2xl  p-4 animate-fade-in">
          {/* Header con botón cerrar */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-[#FFFF00] text-sm font-large">WhatsApp message</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Campo de escritura */}
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe tu mensaje..."
            className="w-full bg-transparent text-white placeholder-gray-400 border border-[#FFFF00]/30 rounded-lg p-3 text-sm resize-none focus:outline-none focus:border-[#FFFF00] transition-colors mb-3"
            rows="3"
          />

          {/* Botón Enviar con cohete redondo */}
          <div className="flex absolute right-1 bottom-5  justify-end">
            <button
              onClick={handleWhatsAppClick}
              className="w-8 h-8 bg-[#FFFF00] hover:bg-[#ffff0066] text-black text-center rounded-full font-medium transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center group shadow-lg"
              aria-label="Enviar mensaje"
            >
              <IoMdSend/>
            </button>
          </div>
        </div>
      )}

      {/* Botón principal de WhatsApp */}
      <button
        onClick={toggleChat}
        className='w-14 h-14 bg-[#ffff0054] rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center group'
        aria-label='Contactar por WhatsApp'
      >
        <Image
          src='/ICONOWHATSAPP.svg'
          width={35}
          height={35}
          priority={true}
          alt='WhatsApp'
        />

        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFFF00] opacity-75'></span>
      </button>
    </div>
  );
};

export default WhatsAppButton;