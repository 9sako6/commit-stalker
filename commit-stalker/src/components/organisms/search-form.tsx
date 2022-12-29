import { useSearchQuery } from "@/src/fetcher/github-api"

export const SearchForm = () => {
  // const { isLoading, error, data } = useSearchQuery({
  //   owner: 'rust-lang',
  //   repository: 'rust'
  // })

  // if (isLoading) return <div>Loading...</div>
  // if (error) return <div>An error has occurred.</div>

  return <form>
    {/* {JSON.stringify(data)} */}
    <input name="repository" />
    <button>Search</button>
  </form>
}
