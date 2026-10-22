import { CodeXml, Mail } from 'lucide-react'
function App() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-8 bg-black text-white">
      <div className="flex items-center gap-3">
        <CodeXml size={32} />
        <span>GitHub</span>
      </div>

      <div className="flex items-center gap-3">
        <Mail size={32} />
        <span>Email</span>
      </div>
    </main>
  )
}

export default App
