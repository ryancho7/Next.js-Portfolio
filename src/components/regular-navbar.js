import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="p-4 flex flex-row justify-between pl-28 pr-24 pt-8">
      <div>
        <Link 
          href="#home" 
          className="text-black font-light text-lg px-4 py-2 rounded-full hover:border-0.5 hover:border-black transition duration-300"
        >
          Ryan Cho
        </Link>
      </div>
      <div>
        <ul className="flex space-x-10">
          <li>
            <Link 
              href="#about" 
              className="text-black font-light text-lg px-4 py-2 rounded-full hover:border-0.5 hover:border-black transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="#timeline" 
              className="text-black font-light text-lg px-4 py-2 rounded-full hover:border-0.5 hover:border-black transition duration-300"
            >
              Timeline
            </Link>
          </li>
          <li>
            <Link 
              href="#projects" 
              className="text-black font-light text-lg px-4 py-2 rounded-full hover:border-0.5 hover:border-black transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              href="#contact" 
              className="text-black font-light text-lg px-4 py-2 rounded-full hover:border-0.5 hover:border-black transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
