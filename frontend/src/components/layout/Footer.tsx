import { profile } from '../../data/profile';
import instagramIcon from '../../assets/icons/instagram.svg';
import youtubeIcon from '../../assets/icons/youtube.svg';
import telegramIcon from '../../assets/icons/telegram.svg';
import tiktokIcon from '../../assets/icons/tiktok.svg';

const socials = [
  { href: profile.socials.youtube, label: 'YouTube', icon: youtubeIcon },
  { href: profile.socials.telegram, label: 'Telegram', icon: telegramIcon },
  { href: profile.socials.tiktok, label: 'TikTok', icon: tiktokIcon },
  { href: profile.socials.instagram, label: 'Instagram', icon: instagramIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container-content py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted">
          Демо-версия сайта. Не является официальным ресурсом.
        </p>

        <ul className="flex items-center gap-4">
          {socials.map(({ href, label, icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="block opacity-70 hover:opacity-100 transition-opacity"
              >
                <img src={icon} alt={label} width={20} height={20} className="w-5 h-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}









// import { profile } from '../../data/profile';
// import instagramIcon from '../../assets/icons/instagram.svg';
// import youtubeIcon from '../../assets/icons/youtube.svg';
// import telegramIcon from '../../assets/icons/telegram.svg';
// import tiktokIcon from '../../assets/icons/tiktok.svg';

// const socials = [
//   { href: profile.socials.youtube, label: 'YouTube', icon: youtubeIcon },
//   { href: profile.socials.telegram, label: 'Telegram', icon: telegramIcon },
//   { href: profile.socials.tiktok, label: 'TikTok', icon: tiktokIcon },
//   { href: profile.socials.instagram, label: 'Instagram', icon: instagramIcon },
// ];

// export function Footer() {
//   return (
//     <footer className="border-t border-border mt-20">
//       <div className="container-content py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
//         <p className="text-sm text-muted">
//           © {new Date().getFullYear()} {profile.name}
//         </p>

//         <ul className="flex items-center gap-4">
//           {socials.map(({ href, label, icon }) => (
//             <li key={label}>
//               <a
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={label}
//                 className="block opacity-70 hover:opacity-100 transition-opacity"
//               >
//                 <img src={icon} alt={label} width={20} height={20} className="w-5 h-5" />
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </footer>
//   );
// }