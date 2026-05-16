export function AnalyticsPanel({ analytics }: any) {
  return (
    <div className="rounded-[40px] border border-white/10 bg-black/30 p-8 backdrop-blur-2xl">
      <div className="mb-8 text-4xl font-black">
        Picnic Analytics 📊
      </div>

      <div className="grid gap-4">
        <div className="rounded-3xl bg-white/10 p-6">
          <div className="text-zinc-300">Всего участников</div>
          <div className="text-5xl font-black">{analytics.total}</div>
        </div>

        <div className="rounded-3xl bg-white/10 p-6">
          <div className="text-zinc-300">Мужчины</div>
          <div className="text-5xl font-black">{analytics.male}</div>
        </div>

        <div className="rounded-3xl bg-white/10 p-6">
          <div className="text-zinc-300">Женщины</div>
          <div className="text-5xl font-black">{analytics.female}</div>
        </div>
      </div>
    </div>
  )
}
