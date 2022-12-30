type Props = {
  url?: string;
}
export const Avatar = ({ url }: Props) => {
  return (<img src={url} width={20} alt="author-avatar" className="rounded-full inline"/>)
}
