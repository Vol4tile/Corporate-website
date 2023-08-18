import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillHome, AiFillPhone, AiFillSignal } from 'react-icons/ai'

const Header = () => {
  return (
    <header className="bg-white-500 py-4 font-secondFont flex justify-center">
      <div className="  flex items-center justify-between max-w-full  w-[1200px] md:text-sm text-lg">
        <div className="flex items-center">
          <Link
            href={"/"}
            className="px-2  scale-90 hover:scale-100  cursor-pointer duration-300 flex items-center text-xl justify-center h-[70%]"
          >
            <Image className="w-10 object-cover mt-1" src="/bagisoftnobacklogo.png" alt="logo" height={100} width={100} />

            <span className="text-indigo-500">Bagi</span><span className="text-sky-500">soft</span>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4 ">
            <li>
              <Link className="text-sky-500 hover:text-sky-400 flex justify-between items-center p-1  gap-1" href="/">
                <AiFillHome />
                <span className='hidden md:block'> Ana Sayfa</span>
              </Link>
            </li>
            <li>
              <Link className="text-sky-500 hover:text-sky-400 flex justify-between items-center  p-1 gap-1" href="/">
                <AiFillSignal />
                <span className='hidden md:block'> Hizmetler</span>
              </Link>
            </li>
            <li>
              <Link className="text-sky-500 hover:text-sky-400 flex justify-between items-center  p-1  gap-1" href="/">
                <AiFillPhone />
                <span className='hidden md:block '> İletişim</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;