import { Coins, Star } from 'lucide-react'

export default function RightAside() {
    return (
        <aside className="w-96 p-8 bg-green-200 rounded-l-3xl sticky top-0 h-screen overflow-y-auto scrollbar-hide">
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-blue-300 rounded-full flex items-center justify-center mb-4">
            <span className="text-4xl">🚀</span>
          </div>
          <h2 className="text-2xl font-semibold text-blue-600">Super Learner</h2>
          <div className="flex items-center mt-2">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <span className="text-lg ml-2">Level 5</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl mb-8 shadow-lg">
          <h3 className="font-semibold text-xl mb-4 text-purple-600">Your Token Rewards</h3>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <Coins className="w-6 h-6 text-yellow-500 mr-2" />
              <span className="text-lg font-semibold">Total Tokens:</span>
            </div>
            <span className="text-2xl font-bold text-yellow-600">250</span>
          </div>
          <div className="h-32 bg-gray-100 rounded-xl flex items-end">
            {[40, 60, 30, 80, 50, 70, 90].map((height, index) => (
              <div key={index} className="flex-1 mx-1">
                <div className={`bg-yellow-400 rounded-t-lg`} style={{ height: `${height}%` }}></div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <span className="font-semibold text-2xl text-green-500">Keep earning!</span>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="font-semibold text-xl mb-4 text-purple-600">Your Achievements</h3>
          <div className="bg-yellow-100 p-4 rounded-2xl mb-4 shadow-md">
            <div className="flex items-center">
              <Star className="w-8 h-8 text-yellow-500 fill-current mr-3" />
              <div>
                <h4 className="font-semibold">Math Wizard</h4>
                <p className="text-sm">Completed 10 math lessons</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-100 p-4 rounded-2xl mb-4 shadow-md">
            <div className="flex items-center">
              <Coins className="w-8 h-8 text-yellow-500 mr-3" />
              <div>
                <h4 className="font-semibold">Token Collector</h4>
                <p className="text-sm">Earned 100 tokens</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
}