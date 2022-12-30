import { SearchForm } from "@/src/components/organisms/search-form"
import { render } from "@testing-library/react"

test('render search form', () => {
  let called = false
  const { getByRole } = render(<SearchForm handleSubmit={() => { called = true }} />)

  getByRole('button', { name: 'Search' }).click()
  expect(called).toBe(true)
})
