import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-gray-200 rounded-lg shadow  m-4 mt-12">
      <div className="w-full py-4 padding-x">
        <div className="md:flex md:items-center md:justify-between md:pb-12 pb-8">
          <Link href="/" className="flex items-center mb-4  space-x-3 rtl:space-x-reverse ">
            <img src="/logo.png" className="h-8" alt="logo" />
            <span className="self-center text-lg text-gray-800 font-medium whitespace-nowrap ">DiAtom Technologies</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
            <li>
              <a href="/about" className="hover:underline me-4 md:me-6">About Us</a>
            </li>
            <li>
              <a href="/products" className="hover:underline me-4 md:me-6">Products</a>
            </li>
            <li>
              <a href="/careers" className="hover:underline me-4 md:me-6">Careers</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <span className="block text-sm text-gray-500 md:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">DiAtom Technologies ™</a>. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer;
