import Image from 'next/image';
import LogoImage from '../public/logo/logo2.png';

export default function Logo() {
  return (
    <div className="header relative w-[140px] index-10">
      <Image src={LogoImage} layout="responsive" objectFit="contain" />
    </div>
  );
}
