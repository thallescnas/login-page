import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-linear-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-purple-200 dark:border-gray-700" />
        <motion.div
          className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-t-purple-600 dark:border-t-purple-400"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide">
        Carregando...
      </p>
    </motion.div>
  )
}
