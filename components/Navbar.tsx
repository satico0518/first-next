import { ActiveLink } from './ActiveLink';

const menuItems = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/pricing', text: 'Pricing' },
  { href: '/contact', text: 'Contact' },
];

export const Navbar = () =>
  <nav>
    {menuItems.map(menu => <ActiveLink key={menu.href} {...menu} />)}
  </nav>