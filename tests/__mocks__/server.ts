import { setupServer } from 'msw/node'
import { handlers } from './rest/handlers'

export const server = setupServer(...handlers)
