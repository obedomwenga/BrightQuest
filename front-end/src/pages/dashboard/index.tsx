import MainLayout from '@/components/@layouts/main-layout'
import { Bell, Book, Brain, Coins, Home, Palette, PenTool, Rocket, Star, Wallet } from 'lucide-react'
import Image from 'next/image'

export default function Dashboard(){
    return(
        <MainLayout>
            <header className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-blue-600">Learn, Play, and Earn!</h1>
            <div className="flex items-center space-x-4">
                <Bell className="w-6 h-6 text-yellow-500" />
                <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center">
                <span className="text-2xl">😊</span>
                </div>
            </div>
            </header>

            {/* Welcome Banner */}
            <div className="bg-green-400 text-white p-6 rounded-2xl mb-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-2">Welcome back, James!</h2>
            <p className="text-xl">You've learned more than 70% of your goal this week. Keep it up! 🚀</p>
            <div className="mt-4 bg-white rounded-full h-4 overflow-hidden">
                <div className="bg-yellow-400 h-full" style={{ width: '70%' }}></div>
            </div>
            </div>

            {/* Web3 Wallet */}
            <div className="bg-yellow-200 p-4 rounded-2xl mb-8 shadow-lg flex items-center justify-between">
            <div className="flex items-center">
                <Wallet className="w-8 h-8 text-yellow-600 mr-3" />
                <div>
                <h2 className="text-xl font-semibold text-yellow-800">Your Learning Wallet</h2>
                <p className="text-yellow-700">Collect tokens as you learn!</p>
                </div>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow">
                <Coins className="w-6 h-6 text-yellow-500 mr-2" />
                <span className="text-2xl font-bold text-yellow-600">250</span>
            </div>
            </div>

            {/* AI-suggested content */}
            <section className="mb-8">
            <div className="flex items-center mb-4">
                <Brain className="w-8 h-8 text-purple-500 mr-2" />
                <h2 className="text-2xl font-semibold text-purple-600">AI-Suggested Lessons for You</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                { title: 'Fraction Fun', category: 'Math', icon: <Rocket className="w-8 h-8 text-blue-500" />, color: 'bg-blue-200', tokens: 20 },
                { title: 'Plant Life Cycles', category: 'Science', icon: <PenTool className="w-8 h-8 text-green-500" />, color: 'bg-green-200', tokens: 25 },
                { title: 'Digital Art Basics', category: 'Art', icon: <Palette className="w-8 h-8 text-purple-500" />, color: 'bg-purple-200', tokens: 15 },
                { title: 'Coding for Kids', category: 'Technology', icon: <Star className="w-8 h-8 text-yellow-500" />, color: 'bg-yellow-200', tokens: 30 },
                ].map((lesson, index) => (
                <div key={index} className={`p-6 rounded-2xl ${lesson.color} shadow-lg`}>
                    <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="text-lg font-medium">{lesson.category}</span>
                        <h3 className="text-xl font-semibold mt-2">{lesson.title}</h3>
                    </div>
                    {lesson.icon}
                    </div>
                    <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <Star className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div className="flex items-center bg-white px-2 py-1 rounded-full">
                        <Coins className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-bold text-yellow-600">{lesson.tokens}</span>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </section>

            {/* Learning path */}
            <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Your Learning Path</h2>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
                    <Book className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                    <div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
                </div>
                <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center">
                    <Star className="w-8 h-8 text-yellow-600" />
                </div>
                </div>
                <p className="text-center text-lg font-semibold text-blue-600">Keep going! You're 75% through your current level!</p>
            </div>
            </section>
        </MainLayout>
    )
}