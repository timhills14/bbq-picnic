'use client'

import { motion } from 'framer-motion'

export function StepCard({
  question,
  setAnswers,
  onNext
}: any) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="rounded-[40px] border border-white/10 bg-white/10 p-8 backdrop-blur-2xl shadow-2xl"
    >
      <div className="mb-4 text-sm uppercase tracking-[0.4em] text-orange-300">
        BBQ INVITE
      </div>

      <h1 className="mb-8 text-5xl font-black leading-tight">
        {question.title}
      </h1>

      <div className="space-y-4">
        {question.options?.map((option: string) => (
          <button
            key={option}
            onClick={() => {
              setAnswers((prev: any) => ({
                ...prev,
                [question.id]: option
              }))

              onNext()
            }}
            className="w-full rounded-2xl bg-white/10 p-5 text-left text-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-orange-500"
          >
            {option}
          </button>
        ))}
      </div>
    </motion.div>
  )
}
