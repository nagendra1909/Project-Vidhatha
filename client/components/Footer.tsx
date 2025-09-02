import { Link } from "react-router-dom";

// Social Media Icons
const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M22 4.00002C22 4.00002 21.3 6.10002 20 7.40002C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.60002 3 5.00002C5.2 7.60002 8.6 9.10002 12 9.00002C11.1 4.80002 16 2.40002 19 5.20002C20.1 5.20002 22 4.00002 22 4.00002Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="m16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Contact Icons
const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M16.6673 8.33366C16.6673 13.3337 10.0007 18.3337 10.0007 18.3337C10.0007 18.3337 3.33398 13.3337 3.33398 8.33366C3.33398 6.56555 4.03636 4.86986 5.28661 3.61961C6.53685 2.36937 8.23254 1.66699 10.0007 1.66699C11.7688 1.66699 13.4645 2.36937 14.7147 3.61961C15.9649 4.86986 16.6673 6.56555 16.6673 8.33366Z" 
      stroke="#9CA3AF" 
      strokeWidth="1.66667" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M10 10.833C11.3807 10.833 12.5 9.71372 12.5 8.33301C12.5 6.9523 11.3807 5.83301 10 5.83301C8.61929 5.83301 7.5 6.9523 7.5 8.33301C7.5 9.71372 8.61929 10.833 10 10.833Z" 
      stroke="#9CA3AF" 
      strokeWidth="1.66667" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M18.3332 14.1004V16.6004C18.3341 16.8325 18.2866 17.0622 18.1936 17.2749C18.1006 17.4875 17.9643 17.6784 17.7933 17.8353C17.6222 17.9922 17.4203 18.1116 17.2005 18.186C16.9806 18.2603 16.7477 18.288 16.5165 18.2671C13.9522 17.9884 11.489 17.1122 9.32486 15.7087C7.31139 14.4293 5.60431 12.7222 4.32486 10.7087C2.91651 8.53474 2.04007 6.05957 1.76653 3.48374C1.7457 3.2533 1.77309 3.02104 1.84695 2.80176C1.9208 2.58248 2.03951 2.38098 2.1955 2.21009C2.3515 2.0392 2.54137 1.90266 2.75302 1.80917C2.96468 1.71569 3.19348 1.66729 3.42486 1.66707H5.92486C6.32928 1.66309 6.72136 1.80631 7.028 2.07002C7.33464 2.33373 7.53493 2.69995 7.59153 3.10041C7.69705 3.90046 7.89274 4.68601 8.17486 5.44207C8.28698 5.74034 8.31125 6.0645 8.24478 6.37614C8.17832 6.68778 8.02392 6.97383 7.79986 7.20041L6.74153 8.25874C7.92783 10.345 9.65524 12.0724 11.7415 13.2587L12.7999 12.2004C13.0264 11.9764 13.3125 11.8219 13.6241 11.7555C13.9358 11.689 14.2599 11.7133 14.5582 11.8254C15.3143 12.1075 16.0998 12.3032 16.8999 12.4087C17.3047 12.4658 17.6744 12.6697 17.9386 12.9817C18.2029 13.2936 18.3433 13.6917 18.3332 14.1004Z" 
      stroke="#9CA3AF" 
      strokeWidth="1.66667" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M16.666 3.33301H3.33268C2.41221 3.33301 1.66602 4.0792 1.66602 4.99967V14.9997C1.66602 15.9201 2.41221 16.6663 3.33268 16.6663H16.666C17.5865 16.6663 18.3327 15.9201 18.3327 14.9997V4.99967C18.3327 4.0792 17.5865 3.33301 16.666 3.33301Z" 
      stroke="#9CA3AF" 
      strokeWidth="1.66667" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M18.3327 5.83301L10.8577 10.583C10.6004 10.7442 10.3029 10.8297 9.99935 10.8297C9.69575 10.8297 9.39829 10.7442 9.14102 10.583L1.66602 5.83301" 
      stroke="#9CA3AF" 
      strokeWidth="1.66667" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/about", label: "About Us" },
    { path: "/programs", label: "Our Programs" },
    { path: "/volunteer", label: "Volunteer" },
    { path: "/donate", label: "Donate" },
    { path: "/", label: "Home" },
    { path: "/contact", label: "Contact" },
  ];

  const programLinks = [
    { path: "/programs", label: "Healthcare Services" },
    { path: "/programs", label: "Education & Skills" },
    { path: "/programs", label: "Community Support" },
    { path: "/programs", label: "Arts & Culture" },
    { path: "/programs", label: "Environmental Protection" },
    { path: "/programs", label: "Specialized Care" },
  ];

 const socialLinks = [
   {
     icon: <FacebookIcon />,
     href: "https://www.facebook.com/VidhathaSociety/",
     label: "Facebook",
   },
   {
     icon: <TwitterIcon />,
     href: "https://x.com/VidhathaSociety",
     label: "Twitter",
   },
   {
     icon: <InstagramIcon />,
     href: "https://www.instagram.com/vidhathasociety/",
     label: "Instagram",
   },
   {
     icon: <LinkedInIcon />,
     href: "https://www.linkedin.com/in/vidhatha-society-ngo-aba53732b/",
     label: "LinkedIn",
   },
   // You can add more if you have icons for these, e.g., for Blogger, Pinterest, Telegram, WhatsApp, and YouTube
   // { icon: <BloggerIcon />, href: "https://www.blogger.com/blog/posts/6756384376880786319?pli=1", label: "Blog" },
   // { icon: <PinterestIcon />, href: "https://in.pinterest.com/vidhathasociety/", label: "Pinterest" },
   // { icon: <TelegramIcon />, href: "https://t.me/vidhathasocietytelegram", label: "Telegram" },
   // { icon: <WhatsAppIcon />, href: "https://chat.whatsapp.com/J8iWUxXF8XqE9xLVh2IfRi?mode=r_t", label: "WhatsApp Community" },
   // { icon: <YouTubeIcon />, href: "YOUR_YOUTUBE_CHANNEL_URL_HERE", label: "Youtube" }, // The provided YouTube link is not a valid channel URL
 ];

  return (
    <footer className="bg-ngo-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <p className="text-ngo-gray-300 font-niramit text-base leading-relaxed">
              Transforming lives through comprehensive healthcare, education,
              and community support services since 2010.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-ngo-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-niramit text-lg font-bold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-ngo-gray-300 font-niramit text-base hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Programs */}
          <div className="space-y-6">
            <h3 className="text-white font-niramit text-lg font-bold">
              Our Programs
            </h3>
            <ul className="space-y-3">
              {programLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-ngo-gray-300 font-niramit text-base hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white font-niramit text-lg font-bold">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <LocationIcon />
                <div>
                  {/* Use an <a> tag around the address text */}
                  <a
                    href="https://www.google.com/maps/place/Vidhatha+Society/@17.3270565,78.5631468,473m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3bcba3daebe098f5:0xb614d1ae5750a117!2sVidhatha+Society!8m2!3d17.3270559!4d78.5643538!16s%2Fg%2F11lywv57dt!3m5!1s0x3bcba3daebe098f5:0xb614d1ae5750a117!8m2!3d17.3270559!4d78.5643538!16s%2Fg%2F11lywv57dt!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer" // Recommended for security when using target="_blank"
                    className="text-ngo-gray-300 font-niramit text-base" // Apply original styling to the link
                  >
                    <div className="text-ngo-gray-300 font-niramit text-base">
                      Address: 3-15-9k/401, Sahara states, Mansoorabad L B
                      Nagar
                    </div>
                    <div className="text-ngo-gray-300 font-niramit text-base">
                      Rangareddy, Telangana
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <PhoneIcon />
                <a
                  href="tel:+15551234567"
                  className="text-ngo-gray-300 font-niramit text-base hover:text-white transition-colors duration-300"
                >
                  +91 95423 66556
                </a>
              </div>

              <div className="flex items-center gap-3">
                <EmailIcon />
                <a
                  href="mailto:vidhathasociety@gmail.com"
                  className="text-ngo-gray-300 font-niramit text-base hover:text-white transition-colors duration-300"
                >
                  info@vidhatha.org
                </a>
              </div>
            </div>

            <div className="pt-2">
              <h4 className="text-white font-niramit text-base font-bold mb-2">
                Emergency Hotline
              </h4>
              <a
                href="tel:+15559114357"
                className="text-red-400 font-niramit text-lg font-bold hover:text-red-300 transition-colors duration-300"
              >
                +91 95423 66556
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ngo-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-ngo-gray-400 font-niramit text-sm text-center md:text-left">
            © {currentYear} Vidhatha Society. All rights reserved. | Tax ID:
            12-3456789
          </div>
          <div className="flex flex-wrap gap-6 justify-center md:justify-end">
            <a
              href="#"
              className="text-ngo-gray-400 font-niramit text-sm hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-ngo-gray-400 font-niramit text-sm hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-ngo-gray-400 font-niramit text-sm hover:text-white transition-colors duration-300"
            >
              Financial Transparency
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;