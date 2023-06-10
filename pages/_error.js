import { useEffect } from "react"

function Error(message) {

    useEffect(()=>{
        console.log(message)
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
    return { statusCode, res }
  }
   
  export default Error