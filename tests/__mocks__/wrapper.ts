import { createFirebaseApp } from "@/src/firebase"
import { ReactNode } from "react"
import { wrapper as queryWrapper } from "./hooks/query-client-wrapper"

type Props = {
  children: ReactNode
}

export const wrapper = (props: Props) => {
  createFirebaseApp()

  return queryWrapper(props)
}
