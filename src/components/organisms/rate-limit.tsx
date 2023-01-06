import { useRateLimit } from "@/src/hooks/github-api/use-rate-limit"
import LinearProgress from '@mui/material/LinearProgress';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Tooltip from '@mui/material/Tooltip';

export const RateLimit = () => {
  const { isInitialLoading, isError, data } = useRateLimit()

  if (isInitialLoading || isError || !data) return null;
  const { limit, remaining } = data.resources.core;
  const helpText = `For unauthenticated requests, the rate limit allows for up to 60 requests per hour.
  For authenticated requests, it allows for up to 5000 requests per hour. Please sign in with your GitHub account.
  `
  const percent = Math.round(100 * remaining / limit)

  // https://docs.github.com/en/rest/overview/resources-in-the-rest-api?apiVersion=2022-11-28#rate-limiting
  return (<div className="md:p-4 text-xs text-gray-600">
    <p className="font-bold flex items-center">GitHub REST API
      <Tooltip title={helpText} arrow enterTouchDelay={0}>
        <HelpOutlineOutlinedIcon className="p-1" />
      </Tooltip>
    </p>
    <div>
      <p>Remaining {remaining}/{limit}</p>
      <LinearProgress value={percent} variant='determinate' color="secondary" />
    </div>
  </div>)
}
