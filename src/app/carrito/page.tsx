import CHECKOUTFORM from "./CHECKOUTFORM";
import CHECKOUT from "./CHECKOUT";

export default function page() {
  return (
    <div className="mx-[5%] mt-10 flex h-full w-[90%] flex-col ">
      <h1 className="w-full text-center text-2xl lg:mb-5 lg:text-3xl">CHECKOUT</h1>
      <div className="flex h-full w-full flex-col items-start lg:flex-row">
        <div className="h-full w-full min-w-fit lg:w-[50%]">
          <CHECKOUT />
        </div>
        <div className="h-full w-full min-w-fit lg:ml-5 lg:w-[50%]">
          <CHECKOUTFORM />
        </div>
      </div>
    </div>
  );
}
