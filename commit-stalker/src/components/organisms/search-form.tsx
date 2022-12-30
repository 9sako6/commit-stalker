import { useState } from "react"
import { FormEventHandler } from "react"

export const SearchForm = () => {
  const [value, setValue] = useState('')

  const handleChange: FormEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.value)
  }

  return <form>
    <input name="repository" onChange={handleChange} value={value} placeholder='owner/repository' />
    <button>Search</button>
  </form>
}
