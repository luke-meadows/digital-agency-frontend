import Logo from './Logo';
import MenuNavIcon from './MenuNavIcon';

export default function Header() {
  return (
    <div className="flex justify-between items-center py-8">
      <Logo />
      <MenuNavIcon />
    </div>
  );
}
