interface LinkProps {
  url: string
  title: string
}

export default function MyLink({url, title}: LinkProps) {
  return (
    <div className="mb-2 is-family-code"><a href={url}>{title}</a></div>
  )
}
