'use client'

import { motion } from 'framer-motion'

export function PicnicRoom({ participants }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen overflow-hidden"
    >
      <img
        src="/backgrounds/room.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 p-10">
        <div className="mb-12 text-6xl font-black text-white">
          Picnic Room 🏕️
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {participants.map((user: any) => (
            <motion.div
              key={user.id}
              whileHover={{ y: -10 }}
              className="rounded-[32px] bg-white/10 p-8 backdrop-blur-xl"
            >
              <div className="mb-6 text-7xl">
                {user.gender === 'male' ? '🧔' : '👩'}
              </div>

              <div className="text-3xl font-black text-white">
                {user.name || 'Гость'}
              </div>

              <div className="mb-4 text-zinc-300">
                {user.age || 18} лет
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
