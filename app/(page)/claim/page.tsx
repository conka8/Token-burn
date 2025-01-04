const Claim = () => {
  return (
    <div className="flex justify-center h-[100vh] bg-gray-300 pt-[150px]">
      <div className="w-[758px] px-2">
        <input
          type="text"
          className="bg-transparent md:text-[234px] text-[121px] w-full text-center"
          value={1892}
        />
        <button
          type="button"
          className="border w-full bg-blue-500 text-white md:text-[21px] text-[18px] rounded-lg md:px-5 md:py-3 py-2 px-3"
        >
          Claim
        </button>
      </div>
    </div>
  );
};

export default Claim;
