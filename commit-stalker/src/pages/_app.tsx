import '../../styles/globals.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { runMockServer } from '../__mocks__/run-mock-server'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  if (process.env.NEXT_PUBLIC_API_MOCKING) { runMockServer() }

  return (<QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>)
}
