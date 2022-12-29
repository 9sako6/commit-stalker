import { Commits } from "@/src/models/commits";
import { test } from "vitest";
import response from '../fixtures/github-api-response/rust-lang.rust.json'

test('parse Commits', () => {
  Commits.parse(response)
})
