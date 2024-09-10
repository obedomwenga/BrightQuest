import { Bell, Book, Brain, Coins, Home, Medal, Palette, PenTool, Rocket, Star, Trophy, Wallet } from 'lucide-react'
import MainLayout from "@/components/@layouts/main-layout"

export default function Achievment(){
    return (
        <>
        
        <MainLayout>
            <header className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold text-purple-600">Your Achievements</h1>
                <div className="flex items-center space-x-4">
                    <Bell className="w-6 h-6 text-yellow-500" />
                    <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center">
                    <span className="text-2xl">😊</span>
                    </div>
                </div>
            </header>

                {/* Achievement Overview */}
            <div className="bg-purple-400 text-white p-6 rounded-2xl mb-8 shadow-lg">
                <h2 className="text-3xl font-bold mb-2">Great job, James!</h2>
                <p className="text-xl">You've unlocked 15 out of 30 achievements. Keep it up! 🏆</p>
                <div className="mt-4 bg-white rounded-full h-4 overflow-hidden">
                    <div className="bg-yellow-400 h-full" style={{ width: '50%' }}></div>
                </div>
                </div>

                {/* Recent Achievements */}
                <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-purple-600">Recent Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                    { title: 'Math Wizard', description: 'Completed 10 math lessons', icon: <Rocket className="w-8 h-8 text-blue-500" />, color: 'bg-blue-200' },
                    { title: 'Science Explorer', description: 'Finished 5 science experiments', icon: <Brain className="w-8 h-8 text-green-500" />, color: 'bg-green-200' },
                    { title: 'Artistic Genius', description: 'Created 3 digital artworks', icon: <Palette className="w-8 h-8 text-purple-500" />, color: 'bg-purple-200' },
                    { title: 'Coding Prodigy', description: 'Wrote first 50 lines of code', icon: <PenTool className="w-8 h-8 text-yellow-500" />, color: 'bg-yellow-200' },
                    ].map((achievement, index) => (
                    <div key={index} className={`p-6 rounded-2xl ${achievement.color} shadow-lg`}>
                        <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-xl font-semibold">{achievement.title}</h3>
                            <p className="text-gray-600">{achievement.description}</p>
                        </div>
                        {achievement.icon}
                        </div>
                        <div className="flex items-center">
                        <Medal className="w-5 h-5 text-yellow-500 fill-current mr-2" />
                        <span className="text-sm font-bold text-yellow-600">Unlocked!</span>
                        </div>
                    </div>
                    ))}
                </div>
                </section>

                {/* Achievement Categories */}
                <section>
                <h2 className="text-2xl font-semibold mb-4 text-purple-600">Achievement Categories</h2>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { name: 'Mathematics', progress: 70, icon: <Rocket className="w-8 h-8 text-blue-500" /> },
                        { name: 'Science', progress: 50, icon: <Brain className="w-8 h-8 text-green-500" /> },
                        { name: 'Art', progress: 30, icon: <Palette className="w-8 h-8 text-purple-500" /> },
                        { name: 'Coding', progress: 20, icon: <PenTool className="w-8 h-8 text-yellow-500" /> },
                    ].map((category, index) => (
                        <div key={index} className="text-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                            {category.icon}
                        </div>
                        <h3 className="font-semibold mb-1">{category.name}</h3>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${category.progress}%` }}></div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{category.progress}% Complete</p>
                        </div>
                    ))}
                    </div>
                </div>
                </section>
        </MainLayout>
        </>
    )
}