'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Book, Rocket, Video, Star, Gift } from 'lucide-react'

export default function LandingPage() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.querySelector('.hero-section')?.clientHeight
      if (bannerHeight) {
        setIsSticky(window.scrollY > bannerHeight - 80)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-white shadow-md' : ''}`}>
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/placeholder.svg?height=40&width=40&text=🚀" alt="KidLearn Logo" width={40} height={40} className="rounded-full" />
            <span className={`text-2xl font-bold ${isSticky ? 'text-blue-600' : 'text-white'}`}>KidLearn</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className={`font-semibold ${isSticky ? 'text-blue-600 hover:text-blue-800' : 'text-white hover:text-blue-200'}`}>Home</a>
            <a href="#" className={`font-semibold ${isSticky ? 'text-blue-600 hover:text-blue-800' : 'text-white hover:text-blue-200'}`}>Subjects</a>
            <a href="#" className={`font-semibold ${isSticky ? 'text-blue-600 hover:text-blue-800' : 'text-white hover:text-blue-200'}`}>Games</a>
            <a href="#" className={`font-semibold ${isSticky ? 'text-blue-600 hover:text-blue-800' : 'text-white hover:text-blue-200'}`}>Parents</a>
          </nav>
          <div className="flex space-x-4">
            <Button className="bg-yellow-400 text-blue-800 hover:bg-yellow-500 rounded-full font-bold">Log In</Button>
            <Button className="bg-green-500 text-white hover:bg-green-600 rounded-full font-bold">Donate</Button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section container mx-auto px-4 pt-32 pb-12 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-800">Learn, Play, Grow with KidLearn!</h1>
            <p className="text-xl text-blue-600 mb-6">Join our fun-filled world of learning adventures for curious minds!</p>
            <Button size="lg" className="bg-green-500 text-white hover:bg-green-600 rounded-full px-8 py-3 text-lg font-bold">Start Learning</Button>
            <div className="flex items-center mt-6 space-x-2">
              <Image src="/placeholder.svg?height=32&width=32&text=😃" alt="Happy Kid" width={32} height={32} className="rounded-full" />
              <Image src="/placeholder.svg?height=32&width=32&text=🤓" alt="Smart Kid" width={32} height={32} className="rounded-full" />
              <Image src="/placeholder.svg?height=32&width=32&text=🎨" alt="Creative Kid" width={32} height={32} className="rounded-full" />
              <span className="text-sm text-blue-600 font-semibold">100,000+ happy learners!</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image src="/placeholder.svg?height=400&width=400&text=Kids+Learning" alt="Kids Learning" width={400} height={400} className="rounded-lg" />
          </div>
        </section>

        <section className="py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-800">Discover Exciting Subjects!</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Math Magic", icon: "➕", color: "bg-red-100" },
                { title: "Science Explorers", icon: "🔬", color: "bg-green-100" },
                { title: "Reading Adventures", icon: "📚", color: "bg-yellow-100" },
                { title: "Art & Creativity", icon: "🎨", color: "bg-purple-100" }
              ].map((subject, index) => (
                <Card key={index} className={`${subject.color} border-none shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{subject.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">{subject.title}</h3>
                    <p className="text-blue-600">Exciting lessons and fun activities!</p>
                    <p className="text-green-600 font-semibold mt-2">Earn 10 tokens per lesson</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-800">Support Learning for All: Donate Today!</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-blue-600 mb-6">Your donation helps provide tablets to learners in need and funds our token reward system, making education accessible and fun for everyone!</p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                <Button className="bg-green-500 text-white hover:bg-green-600 rounded-full px-8 py-3 text-lg font-bold">Donate Now</Button>
                <p className="text-blue-800 font-semibold">Every $50 provides a tablet for a child in need</p>
              </div>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <Card className="bg-yellow-100 border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Gift className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">Fund Tablets</h3>
                  <p className="text-blue-600">Help provide learning devices to children without access to technology</p>
                </CardContent>
              </Card>
              <Card className="bg-green-100 border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Star className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">Support Token System</h3>
                  <p className="text-blue-600">Your donations fuel our reward system, motivating kids to learn and achieve</p>
                </CardContent>
              </Card>
              <Card className="bg-purple-100 border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Book className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">Expand Curriculum</h3>
                  <p className="text-blue-600">Help us create more engaging content and learning materials</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-800">Why Kids Love KidLearn</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-orange-100 border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Rocket className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">Interactive Learning</h3>
                  <p className="text-blue-600">Engage with fun animations and games that make learning a blast!</p>
                </CardContent>
              </Card>
              <Card className="bg-pink-100 border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Star className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">Token Rewards</h3>
                  <p className="text-blue-600">Earn tokens for completed lessons and unlock special content!</p>
                </CardContent>
              </Card>
              <Card className="bg-teal-100 border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Book className="w-12 h-12 text-teal-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">Personalized Learning</h3>
                  <p className="text-blue-600">Adaptive lessons that grow with your child's progress!</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-800">Popular Learning Adventures</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Dinosaur Time Travel", subject: "History", level: "Beginner", tokens: 20, image: "/placeholder.svg?height=200&width=300&text=🦕" },
                { title: "Space Explorers", subject: "Science", level: "Intermediate", tokens: 30, image: "/placeholder.svg?height=200&width=300&text=🚀" },
                { title: "Magical Math Kingdom", subject: "Math", level: "Advanced", tokens: 40, image: "/placeholder.svg?height=200&width=300&text=🏰" }
              ].map((course, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image src={course.image} alt={course.title} width={300} height={200} className="w-full h-40 object-cover" />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">{course.title}</h3>
                    <p className="text-blue-600 mb-2">Subject: {course.subject}</p>
                    <p className="text-blue-600 mb-2">Level: {course.level}</p>
                    <p className="text-green-600 font-semibold mb-4">Earn {course.tokens} tokens</p>
                    <Button variant="outline" className="rounded-full bg-yellow-400 text-blue-800 hover:bg-yellow-500 font-bold">Start Adventure</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="md:flex items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">Parents Love KidLearn Too!</h2>
                <p className="text-xl text-blue-600 mb-6">See your child's progress and help them on their learning journey.</p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center mr-3 text-white font-bold">✓</span>
                    <span className="text-blue-700 font-semibold">Track your child's progress and token earnings</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center mr-3 text-white font-bold">✓</span>
                    <span className="text-blue-700 font-semibold">Set learning goals and token milestones together</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center mr-3 text-white font-bold">✓</span>
                    <span className="text-blue-700 font-semibold">Access detailed reports on learning achievements</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <Image src="/placeholder.svg?height=300&width=500&text=Happy+Family" alt="Happy Family" width={500} height={300} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-800">What Kids and Parents Say</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Lily, 8", comment: "I love earning tokens while learning about dinosaurs and space on KidLearn!", avatar: "👧" },
                { name: "Tom's Dad", comment: "The token system has really motivated Tom to improve his math skills. It's fantastic!", avatar: "👨" },
                { name: "Emma, 10", comment: "Thanks to the donated tablet, I can now join art lessons and draw my favorite animals!", avatar: "👧" }
              ].map((testimonial, index) => (
                <Card key={index} className="text-center bg-purple-50 border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{testimonial.avatar}</div>
                    <h3 className="font-semibold mb-2 text-blue-800">{testimonial.name}</h3>
                    <p className="text-blue-600">"{testimonial.comment}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-yellow-100 py-12 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">Ready to Start the Learning Adventure?</h2>
            <p className="text-xl mb-8 text-blue-600">Join KidLearn today and watch your child's curiosity soar!</p>
            <form className="max-w-md mx-auto">
              <div className="flex">
                <Input type="email" placeholder="Parent's Email" className="rounded-l-full bg-white text-blue-800 border-2 border-blue-400" />
                <Button type="submit" className="rounded-r-full bg-green-500 hover:bg-green-600 text-white font-bold">Get Started</Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image src="/placeholder.svg?height=40&width=40&text=🚀" alt="KidLearn Logo" width={40} height={40} className="rounded-full bg-white" />
              <span className="text-2xl font-bold">KidLearn</span>
            </div>
            <nav className="flex space-x-6">
              <a href="#" className="hover:text-yellow-300">Home</a>
              <a href="#" className="hover:text-yellow-300">Subjects</a>
              <a href="#" className="hover:text-yellow-300">Games</a>
              <a href="#" className="hover:text-yellow-300">Parents</a>
              <a href="#" className="hover:text-yellow-300">Donate</a>
            </nav>
          </div>
          <div className="mt-8 text-center">
            <p>© 2023 KidLearn. All rights reserved. Making learning fun and accessible for kids everywhere!</p>
          </div>
        </div>
      </footer>
    </div>
  )
}