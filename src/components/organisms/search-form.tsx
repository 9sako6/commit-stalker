import { useEffect } from "react"
import { useState } from "react"
import { FormEventHandler } from "react"
import SearchIcon from '@mui/icons-material/Search'
import TagIcon from '@mui/icons-material/Tag';

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

  return <form className="text-sm flex py-4">
    <div className="flex items-center  md:w-full">
      <SearchIcon className="text-gray-700 pt-1" />
      <input
        autoFocus
        name="repository" onChange={handleQueryChange} value={query} placeholder='owner/repository'
        className="text-lg bg-transparent appearance-none py-2 px-1 w-full text-gray-700 leading-tight focus:outline-none focus:text-blue-600" />
    </div>
    <div className="flex items-center mr-4">
      <TagIcon className="text-gray-700 text-base" />
      <input
        autoFocus
        type='number'
        name="page" onChange={handlePageChange} value={pageFromInput} placeholder='1' min={1}
        className="text-lg bg-transparent appearance-none w-20 py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:text-blue-600" />
    </div>
    <button className="bg-transparent hover:bg-gray-100 text-gray-800 text-sm font-semibold py-1 px-2 border border-gray-400 rounded">Search</button>
  </form>
}
