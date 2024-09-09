import Aside from "../@shared-components/aside";

export default function MainLayout({ children }) {

  return (
    <div className="flex h-screen bg-blue-100 text-gray-900 font-sans">
        
        <Aside />
      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto"> { children } </main>
    
    </div>
  )
}