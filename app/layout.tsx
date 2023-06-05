import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
   title: 'Visão Geral',
}

function RootLayout({ children }: PropsWithChildren) {
   return (
      <html lang='pt-BR'>
         <body className={inter.className}>
            {children}
         </body>
      </html>
   )
}

export default RootLayout