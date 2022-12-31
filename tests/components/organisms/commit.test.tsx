import { render } from '@testing-library/react'
import { Commit } from '@/src/components/organisms/commit'
import { Commit as CommitModel } from '@/src/models/commit'
import response from '../../fixtures/github-api-response/rust-lang.rust.json'

test('render a commit', () => {
  const commit = CommitModel.parse(response[0])
  commit.commit.message = "Add tests\n\nThis is a commit message body."

  const { getByRole, getByText } = render(<Commit {...commit} />)

  getByRole('heading', { name: "Add tests" })
  getByText("This is a commit message body.")
})
