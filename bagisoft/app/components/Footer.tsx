import Link from 'next/link'

import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-4">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div> <Link
            href={"/"}
            className="    cursor-pointer duration-300 flex  text-xl "
          >
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Image className="w-8 h-8 object-cover mt-1" src="/bagisoftnobacklogo.png" width={100} height={100} alt="logoImg" />

              <span className="text-indigo-500">Bagi</span><span className="text-sky-500">soft</span>
            </h2></Link>

            <p className="text-sm mb-2">İstanbul, Türkiye</p>
            <p className="text-sm mb-2">Email: mail@mail.com</p>
            <p className="text-sm mb-2">Phone: +0 (000) 000-0000</p>

          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Bağlantılar</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-indigo-500 transition duration-300">
                  Anasayfa
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-indigo-500 transition duration-300">
                  Servisler
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-indigo-500 transition duration-300">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-indigo-500 transition duration-300">
                  İletişim
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Haberler</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-indigo-500 transition duration-300">
                  Özellik Güncellemesi
                </a>
                <p className="text-xs text-gray-400">Ağustos 2023</p>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-indigo-500 transition duration-300">
                  Paket güncellemesi
                </a>
                <p className="text-xs text-gray-400">Eylül 2023</p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Bizi takip et</h2>
            <p className="text-sm mb-4">Yeni özellikler ve güncellemelerden haberdar ol.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email adresini gir."
                className="rounded-l-lg px-4 py-2 w-full bg-gray-800 text-white outline-none"
              />
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-r-lg  hover:bg-indigo-600 transition duration-300 whitespace-nowrap " >
                Takip et
              </button>
            </div>
            <div className="flex justify-center items-center mt-4 space-x-2">
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-700 my-6" />
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()}  <span className="text-indigo-500">Bagi</span><span className="text-sky-500">soft</span>. Tüm Hakları saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;