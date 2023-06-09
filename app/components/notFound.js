// 404.js
import Link from 'next/link'

export default function NotFound() {
  return (
    <main>
      <section>
          <h1>404 - Page Not Found :(</h1>
          <p>We couldn't find the page you were looking for...</p>
          <Link href="/">
              Go back home
          </Link>
      </section>
    </main>
  )
}