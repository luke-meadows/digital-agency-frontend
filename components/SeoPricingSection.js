import PriceCard from './PriceCard';

export default function SeoPricingSection() {
  return (
    <div className="my-32">
      <p className="text-center">SEO Pricing</p>
      <h2 className="text-5xl text-center mt-4 mb-8">
        The right SEO price for what you need
      </h2>
      <p className="text-center mx-auto max-w-[90ch] text-xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
        excepturi facere eum, alias aspernatur ea hic officia reiciendis ad
        accusantium blanditiis porro ipsam distinctio nam similique quibusdam
        fugit sint eveniet?
      </p>
      <div className="mt-12 flex h-[500px] gap-6">
        <PriceCard title="Hobby" price="100" />
        <PriceCard title="Growth" price="200" mostPopular={true} />
        <PriceCard title="Scale" price="350" />
      </div>
    </div>
  );
}
