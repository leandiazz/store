import CHECKOUT from "../components/CHECKOUT";
import CHECKOUTFORM from "../components/CHECKOUTFORM";

export default function page() {
  return (
    <div className="mx-[5%] mt-10 flex h-full w-[90%] flex-col">
      <h1 className="w-full text-center text-3xl lg:mb-7">CHECKOUT</h1>
      <div className="flex h-full w-full flex-col items-center lg:flex-row">
        <div className="w-full min-w-fit lg:w-[50%]">
          <CHECKOUTFORM />
        </div>
        <div className="mt-5 h-full w-full min-w-fit bg-green-200 lg:m-0 lg:w-[50%]">
          <CHECKOUT />
        </div>
      </div>
    </div>
  );
}
