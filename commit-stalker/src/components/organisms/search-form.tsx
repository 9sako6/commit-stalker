import { parseInputQUery } from "@/src/lib/parse-input-query"
import { useState } from "react"
import { FormEventHandler } from "react"

type Props = {
  handleSubmit: (query: ReturnType<typeof parseInputQUery>) => void
}

export const SearchForm = ({ handleSubmit }: Props) => {
  const [value, setValue] = useState('')

  const handleChange: FormEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.value)
  }

  return <form>
    <input name="repository" onChange={handleChange} value={value} placeholder='owner/repository' />
    <div role='button' onClick={() => handleSubmit(parseInputQUery(value))}>Search</div>
  </form>
}
