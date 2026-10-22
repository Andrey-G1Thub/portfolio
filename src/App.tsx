import Button from './components/ui/Button'
import TechBadge from './components/ui/TechBadge'
import Card from './components/ui/Card'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-page p-4 text-content">
      <Header />

      <main className="mx-auto max-w-content p-4">
        <h1 className="mb-6 text-2xl font-bold">Проверка Dark Premium</h1>

        <Card>
          <p className="text-text-secondary">Проверка универсальных кнопок</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <TechBadge>React</TechBadge>
            <TechBadge>TypeScript</TechBadge>
            <TechBadge>Tailwind CSS</TechBadge>
            <TechBadge>Vite</TechBadge>
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            <Button>Основная кнопка</Button>

            <Button variant="secondary">Вторичная кнопка</Button>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

export default App
