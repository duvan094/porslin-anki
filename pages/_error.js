import { useEffect } from "react"
import { useRouter } from 'next/router'

function Error(message) {
    const router = useRouter()

    useEffect(()=>{
        console.log(message)
        router.push('/')
    },[])


    return (
        <main>
            <section>
                <p>
                    {message.statusCode
                    ? `An error ${message.statusCode} occurred on server`
                    : 'An error occurred on client'}
                </p>
            </section>
        </main>
    )
  }
   
  Error.getInitialProps = ({ res, error }) => {
    const statusCode = res ? res.statusCode : error ? error.statusCode : 404
    return { statusCode }
  }
   
  export default Error