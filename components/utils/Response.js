import React from 'react'
import Link from 'next/link'

export const Response = ({ resp }) => {

  return (
    <>
      <section className="create-nft black-bg">
        <div className="container">
          <div
            className="row wow animated fadeInUp justify-content-center align-items-center"
            data-wow-duration="2000ms"
            data-wow-delay="500ms"
          >
            <div className="col-xl-10 col-md-10 ">
              <div className="create-nft-form-wrapper">
                <div className="create-nft-form-border">
                  <div
                    className="wow animated fadeInUp justify-content-center align-items-center"
                    data-wow-duration="2000ms"
                    data-wow-delay="500ms"
                  >
                    {
                      resp.respType === "success" ?
                        <>                          
                          <svg xmlns="http://www.w3.org/2000/svg" width="250" height="120" fill="#adf802" className="bi bi-check-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                          </svg>
                          <h1 className="text-center">{resp.enterpriseType} Application</h1>
                          <p className="text-center">{resp.message}</p>
                        </>
                        :
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="250" height="150" fill="#D06079" className="bi bi-exclamation-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                          </svg>
                          <p className="error">Unknown Error!!</p>
                        </>

                    }
                    <div className='row justify-content-center align-items-center'>
                      <Link href="/">
                        <a className="boxed-btn justify-self-center text-center" >Home</a>
                      </Link>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}