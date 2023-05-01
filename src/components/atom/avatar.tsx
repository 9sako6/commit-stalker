type Props = {
  url?: string;
};

export const Avatar = ({ url }: Props) => {
  if (!url) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={url}
      width={20}
      alt="author-avatar"
      className="rounded-full inline"
    />
  );
};
