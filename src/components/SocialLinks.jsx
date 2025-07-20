import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const whatsappIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M20.52 3.48A11.89 11.89 0 0012 0C5.37 0 0 5.37 0 12a11.92 11.92 0 001.65 6.13L0 24l5.97-1.56a11.92 11.92 0 006.07 1.59c6.63 0 12-5.37 12-12a11.9 11.9 0 00-3.52-8.55zM12 21.5a9.49 9.49 0 01-4.83-1.42l-.35-.22-3.55.93.94-3.47-.23-.36A9.54 9.54 0 012.5 12c0-5.25 4.25-9.5 9.5-9.5s9.5 4.25 9.5 9.5-4.25 9.5-9.5 9.5zm5.17-6.42c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15s-.78.98-.96 1.18-.35.22-.65.07a8.29 8.29 0 01-2.43-1.5 9.18 9.18 0 01-1.7-2.1c-.18-.3 0-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2 0-.38-.01-.53-.02-.15-.68-1.64-.93-2.25-.25-.6-.5-.52-.68-.53l-.58-.01a1.1 1.1 0 00-.81.38c-.28.3-1.08 1.05-1.08 2.56s1.11 2.97 1.27 3.18c.15.22 2.19 3.33 5.3 4.67a17.4 17.4 0 002.1.87c.88.37 1.68.32 2.31.19.7-.15 2.17-.88 2.48-1.72.3-.84.3-1.56.21-1.72-.1-.16-.27-.25-.58-.4z" />
  </svg>
);

const facebookIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M22.675 0h-21.35C.596 0 0 .593 0 1.326v21.348C0 23.405.596 24 1.326 24H12.82v-9.294H9.692V11.08h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.797.143v3.24h-1.92c-1.506 0-1.797.716-1.797 1.765v2.316h3.59l-.467 3.625h-3.123V24h6.116C23.404 24 24 23.405 24 22.674V1.326C24 .593 23.404 0 22.675 0z" />
  </svg>
);

const tiktokIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M12.805 0h3.43c.11 1.48.7 2.81 1.71 3.87A6.6 6.6 0 0022 5.79v3.4a9.99 9.99 0 01-4.775-1.17v6.83a7.86 7.86 0 01-1.15 4.37A7.67 7.67 0 018.07 24 7.65 7.65 0 015.25 9.27a7.6 7.6 0 017.555-2.45v3.53a3.88 3.88 0 00-4.46 4.54 3.89 3.89 0 003.96 3.15 3.84 3.84 0 003.73-3.91V0z" />
  </svg>
);

const SocialLinks = () => {
  const links = [
    {
      icon: <Github />,
      href: "https://github.com/Aqueel-i",
      label: "GitHub",
    },
    {
      icon: <Linkedin />,
      href: "https://www.linkedin.com/in/aqueel-ishak-7094441bb",
      label: "LinkedIn",
    },
    {
      icon: <Mail />,
      href: "mailto:aqueel.ik@gmail.com",
      label: "Email",
    },
    {
      icon: whatsappIcon,
      href: "https://wa.me/+94764872445",
      label: "WhatsApp",
    },
    {
      icon: facebookIcon,
      href: "https://www.facebook.com/share/1B6mVfKtLd/",
      label: "Facebook",
    },
    {
      icon: tiktokIcon,
      href: "https://www.tiktok.com/@aq_shark",
      label: "TikTok",
    },
  ];

  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 z-50 hidden sm:flex flex-col space-y-4 ml-2">
      {links.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-white shadow p-2 rounded-full hover:bg-blue-100 transition"
          title={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
