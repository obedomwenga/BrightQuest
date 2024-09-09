import Image from 'next/image'

export default function SessionLayout({ children, bgColor }) {
  return (
    <div className={`min-h-screen bg-yellow-300 flex items-center justify-center p-4`}>
      <div className={`w-full max-w-4xl flex flex-col md:flex-row items-center bg-${bgColor}-200 rounded-3xl overflow-hidden shadow-xl`}>
        { children }
        <div className="w-full md:w-1/2 relative">
          {/* <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Signup%20screen%20one-EckHBOXlcGWnwpscanGXzslLgnIInA.png"
            alt="Excited young learner"
            width={500}
            height={500}
            className="w-full h-auto"
          /> */}
        </div>
      </div>
    </div>
  )
}