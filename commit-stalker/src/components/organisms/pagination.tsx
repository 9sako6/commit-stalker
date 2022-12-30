import MuPagination from '@mui/material/Pagination';
import { useRouter } from 'next/router';

type Props = {
  owner: string;
  repository: string;
  count: number;
  defaultPage?: number;
}

export const Pagination = ({ count, defaultPage, owner, repository }: Props) => {
  const router = useRouter()
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`/?repository=${owner}%2F${repository}&page=${value}`)
  }
  return (
    <MuPagination count={count} defaultPage={defaultPage || 1} showFirstButton showLastButton onChange={handleChange} />)
}
