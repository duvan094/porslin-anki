import { useEffect } from "react"

function Error({error, statusCode}) {

    useEffect(()=>{
        console.log('error', error)
        console.log('res', res)
    })


    return (
        <main>
            <section>
                <p>
                    {statusCode
                    ? `An error ${statusCode} occurred on server`
                    : 'An error occurred on client'}
                </p>
            </section>
        </main>
    )
  }
   
  Error.getInitialProps = ({ res, error }) => {
    const statusCode = res ? res.statusCode : error ? error.statusCode : 404
    return { error, statusCode, res }
  }
   
  export default Error