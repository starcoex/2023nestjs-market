import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-400 py-20 px-10 max-w-md flex flex-col space-y-8 shadow-xl m-auto">
      <div className="bg-white p-10 rounded-xl">
        <div className="font-medium text-xl">Select Item</div>
        <div className="flex flex-row justify-between my-2">
          <span className="text-gray-400 text-sm">Crey Chair</span>
          <span className="font-semibold">$180</span>
        </div>
        <div className="flex flex-row justify-between ">
          <span className="text-gray-400 text-sm">Tooly table</span>
          <span className="font-semibold">$800</span>
        </div>
        <div className="pt-2 border-t-2 border-dashed"></div>
        <div className="flex justify-between">
          <h1>Total</h1>
          <span className="font-semibold">$970</span>
        </div>
        <button
          type="button"
          className="mt-5 bg-blue-500 py-2 px-8 rounded-2xl  text-white  block w-full text-center"
        >
          Checkout
        </button>
      </div>

      <div className="bg-white rounded-xl overflow-hidden">
        <div className="flex justify-between items-center  bg-blue-500 p-8">
          <div className="font-medium text-white text-2xl">Profile</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="file: mt-4 h-6 w-6 relative -top-2  text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
        <div className="rounded-xl relative -top-4 bg-white p-6">
          <div className="flex justify-between items-end relative -top-14">
            <div className="flex flex-col">
              <span className="text-slate-400 ">orders</span>
              <span className="text-center">340</span>
            </div>
            <img src="" alt="" className="w-24 h-24 bg-blue-400 rounded-full" />
            <div className="flex flex-col">
              <span className="text-gray-400 ">Spent</span>
              <span className="font-medium text-center">$2,310</span>
            </div>
          </div>
          <div className="flex flex-col items-center -mt-12">
            <span className="pt-2">Tony Molloy</span>
            <span className="text-gray-500 text-sm pt-1">New York, USA</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 rounded-xl">
        <div>
          <h1>Categories</h1>
          <img src="" alt="" />
        </div>
        <div>
          <div>
            <img src="" alt="" />
            <h2> Chair</h2>
          </div>
          <div>
            <img src="" alt="" />
            <h2> Table</h2>
          </div>
          <div>
            <img src="" alt="" />
            <h2> Cupboard</h2>
          </div>
          <div>
            <img src="" alt="" />
            <h2> Sofa</h2>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 rounded-xl">
        <div>
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </div>
        <button>Add to cart</button>
      </div>
    </main>
  );
}
