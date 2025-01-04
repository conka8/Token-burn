export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center h-[100vh] bg-gray-300">
      <div className="flex justify-center">
        <img
          src="/img/token-burn.png"
          className="lg:w-[365px] w-[287px]"
          alt="token-burn.png"
        />
      </div>
      <div className="flex lg:w-[758px] md:w-[758px] mx-auto mt-[20px] justify-between gap-2">
        <input
          type="number"
          className="w-full border focus-visible:outline-none px-3 py-2 rounded-lg text-black text-[21px]"
          placeholder="burn amount"
        />
        <button
          type="button"
          className="w-full border bg-red-500 rounded-lg text-white text-[21px] font-semibold py-4 px-6"
        >
          Burn
        </button>
      </div>
    </div>
  );
}
