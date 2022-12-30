import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Readme } from '../components/organisms/readme'
import { SearchForm } from '../components/organisms/search-form'
import { Commits } from '../components/organisms/commits'
import { useSearchQuery } from '../hooks/github-api'
import type { Commits as CommitsType } from '../models/commits'
import { useRouter } from 'next/router'
import { parseInputQuery } from '../lib/parse-input-query'
import { parseInputPage } from '../lib/parse-input-page'
import { ErrorMessage } from '../components/organisms/error-message'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const { repository: rawInputQuery } = router.query
  const { owner, repository } = parseInputQuery(rawInputQuery)
  const { page } = parseInputPage(router.query.page)

  let commits: CommitsType = []
  const { isLoading, data, error, isError } = useSearchQuery({ owner, repository, page })

  if (isLoading) { console.log('loading...') }
  if (data) { commits = data }

  return (
    <>
      <Head>
        <title>Commit Stalker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={inter.className}>
        <div className='md:w-3/4 mx-auto'>
          <h1>Commit Stalker Title</h1>
          <SearchForm owner={owner} repository={repository} page={page} />
          {!isError && isLoading && <div>Loading...</div>}
          {!isLoading && isError && <ErrorMessage message={String(error)} />}
          <Commits commits={commits} />
          <Readme />
        </div>
      </main>
    </>
  )
}
