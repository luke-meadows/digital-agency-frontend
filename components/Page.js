export default function Page({ children }) {
  return (
    <div name="outer-page" className="">
      <div name="inner-page" className="max-w-[1600px] m-auto px-24">
        {children}
      </div>
    </div>
  );
}
