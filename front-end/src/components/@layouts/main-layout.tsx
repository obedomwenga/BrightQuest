import { Bell, Book, Brain, Coins, Home, Palette, PenTool, Rocket, Star, Wallet } from 'lucide-react'
import Image from 'next/image'

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen bg-blue-100 text-gray-900 font-sans">
        <aside className="w-20 flex flex-col items-center py-8 bg-yellow-300 sticky top-0 h-screen">
            <div className="mb-8">
            <Image src="/placeholder.svg?height=48&width=48" width={48} height={48} alt="Logo" className="rounded-full" />
            </div>
            <nav className="flex flex-col items-center space-y-6 flex-grow justify-center">
            <button className="p-3 bg-white rounded-full shadow-lg hover:bg-blue-500 transition-colors group">
                <Home className="w-6 h-6 text-blue-500 group-hover:text-white" />
            </button>
            <button className="p-3 bg-white rounded-full shadow-lg hover:bg-green-500 transition-colors group">
                <Book className="w-6 h-6 text-green-500 group-hover:text-white" />
            </button>
            <button className="p-3 bg-white rounded-full shadow-lg hover:bg-purple-500 transition-colors group">
                <Star className="w-6 h-6 text-purple-500 group-hover:text-white" />
            </button>
            <button className="p-3 bg-white rounded-full shadow-lg hover:bg-yellow-500 transition-colors group">
                <Wallet className="w-6 h-6 text-yellow-500 group-hover:text-white" />
            </button>
            </nav>
        </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto"> { children } </main>
    
    </div>
  )
}