import Link from 'next/link'

interface LinkProps {
  url: string
  title: string
}

export default function MyLink({url, title}: LinkProps) {
  return (
    <div className="mb-2 is-family-code">
      <Link href={url}><a>{title}</a></Link>
    </div>
  )
}
