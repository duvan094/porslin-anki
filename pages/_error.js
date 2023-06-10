import { useEffect } from "react"

function Error(error) {

    useEffect(()=>{
        console.log('error', error)
    },[])


    return (
        <main>
            <section>
                <p>
                    {error.statusCode
                    ? `An error ${error.statusCode} occurred on server`
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