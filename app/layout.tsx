import './globals.css'

export const metadata = {
  title: 'BBQ Picnic Invite',
  description: 'Realtime cinematic picnic invite'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
