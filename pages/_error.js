import { useEffect } from "react"
import { useRouter } from 'next/router'
import NotFound from '../components/notFound'

function Error(message) {
    const router = useRouter()

    useEffect(()=>{
        console.log(`${message.statusCode
            ? `An error ${message.statusCode} occurred on server`
            : 'An error occurred on client'}`)
        router.push('/')
    },[])


    return (
        <main>
            <section>
                <NotFound></NotFound>
            </section>
        </main>
    )
  }
   
  Error.getInitialProps = ({ res, error }) => {
    const statusCode = res ? res.statusCode : error ? error.statusCode : 404
    return { statusCode }
  }
   
  export default Error