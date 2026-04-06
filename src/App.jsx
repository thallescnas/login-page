import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import WelcomeScreen from './components/WelcomeScreen'

function App() {
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(true)
  const [welcomeUser, setWelcomeUser] = useState(null)
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const handleLogin = (name, fromRegister = false) => {
    if (fromRegister) {
      setWelcomeUser(name)
      setIsLogin(false)
    } else {
      console.log('Usuario logado:', name)
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <AnimatePresence mode="wait">
      {welcomeUser ? (
        <WelcomeScreen
          key="welcome"
          name={welcomeUser}
          onBack={() => { setWelcomeUser(null); setIsLogin(true) }}
        />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
        >
          <button
            onClick={() => setDark((d) => !d)}
            className="fixed top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-700 shadow-md
                       hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            aria-label="Alternar tema"
          >
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm11.394-5.834a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM17.75 18a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18.5a.75.75 0 01-.75-.75zM7.83 7.83a.75.75 0 00-1.061-1.06l-1.59 1.59a.75.75 0 101.06 1.061l1.59-1.591zM2.25 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm3.854 6.376a.75.75 0 01.036 1.06l-1.59 1.59a.75.75 0 11-1.06-1.06l1.59-1.59a.75.75 0 011.024-.001zM6 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25A.75.75 0 016 18zm10.308-1.609a.75.75 0 011.061-.036l1.59 1.59a.75.75 0 01-1.06 1.061l-1.59-1.59a.75.75 0 01-.001-1.025z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
              </svg>
            )}
          </button>

          <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-gray-950/50 p-8 overflow-hidden transition-colors duration-300">
            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? 'login' : 'register'}
                initial={{ opacity: 0, x: isLogin ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isLogin ? -20 : 20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {isLogin ? (
                  <LoginForm onSwitchToRegister={() => setIsLogin(false)} onLogin={handleLogin} />
                ) : (
                  <RegisterForm onSwitchToLogin={() => setIsLogin(true)} onLogin={handleLogin} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <footer className="fixed bottom-4 left-0 right-0 text-center text-sm text-gray-400 dark:text-gray-500">
            feito por <a href="https://github.com/thallescnas" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 font-medium hover:underline">Thalles C. Nascimento</a>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App
