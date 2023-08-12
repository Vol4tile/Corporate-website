import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return (
    <header className="bg-white-500 p-4 font-secondFont">
      <div className="container mx-auto flex items-center justify-between  w-[1200px]">

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
          <ul className="flex space-x-4">
            <li>
              <Link className="text-sky-500 hover:text-sky-400" href="/">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link href="/hizmetler " className="text-sky-500 hover:text-sky-400">
                Hizmetler
              </Link>
            </li>
            <li>
              <Link href="/iletisim" className="text-sky-500 hover:text-sky-400">
                İletişim
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;