import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, ShieldCheck, Terminal } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("IDLE");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("TRANSMITTING");

    // These IDs are mapped to your psh23g@gmail.com service
    emailjs.sendForm(
      'service_p7zgcac', 
      'template_nhny6wg', 
      formRef.current,
      'aLoyIe0Tau9tUSbyh' 
    )
    .then((result) => {
        console.log("TRANSMISSION_SUCCESS:", result.text);
        setStatus("SUCCESS");
    }, (error) => {
        console.log("TRANSMISSION_ERROR:", error.text);
        setStatus("ERROR");
    });
  };

  return (
    <section id="contact" className="py-24 px-10 relative">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 text-accent font-mono text-[10px] tracking-[0.4em] uppercase mb-4">
            <ShieldCheck size={14} />
            Secure_Transmission_Protocol_v3.0
          </div>
          <h2 className="text-white font-bold text-4xl md:text-6xl tracking-tighter uppercase">
            Start_<span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Inquiry</span>
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-secondary/30 border border-white/5 p-8 rounded-sm backdrop-blur-sm relative overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-8 opacity-40">
            <Terminal size={12} className="text-accent" />
            <span className="font-mono text-[10px] uppercase">Target_Gateway: psh23g@gmail.com</span>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-accent uppercase tracking-widest">Sender_Name</label>
                <input 
                  type="text" 
                  name="from_name" // Map to {{from_name}} in EmailJS
                  className="w-full bg-black/40 border border-white/10 p-3 font-mono text-sm text-white focus:border-accent outline-none transition-all"
                  placeholder="IDENTIFY_SENDER"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-accent uppercase tracking-widest">Return_Address</label>
                <input 
                  type="email" 
                  name="reply_to" // Map to {{reply_to}} in EmailJS for direct replies
                  className="w-full bg-black/40 border border-white/10 p-3 font-mono text-sm text-white focus:border-accent outline-none transition-all"
                  placeholder="EMAIL_STAMP"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-[10px] text-accent uppercase tracking-widest">Transmission_Subject</label>
              <input 
                type="text" 
                name="subject" // Map to {{subject}} in EmailJS
                className="w-full bg-black/40 border border-white/10 p-3 font-mono text-sm text-white focus:border-accent outline-none transition-all"
                placeholder="HEADER_INFO"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-[10px] text-accent uppercase tracking-widest">Payload_Message</label>
              <textarea 
                name="message" // Map to {{message}} in EmailJS
                rows="5"
                className="w-full bg-black/40 border border-white/10 p-3 font-mono text-sm text-white focus:border-accent outline-none transition-all"
                placeholder="ENTER_DATA_PACKETS..."
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={status === "TRANSMITTING"}
              className="w-full bg-accent text-black font-bold font-mono text-xs py-4 uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-white transition-all disabled:opacity-50"
            >
              {status === "TRANSMITTING" ? "SENDING_PACKETS..." : "Execute_Transmission"} <Send size={14} />
            </button>
          </form>

          {/* Terminal Success Overlay */}
          {status === "SUCCESS" && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-primary/95 flex flex-col items-center justify-center text-center z-20"
            >
              <p className="text-accent font-mono text-xl mb-2 tracking-tighter uppercase">Data_Transmitted_Successfully</p>
              <p className="text-gray-500 font-mono text-[10px]">Transmission Log: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
              <button 
                onClick={() => setStatus("IDLE")}
                className="mt-8 text-white border-b border-accent font-mono text-[10px] uppercase"
              >
                Reset_Terminal
              </button>
            </motion.div>
          )}

          {/* Terminal Error Overlay */}
          {status === "ERROR" && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-red-900/90 flex flex-col items-center justify-center text-center z-20 px-6"
            >
              <p className="text-white font-mono text-xl mb-2 tracking-tighter uppercase">System_Failure: Transmission_Aborted</p>
              <p className="text-white/70 font-mono text-[10px]">Check console logs or Gmail API permissions.</p>
              <button 
                onClick={() => setStatus("IDLE")}
                className="mt-8 text-white border-b border-white font-mono text-[10px] uppercase"
              >
                Retry_Connection
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;