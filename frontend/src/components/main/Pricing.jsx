import React from 'react'

const Pricing = () => {
  return (
    <div>
        <header className='bg-light'>
            <div className='container py-5'>
                    <h1 className='display-1 text-center'>Pricing</h1>
            </div>
        </header>
        <div className='container my-5'>
            <div className='row mt-5'>
                <div className='col-md-4'>
                    <div className='card' style={{background: '#dfe3ee'}}>
                        <div className="card-header">
                            <h3 className='text-center'>Basic</h3>
                        </div>
                        <div className="card-body">
                            <h3>Features</h3>

                            <ul>
                                <li>₹1,700</li>
                                <li>3 Websites</li>
                                <li>Basic Customization</li>
                                <li>WordPress Integration</li>
                                <li>Email Support</li>
                            </ul>
                        </div>
                        <div className="card-footer text-center">
                            <a href="https://buy.stripe.com/test_4gw8zOakI1LM6FW8wy" className="btn btn-outline-primary" target='"_blank"'>Buy Basic Plan</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card' style={{background: '#adb2cb'}}>
                        <div className="card-header">
                            <h3 className='text-center'>Professional</h3>
                        </div>
                        <div className="card-body">
                            <h3>Features</h3>

                            <ul>
                                <li>₹2,500</li>
                                <li>8 Websites</li>
                                <li>Basic Customization</li>
                                <li>WordPress Integration</li>
                                <li>Email Support</li>
                            </ul>
                        </div>
                        <div className="card-footer text-center">
                            <a href="https://buy.stripe.com/test_8wMeYc8cAgGGaWceUV" className="btn btn-outline-primary" target='"_blank"'>Buy Professional Plan</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card' style={{background: '#8b9dc3'}} >
                        <div className="card-header">
                            <h3 className='text-center'>Premium</h3>
                        </div>
                        <div className="card-body">
                            <h3>Features</h3>

                            <ul>
                                <li>₹3,400</li>
                                <li>14 Websites</li>
                                <li>Basic Customization</li>
                                <li>WordPress Integration</li>
                                <li>Email Support</li>
                            </ul>
                        </div>
                        <div className="card-footer text-center">
                            <a href="https://buy.stripe.com/test_4gw2bq3Wk622c0g9AA" className="btn btn-outline-primary" target='"_blank"'>Buy Premium Plan</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing