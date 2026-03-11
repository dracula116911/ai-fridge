import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import ThemeToggle from './components/ThemeToggle'

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 transition-colors duration-500 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        <nav className="fixed top-0 w-full p-6 flex justify-between items-center max-w-5xl">
          <h1 className="text-2xl font-bold tracking-tight">AI Fridge</h1>
          <ThemeToggle />
        </nav>

        <main className="text-center">
            <h2 className='text-5xl font-extrabold mb-4'>What's in your fridge?</h2>
            <p className="text-slate-500 dark:text-slate-400">Enter Ingredients to generate magic..</p>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App