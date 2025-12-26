function Footer() {
  return (
    <footer className="bg-white/90 backdrop-blur-md text-gray-700 font-sans mt-16 py-12 flex flex-col items-center justify-center space-y-4 text-center shadow-inner">

      <div className="space-x-2">
        <a
          href="mailto:samarali.01491625@gmail.com"
          className="hover:underline"
        >
          samarali.01491625@gmail.com
        </a>

        <span>||</span>

        <a
          href="https://github.com/samarAli-7"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>

        <span>||</span>

        <a
          href="https://www.linkedin.com/in/samar-ali-022540399"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </div>

      <div className="space-x-2">
        <a
          href="https://uasdtu.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          UAS-DTU
        </a>

        <span>||</span>

        <a
          href="https://dtu.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Delhi Technological University
        </a>
      </div>

      <div className="mt-4 text-sm">
        &copy; 2025 Samar Ali. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
