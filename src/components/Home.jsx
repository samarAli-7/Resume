import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const statsRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: statsRef,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, -200]);
  const rightX = useTransform(scrollYProgress, [0, 0.5, 1], [200, 0, 200]);
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8], [0, 1, 1]);

  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6">
            Hi, I’m Samar Ali
          </h1>

          <p className="text-lg sm:text-xl md:text-3xl text-gray-600 mb-10">
            Engineering student | Web Developer | ML & DL Enthusiast
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              to="/about"
              className="px-8 py-4 text-base sm:text-lg font-semibold
                         bg-black text-white rounded-xl"
            >
              About Me
            </Link>

            <a
              href="https://github.com/samarAli-7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-base sm:text-lg font-semibold
                         border-2 rounded-xl"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section ref={statsRef} className="py-24 sm:py-36">
        <div className="max-w-5xl mx-auto flex flex-col gap-20 items-center px-4">

          {[["5+", "Projects Built"], ["2+", "Domains Explored"], ["1st Year", "Engineering Student"]]
            .map(([title, desc], i) => (
              <motion.div
                key={title}
                style={{
                  x: i % 2 === 0 ? leftX : rightX,
                  y,
                  opacity,
                }}
                className="w-full max-w-xl bg-white border rounded-3xl
                           p-8 sm:p-12 md:p-16 text-center shadow-lg"
              >
                <h2 className="text-4xl sm:text-6xl font-bold mb-4">{title}</h2>
                <p className="text-base sm:text-xl text-gray-600">{desc}</p>
              </motion.div>
            ))}
        </div>
      </section>
    </>
  );
}
