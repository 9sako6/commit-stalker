import { Commits } from "@/src/models/commits";
import response from '../fixtures/github-api-response/rust-lang.rust.json'

test('parse Commits', () => {
  Commits.parse(response)
})
