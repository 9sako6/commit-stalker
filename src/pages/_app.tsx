import '../../styles/globals.css'
import 'zenn-content-css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { runMockServer } from '../__mocks__/run-mock-server'
import { Inter } from '@next/font/google'
import { UserProvider } from '../contexts/user-context';

const inter = Inter({ subsets: ['latin'] })

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
    runMockServer()
    console.log("\x1b[35mMSW is running\x1b[39m")
  }

  return (<QueryClientProvider client={queryClient}>
    <UserProvider>
      <Component className={inter.className} {...pageProps} />
    </UserProvider>
  </QueryClientProvider>)
}
