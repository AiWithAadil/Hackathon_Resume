const Contact = () => (
    <div className="box-glow p-6 md:p-8 bg-gradient-to-r from-black to-gray-900 rounded-xl shadow-lg w-11/12 md:w-3/4 mx-auto mt-6">
      <h3 className="text-4xl font-extrabold mb-8 text-teal-50 text-center underline decoration-wavy glow">
        Contact Information
      </h3>
      <div className="space-y-8 text-center">
        <div className="border-b pb-6 transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out">
          <p className="text-2xl font-semibold text-teal-50 mb-2 tracking-wide">
            📧 Email
          </p>
          <p className="text-lg text-gray-400 mb-3 italic">
            <a href="mailto:smaadil688@gmail.com" className="hover:underline text-teal-400 glow">
              smaadil688@gmail.com
            </a>
          </p>
        </div>
        <div className="border-b pb-6 transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out">
          <p className="text-2xl font-semibold text-teal-50 mb-2 tracking-wide">
            📞 Phone
          </p>
          <p className="text-lg text-gray-400 mb-3 italic">
            <span className="text-teal-400 glow">+92 300 1234567</span>
          </p>
        </div>
        <div className="border-b pb-6 transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out">
          <p className="text-2xl font-semibold text-teal-50 mb-2 tracking-wide">
            🌐 LinkedIn
          </p>
          <p className="text-lg text-gray-400 mb-3 italic">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:underline text-teal-400 glow">
              linkedin.com/in/your-profile
            </a>
          </p>
        </div>
        <div className="pb-6 transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out">
          <p className="text-2xl font-semibold text-teal-50 mb-2 tracking-wide">
            🐙 GitHub
          </p>
          <p className="text-lg text-gray-400 mb-3 italic">
            <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="hover:underline text-teal-400 glow">
              github.com/your-github-profile
            </a>
          </p>
        </div>
      </div>
    </div>
  );
  
  export default Contact;
  