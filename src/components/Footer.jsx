import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const [contact] = useState([
    { icon: 'icon-phone.svg', text: '+20121212121' },
    { icon: 'icon-email.svg', text: 'example@fylo.com' },
  ]);

  const [links] = useState([
    'About Us',
    'Contact Us',
    'Jobs',
    'Terms',
    'Press',
    'Privacy',
    'Blog',
  ]);

  const [socialIcons] = useState(['facebook', 'twitter', 'instagram']);

  return (
    <section className="bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px] text-white ">
      <div className="container">
        <a href="/">
          <img
            src="/images/logo.svg"
            alt="logo-img"
            className="w-[175px] h-[66px] object-contain"
          />
        </a>
        <div className="flex justify-between flex-wrap flex-col md:flex-row gap-[30px] mt-[30px]">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full">
            <img
              src=" /images/icon-location.svg"
              alt="location-img"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className=" font-normal text-sm tracking-[0.8px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ratione soluta culpa tenetur doloremque officia nam
              commodi veritatis, necessitatibus, illum impedit rem consequuntur
              reprehenderit doloribus incidunt delectus. Tempora, ut ex?
            </p>
          </div>
          <div>
            {contact.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"
              >
                <img
                  src={` /images/${item.icon}`}
                  alt="icon"
                  className="w-[18px] h-[18px] object-contain"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {links.map((item) => (
              <li key={item}>
                <a
                  href={item.toLowerCase()}
                  className=" hover:text-primary transition-all duration-200 text-base"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-[15px] w-full justify-center md:w-auto">
            {socialIcons.map((item) => (
              <li key={item}>
                <a href={item} className="group">
                  <div className="w-[40px] h-[40px] element-center border border-white rounded-[50%]">
                    {item === 'facebook' ? (
                      <FaFacebookF className="  group-hover:text-primary transition-all duration-200" />
                    ) : item === 'twitter' ? (
                      <FaTwitter className="  group-hover:text-primary transition-all duration-200" />
                    ) : (
                      <FaInstagram className="  group-hover:text-primary transition-all duration-200" />
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
