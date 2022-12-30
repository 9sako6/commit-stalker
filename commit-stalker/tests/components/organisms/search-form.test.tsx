import { SearchForm } from "@/src/components/organisms/search-form"
import { render } from "@testing-library/react"

test('render search form', () => {
  const { getByRole } = render(<SearchForm />)

  getByRole('button', { name: 'Search' })
})