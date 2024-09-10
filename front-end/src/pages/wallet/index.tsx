import MainLayout from "@/components/@layouts/main-layout";
import { Bell, Book, Brain, Coins, CreditCard, DollarSign, Home, Medal, Palette, PenTool, Rocket, Star, Trophy, Wallet } from 'lucide-react'

export default function wallet(){
    return (
        <MainLayout>
            <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-600">Your Wallet</h1>
          <div className="flex items-center space-x-4">
            <Bell className="w-6 h-6 text-yellow-500" />
            <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center">
              <span className="text-2xl">😊</span>
            </div>
          </div>
        </header>

        {/* Wallet Overview */}
        <div className="bg-yellow-400 text-white p-6 rounded-2xl mb-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-2">Hello, James!</h2>
          <p className="text-xl">Your current balance is:</p>
          <div className="flex items-center mt-4">
            <Coins className="w-10 h-10 mr-2" />
            <span className="text-4xl font-bold">1,250</span>
            <span className="text-2xl ml-2">Learning Tokens</span>
          </div>
        </div>

        {/* Recent Transactions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-600">Recent Transactions</h2>
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: 'Math Quiz Reward', amount: 50, icon: <Rocket className="w-8 h-8 text-blue-500" />, color: 'bg-blue-200' },
              { title: 'Science Experiment Completion', amount: 75, icon: <Brain className="w-8 h-8 text-green-500" />, color: 'bg-green-200' },
              { title: 'Art Contest Participation', amount: 100, icon: <Palette className="w-8 h-8 text-purple-500" />, color: 'bg-purple-200' },
              { title: 'Coding Challenge Winner', amount: 150, icon: <PenTool className="w-8 h-8 text-yellow-500" />, color: 'bg-yellow-200' },
            ].map((transaction, index) => (
              <div key={index} className={`p-4 rounded-xl ${transaction.color} shadow-md flex justify-between items-center`}>
                <div className="flex items-center">
                  <div className="mr-4">{transaction.icon}</div>
                  <div>
                    <h3 className="font-semibold">{transaction.title}</h3>
                    <p className="text-sm text-gray-600">Earned on {new Date().toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Coins className="w-5 h-5 text-yellow-500 mr-1" />
                  <span className="font-bold text-yellow-600">+{transaction.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Token Usage */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-yellow-600">Token Usage</h2>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Learning Materials', usage: 40, icon: <Book className="w-8 h-8 text-blue-500" /> },
                { name: 'Virtual Tutoring', usage: 30, icon: <Brain className="w-8 h-8 text-green-500" /> },
                { name: 'Creative Tools', usage: 20, icon: <Palette className="w-8 h-8 text-purple-500" /> },
                { name: 'Skill Workshops', usage: 10, icon: <PenTool className="w-8 h-8 text-yellow-500" /> },
              ].map((category, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: `${category.usage}%` }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{category.usage}% of total usage</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        </MainLayout>
    )
}