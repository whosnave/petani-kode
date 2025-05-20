import Logo from "../Assets/logo.svg";
import FacebookIcon from "../Assets/facebook.svg";
import TwitterIcon from "../Assets/twitter.svg";
import TelegramIcon from "../Assets/telegram.svg";
import InstagramIcon from "../Assets/instagram.svg";
import YouTubeIcon from "../Assets/youtube.svg";

function Footer() {
  return (
    <footer className="bg-[#1D2633] text-white px-6 md:px-24 pt-16 pb-10 text-sm">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        <div className="md:w-[25%]">
          <img src={Logo} alt="Petani Kode" className="h-25 mb-4" />
          <p className="text-gray-300 leading-relaxed">
            Tempat belajar budidaya kode (coding) <br />
            dengan tutorial yang gampang dipahami.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full">
          <div>
            <h3 className="font-bold text-white mb-3">Belajar</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#">Artikel</a></li>
              <li><a href="#">Tutorial</a></li>
              <li><a href="#">Buku</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-3">Popular Tutorial</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#">Tutorial Bahasa C</a></li>
              <li><a href="#">Tutorial Javascript</a></li>
              <li><a href="#">Tutorial Java</a></li>
              <li><a href="#">Tutorial PHP</a></li>
              <li><a href="#">Tutorial Python</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-3">Social Media</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#">Facebook Page</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Youtube Channel</a></li>
              <li><a href="#">Telegram Channel</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-3">Petani Kode</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#">About</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-gray-600 mt-12 mb-6" />

      <div className="text-center">
        <p className="text-gray-400 mb-4">Ikuti Kami di</p>
        <div className="flex justify-center space-x-4 mb-6">
          <img src={FacebookIcon} alt="Facebook" className="h-8 bg-[#2C3A4B] p-1.5 rounded-full hover:opacity-80" />
          <img src={TwitterIcon} alt="Twitter" className="h-8 bg-[#2C3A4B] p-1.5 rounded-full hover:opacity-80" />
          <img src={TelegramIcon} alt="Telegram" className="h-8 bg-[#2C3A4B] p-1.5 rounded-full hover:opacity-80" />
          <img src={InstagramIcon} alt="Instagram" className="h-8 bg-[#2C3A4B] p-1.5 rounded-full hover:opacity-80" />
          <img src={YouTubeIcon} alt="YouTube" className="h-8 bg-[#2C3A4B] p-1.5 rounded-full hover:opacity-80" />
        </div>

        <p className="text-gray-500 text-xs">
          © 2025 <span className="font-semibold text-white">Petani Kode</span> · Made with <span className="text-red-400">❤️</span> using Hugo 0.134.0
        </p>
      </div>
    </footer>
  );
}

export default Footer;
