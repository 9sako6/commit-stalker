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
    <div className='flex justify-center py-8'><MuPagination count={count} defaultPage={defaultPage || 1} showFirstButton showLastButton onChange={handleChange} /></div>)
}
