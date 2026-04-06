import { motion } from 'framer-motion'

export default function WelcomeScreen({ name, onBack }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-gray-950/50 p-8 text-center transition-colors duration-300"
    >
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        Bem-vindo(a), {name}!
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-6">
        Sua conta foi criada com sucesso.
      </p>

      <button
        type="button"
        onClick={onBack}
        className="w-full rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-medium text-white
                   transition hover:bg-purple-700"
      >
        Entrar com sua conta
      </button>
    </motion.div>
  )
}
