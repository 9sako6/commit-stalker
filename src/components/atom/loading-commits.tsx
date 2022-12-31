import { LoadingBar } from "./loading-bar";

export const LoadingCommits = () => (
  <div className="grid gap-6 py-20">
    <div className="grid gap-1">
      <LoadingBar className="h-6 rounded w-1/4" />
      <LoadingBar className="h-6 rounded" />
      <LoadingBar className="h-6 rounded" />
      <LoadingBar className="h-6 rounded" />
    </div>
    <div className="grid gap-1">
      <LoadingBar className="h-6 rounded" />
      <LoadingBar className="h-6 rounded" />
      <LoadingBar className="h-6 rounded" />
    </div>
  </div>
)
