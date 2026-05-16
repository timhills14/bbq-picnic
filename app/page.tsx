'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { questions } from '@/config/questions'
import { AnalyticsPanel } from '@/components/analytics/AnalyticsPanel'
import { PicnicRoom } from '@/components/room/PicnicRoom'
import { StepCard } from '@/components/ui/StepCard'

export default function Page() {
  const [step, setStep] = useState(0)
  const [participants, setParticipants] = useState<any[]>([])

  const [answers, setAnswers] = useState<any>({
    name: '',
    age: 18,
    gender: 'male',
    meat: [],
    drinks: [],
    skills: [],
    bring: []
  })

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'participants'), (snapshot) => {
      setParticipants(snapshot.docs.map(doc => doc.data()))
    })

    return () => unsub()
  }, [])

  async function finishInvite() {
    await addDoc(collection(db, 'participants'), {
      ...answers,
      id: crypto.randomUUID(),
      createdAt: Date.now()
    })

    setStep(questions.length)
  }

  const current = questions[step]

  const analytics = useMemo(() => {
    return {
      total: participants.length,
      male: participants.filter(p => p.gender === 'male').length,
      female: participants.filter(p => p.gender === 'female').length
    }
  }, [participants])

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <AnimatePresence mode="wait">
        {step < questions.length ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <img
              src={current.background}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

            <div className="relative z-10 flex min-h-screen items-center justify-center p-4 lg:p-10">
              <div className="grid w-full max-w-7xl gap-6 lg:grid-cols-[1fr_420px]">
                <AnalyticsPanel analytics={analytics} />

                <StepCard
                  question={current}
                  answers={answers}
                  setAnswers={setAnswers}
                  onNext={() => {
                    if (step === questions.length - 1) {
                      finishInvite()
                    } else {
                      setStep(step + 1)
                    }
                  }}
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <PicnicRoom participants={participants} />
        )}
      </AnimatePresence>
    </main>
  )
}
