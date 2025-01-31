import React from "react"
import '../styles/Workshop.scss'
const Workshop = () => 
{
    return (
        <div className="workshop">
            <div className="heading">
                <h6> Workshop </h6>
            </div>
            <div className="workshop-container">
                <div className="card-container">
                    <div className="card-heading">
                        IOT
                    </div>
                    <div className="card-content">
                        <div className="Upper-rectangle">
                            <img src="assets/workshop/iot1.jpg" alt="" className="card-img" />
                            <div className="Lower-rectangle">
                                Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.01.Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.01.Get big, quick. Solana is made to handle thousands of transactionS.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card-heading">
                        DESIGN
                    </div>
                    <div className="card-content">
                        <div className="Upper-rectangle">
                            <img src="assets/workshop/design1.jpeg" alt="" className="card-img" />
                            <div className="Lower-rectangle">
                                Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.01.Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.01.Get big, quick. Solana is made to handle thousands of transactionS.
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Workshop;
