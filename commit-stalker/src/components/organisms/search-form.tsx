import { useEffect } from "react"
import { useState } from "react"
import { FormEventHandler } from "react"

type Props = {
  owner: string;
  repository: string;
  page: number;
}

export const SearchForm = ({ owner, repository, page }: Props) => {
  const [query, setQuery] = useState(owner && repository ? `${owner}/${repository}` : '')
  const [pageFromInput, setPageFromInput] = useState(page || 1)

  useEffect(() => {
    setQuery(owner && repository ? `${owner}/${repository}` : '')
    setPageFromInput(page)
  }, [owner, repository, page])

  const handleQueryChange: FormEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.currentTarget.value)
  }
  const handlePageChange: FormEventHandler<HTMLInputElement> = (e) => {
    setPageFromInput(Number(e.currentTarget.value))
  }

  return <form className="w-2/4 flex py-4">
    <input
      autoFocus
      name="repository" onChange={handleQueryChange} value={query} placeholder='owner/repository'
      className="appearance-none border-b border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800" />
    <input
      autoFocus
      type='number'
      name="page" onChange={handlePageChange} value={pageFromInput} placeholder='1' min={1}
      className="ml-4 text-center appearance-none border-b border-gray-200 w-20 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800" />
    <button className="ml-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 shadow rounded">Search</button>
  </form>
}
