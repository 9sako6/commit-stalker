import { SearchForm } from "@/src/components/organisms/search-form"
import { render } from "@testing-library/react"

test('render search form', () => {
  const { getByRole } = render(<SearchForm owner="jsanedoe" repository="commit-stalker" page={2} />)

  getByRole('button', { name: 'Search' })
})
