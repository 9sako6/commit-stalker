import Head from 'next/head'
import { Readme } from '../components/organisms/readme'
import { SearchForm } from '../components/organisms/search-form'
import { Commits } from '../components/organisms/commits'
import { useSearchQuery } from '../hooks/github-api/use-search-query'
import type { Commits as CommitsType } from '../models/commits'
import { useRouter } from 'next/router'
import { parseInputQuery } from '../lib/parse-input-query'
import { parseInputPage } from '../lib/parse-input-page'
import { ErrorMessage } from '../components/organisms/error-message'
import { Pagination } from '../components/organisms/pagination'
import Link from 'next/link'
import { LoadingCommits } from '../components/atom/loading-commits'
import { RateLimit } from '../components/organisms/rate-limit'

export default function Home() {
  const router = useRouter()
  const { repository: rawInputQuery } = router.query
  const { owner, repository } = parseInputQuery(rawInputQuery)
  const { page } = parseInputPage(router.query.page)

  let commits: CommitsType | undefined
  let totalPage: number | undefined
  const { isInitialLoading, data, error, isError } = useSearchQuery({ owner, repository, page })

  if (data) {
    commits = data.commits
    totalPage = data.totalPage
  }

  return (
    <>
      <Head>
        <title>Commit Stalker</title>
        <meta name="description" content="GitHub commits viewer. 100 commits are showed in a page. (35 commits in the official site.) In addition, you can search older commits easily by pagination." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='sticky top-0 bg-slate-50 z-30'>
        <div className='md:flex items-center m-auto'>
          <div className='md:w-1/5 flex items-center'>
            <Link href={'/'} className='text-lg md:m-auto font-semibold'>
              <h1>Commit Stalker</h1>
            </Link>
            <div className='ml-auto md:hidden'>
              <RateLimit />
            </div>
          </div>
          <div className='md:w-3/5'>
            <SearchForm owner={owner} repository={repository} page={page} />
          </div>
          <div className='md:w-1/5 hidden md:block'>
            <div className='w-3/4'>
              <RateLimit />
            </div>
            {/* TODO: GitHub Login Button */}
          </div>
        </div>
      </header>

      <main>
        <div className='md:w-3/5 m-auto py-8 rounded'>
          {!isInitialLoading && !isError && !commits && <Readme />}
          {!isError && isInitialLoading && <LoadingCommits />}
          {!isInitialLoading && isError && <ErrorMessage>{String(error)}</ErrorMessage>}
          {totalPage && <Pagination count={totalPage} defaultPage={page} owner={owner} repository={repository} />}
          {commits && <Commits commits={commits} />}
          {totalPage && <Pagination count={totalPage} defaultPage={page} owner={owner} repository={repository} />}
        </div>
      </main>

      <footer className='text-sm text-gray-500 m-auto'>
        <div>
          <div className='py-4 text-center'>
            <p>
              <a className='hover:underline'
                href='https://github.com/9sako6/commit-stalker'>9sako6/commit-stalker
              </a>
            </p>
            &copy;{' '}{(new Date()).getFullYear()}{' '}by 9sako6
          </div>
        </div>
      </footer>
    </>
  )
}
