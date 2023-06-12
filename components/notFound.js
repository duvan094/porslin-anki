// 404.js
import Link from 'next/link'

export default function NotFound() {
  return (
    <main>
      <div className='mainWrapper'>
        <section>
            <h1>404 - Sidan hittades ej :(</h1>
            <p>Vi kunde inte hitta sidan du letade efter...</p>
            <Link href="/">
                Gå tillbaks till startsidan
            </Link>
        </section>
      </div>
    </main>
  )
}