

const Footer = () => {
  return (
    <footer className="bg-gray-200 rounded-lg shadow  m-4 mt-12">
      <div className="w-full py-4 md:py-8 2xl:px-80 lg:px-28  md:px-20 px-6">
        <div className="md:flex md:items-center md:justify-between md:pb-12 pb-8">
          <a href="/" className="flex items-start mb-4  space-x-3 rtl:space-x-reverse">
            <img src="/logo.png" className="h-10" alt="logo" />
            <span className="self-center text-xl relative top-1 font-medium whitespace-nowrap ">DiAtom Technologies</span>
          </a>
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
