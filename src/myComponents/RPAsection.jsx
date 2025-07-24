import React from 'react'
import '../styles/RPAsection.css'

const RPAsection = () => {
    return (
        <section className="rpa-section">
            <div className="rpa-text">
                <h2>Robotic Process Automation</h2>
                <p>
                    RPA streamlines tasks, integrates smoothly, enhances efficiency, and
                    boosts productivity, driving operational excellence and cost savings.
                </p>
            </div>


            <div className="rpa-card">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=349,h=261,fit=crop/AoPGlLRxpzcJbzB1/openart-image_0qq7xdhr_1727921635786_raw-m6LwLGoEOVULaOkP.jpg" alt="RPA Robot" className="rpa-img" />
                <div className="rpa-card-content">
                    <h3>RPA</h3>
                    <p>
                        From data entry and processing to workflow automation, our RPA
                        services optimize efficiency, reduce errors, and free up valuable
                        human resources to focus on higher-value tasks.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default RPAsection
