export default function PriceCard({ title, price, mostPopular = false }) {
  return (
    <div
      className={`large-box border-4 rounded-md p-12 flex-1 bg-grey relative ${
        mostPopular ? 'border-blue' : 'border-slate-500'
      }`}
    >
      <h3 className="poppins text-4xl text-center mb-3 text-bg">{title}</h3>
      <p className="text-3xl text-center text-bg">
        £{price} <span className="bg text-xl text-slate-400">/month</span>{' '}
      </p>
      {mostPopular && (
        <p className="text-sm absolute top-0 left-[50%] translate-x-[-50%] bg-blue py-1 px-4 rounded-bl-md rounded-br-md">
          Most Popular
        </p>
      )}
    </div>
  );
}
