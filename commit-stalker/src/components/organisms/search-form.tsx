import { useState } from "react"
import { FormEventHandler } from "react"

export const SearchForm = () => {
  const [value, setValue] = useState('')

  const handleChange: FormEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.value)
  }

  return <form className="w-2/4 flex py-12">
    <input
      autoFocus
      name="repository" onChange={handleChange} value={value} placeholder='owner/repository'
      className="appearance-none border-b border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800" />
    <input
      autoFocus
      name="page" value={1} placeholder='1'
      className="ml-4 text-center appearance-none border-b border-gray-200 w-20 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800" />
    <button className="ml-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 shadow rounded">Search</button>
  </form>
}
