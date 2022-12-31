import { Resources } from "@/src/models/resources";
import response from "../fixtures/github-api-response/rate-limit.json"

test('parse Resources', () => {
  Resources.parse(response)
})
