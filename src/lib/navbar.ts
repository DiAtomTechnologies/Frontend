interface AboutDataType {
  heading: string;
  links: {
    name: string;
    href: string;
  }[]
}

interface Link {
  name: string,
  href: string,
}

export const AboutData: AboutDataType[] = [
  {
    heading: "Who are we",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Leadership", href: '/about/leadership' },
      { name: "Our Business", href: '/about/business' },
    ],
  },
  {
    heading: "What we stand for",
    links: [
      { name: "Sustainability", href: "/about/sustainability" }
    ]
  },
  {
    heading: "Know more about us",
    links :[
      {name : "Blog" , href : "/blog"}
    ]
  }
]

export const navLinks = [
  { name: 'About DiAtom', href: '/about' },
  { name: 'Products', href: '/#products' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
]


export const mobileNavLinks: Link[] = [
  { name: 'Products', href: '/products' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
]

