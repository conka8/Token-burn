export default function Home() {
  return (
    <div className="min-h-[100vh] bg-gradient-to-b from-black to-orange-900 text-white py-16 mt-[80px]">
      {/* Burn Section */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 flex items-center justify-center gap-2">
            Qubic
            <span className="text-orange-500">🔥</span>
            BURN
          </h1>
          <p className="text-gray-400 text-lg">Burn tokens to earn rewards</p>
        </div>

        {/* Burn Input Section */}
        <div className="bg-gradient-to-r from-black/40 to-orange-950/40 backdrop-blur-sm p-6 rounded-2xl mb-16">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="number"
              className="flex-1 bg-black/30 border border-orange-500/30 focus-visible:outline-none px-4 py-3 rounded-xl text-white text-xl placeholder-gray-500"
              placeholder="Enter burn amount"
            />
            <button
              type="button"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 transition-all rounded-xl text-white text-xl font-semibold py-3 px-8"
            >
              Burn Tokens
            </button>
          </div>
        </div>

        {/* Claim Section */}
        <div className="bg-gradient-to-r from-black/40 to-orange-950/40 backdrop-blur-sm p-8 rounded-2xl mb-16 text-center">
          <h2 className="text-2xl mb-4 text-gray-400">Available to Claim</h2>
          <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text mb-6">
            1,892
          </div>
          <button
            type="button"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all rounded-xl text-white text-xl font-semibold py-3 px-12"
          >
            Claim Rewards
          </button>
        </div>

        {/* Leaderboard Section */}
        <div className="bg-gradient-to-r from-black/40 to-orange-950/40 backdrop-blur-sm rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Burners</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-orange-500/20">
                  <th className="py-4 px-4 text-left text-gray-400">Rank</th>
                  <th className="py-4 px-4 text-left text-gray-400">Address</th>
                  <th className="py-4 px-4 text-right text-gray-400">
                    Amount Burned
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((_, index) => (
                  <tr
                    key={index}
                    className="border-b border-orange-500/10 hover:bg-orange-500/5 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <span
                        className={`
                        ${
                          index < 3
                            ? "bg-gradient-to-r from-orange-500 to-red-500"
                            : "bg-gray-700"
                        } 
                        rounded-lg px-3 py-1 text-sm
                      `}
                      >
                        #{index + 1}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="md:block hidden text-gray-300">
                        0x0e39F81349AF07E23ceAA3e9b913058ea8D58c35
                      </div>
                      <div className="md:hidden block text-gray-300">
                        0x0e39...8c35
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right font-mono text-orange-400">
                      9,832
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
