import React from 'react'
import '../styles/Form.css'
import formArrow from '../assets/images/formArrow.avif'
const Form = () => {
    return (
        <section className="book-meeting">
            <div className="book-meeting-title-and-text">
                <p className='book-meeting-title'>Automate Processes with <br /><span>AI Agents</span></p>
                <p className='book-meeting-text'>We help businesses reduce costs and increase productivity with Voice <br /> and Text AI Agents with hyper realistic capabilities</p>
            </div>

            <div className="booking-container">

                <div className="form-box">
                    <form>
                        <label>
                            Name *
                            <input type="text" placeholder="Enter your name" required />
                        </label>

                        <label>
                            Last Name*
                            <input type="text" placeholder="Enter your last name" required />
                        </label>

                        <label>
                            Phone *
                            <div className="phone-input"  >
                                <select>
                                    <option value="+" >+</option>
                                </select>
                                <input type="text" placeholder="Ej. 71234567" required />
                            </div>
                        </label>

                        <label>
                            Email *
                            <input type="email" placeholder="email@email.com" />
                        </label>

                        <button type="submit">Continue to Book Meeting</button>
                    </form>
                </div>


                <div className="info-box">
                    <img src={formArrow} alt="Arrow" className="arrow-img" /> <span><img className='arrow-down-img' src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=49,h=104,fit=crop/AoPGlLRxpzcJbzB1/untitled-design-2-m5KwwD0K7biLVbyM.png" alt="arrow-down" /></span>
                    <p>
                        Get a call from <br />
                        <span>Ana, our Voice<br />AI Agent</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Form
