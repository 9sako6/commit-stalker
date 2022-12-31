import { render } from '@testing-library/react'
import { Commits } from '@/src/components/organisms/commits'
import { Commits as CommitsModel } from '@/src/models/commits'
import response from '../../fixtures/github-api-response/rust-lang.rust.json'

test('render a commit', () => {
  const commits = CommitsModel.parse(response)
  commits[0].commit.message = "Add tests 1\n\nThis is a 1st commit message body."
  commits[19].commit.message = "Add tests 20\n\nThis is a 20th commit message body."

  const { getByRole, getByText } = render(<Commits commits={commits} />)

  getByRole('heading', { name: "Add tests 1" })
  getByText("This is a 1st commit message body.")

  getByRole('heading', { name: "Add tests 20" })
  getByText("This is a 20th commit message body.")
})
