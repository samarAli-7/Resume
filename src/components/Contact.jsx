import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

/* PARALLAX CARD */
function SocialCard({ title, subtitle, link }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [6, -6]);
  const rotateY = useTransform(x, [-50, 50], [-6, 6]);

  function handleMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.height / 2);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY }}
        whileHover={{ y: -6 }}
        className="
          h-36 sm:h-44
          rounded-2xl border bg-white
          flex flex-col items-center justify-center
          shadow-sm hover:shadow-2xl
        "
      >
        <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
        <p className="text-sm sm:text-base text-gray-500 mt-1">{subtitle}</p>
      </motion.div>
    </a>
  );
}

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xojagjrz", {
        method: "POST",
        body: new FormData(e.target),
        headers: { Accept: "application/json" },
      });

      res.ok ? setStatus("success") : setStatus("error");
      e.target.reset();
    } catch {
      setStatus("error");
    }
  }

  useEffect(() => {
    if (status !== "idle") {
      const t = setTimeout(() => setStatus("idle"), 3000);
      return () => clearTimeout(t);
    }
  }, [status]);

  return (
    <>
      <section className="min-h-screen px-4 sm:px-6 pt-32 pb-24">
        {/* HEADER */}
        <div className="text-center mt-8 sm:mt-12 mb-20">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Contact Me
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto">
            Reach out via socials or drop me a message below.
          </p>
        </div>

        {/* SOCIALS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-24">
          <SocialCard
            title="GitHub"
            subtitle="Code & Projects"
            link="https://github.com/samarAli-7"
          />
          <SocialCard
            title="LinkedIn"
            subtitle="Professional Profile"
            link="https://www.linkedin.com/in/samar-ali-8a43583a0/"
          />
          <SocialCard
            title="Instagram"
            subtitle="Personal Updates"
            link="https://instagram.com/samarali_67"
          />
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              name="name"
              required
              placeholder="Your full name"
              className="
                w-full rounded-xl border px-4 py-3
                placeholder:text-gray-400
                focus:outline-none focus:ring-2 focus:ring-black
              "
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="
                w-full rounded-xl border px-4 py-3
                placeholder:text-gray-400
                focus:outline-none focus:ring-2 focus:ring-black
              "
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Tell me what you want to build, collaborate on, or ask about..."
              className="
                w-full rounded-xl border px-4 py-3
                placeholder:text-gray-400
                focus:outline-none focus:ring-2 focus:ring-black
              "
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="
              w-full bg-black text-white py-3 rounded-xl
              hover:bg-gray-800 transition
              disabled:opacity-50
            "
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

      {/* TOAST */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="
              fixed bottom-4 right-4 sm:bottom-6 sm:right-6
              z-[9999] bg-black text-white
              px-6 py-3 rounded-xl shadow-xl
            "
          >
            Message sent ✔
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
