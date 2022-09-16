import Image from 'next/image';
import Header from '../components/Header';
import IphoneHoldingImage from '../public/assets/phone-holding-blur-image.png';

export default function HomeHero() {
  return (
    <div className="h-[100vh]">
      <Header />
      <div className=" w-fit mt-32 2xl:mt-40">
        <h1 className="text-5xl text-bold mb-6">
          Digital solutions for <br />
          <span className="text-blue">your online business</span>
        </h1>
        <p className="max-w-[70ch]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          blanditiis libero, minus ducimus qui animi odit velit, temporibus,
          omnis deleniti nemo autem? Asperiores quas commodi error quis corrupti
          nulla adipisci maxime earum ab aut placeat doloremque minima
          perferendis non enim, et sint aspernatur molestias nisi? Est adipisci
          aspernatur quod eos?
        </p>
        <button className="mt-6 mr-3 bg-blue text-white px-8 py-3 rounded-md text-sm focus:outline-white">
          Get started
        </button>
        <button className="mt-6 border bg-grey border-grey text-blue px-8 py-3 rounded-md text-sm  focus:outline-blue">
          Pricing
        </button>
      </div>

      <>
        <div className="absolute right-[0] bottom-0">
          <div className="relative w-[700px]">
            <Image
              src={IphoneHoldingImage}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </>
    </div>
  );
}
