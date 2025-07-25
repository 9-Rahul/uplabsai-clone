import React from 'react'
import '../styles/DataAnalytics.css'
const DataAnalytics = () => {
    return (
        <section className="data-analytics-container">
            <div className="analytics-card">
                <img
                    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=349,h=270,fit=crop/AoPGlLRxpzcJbzB1/data-analytics-A3QwQjE2V0T53zz3.jpg"
                    alt="Predictive Analytics"
                    className="card-image"
                />
                <div className="card-content">
                    <h3>Predictive Analytics</h3>
                    <p>
                        Using advanced predictive analytics, we transform data into actionable insights,
                        forecasting trends to enhance decision-making, efficiency, and business growth.
                    </p>
                </div>
            </div>

            <div className="analytics-card">
                <img
                    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=348,h=273,fit=crop/AoPGlLRxpzcJbzB1/untitled-d95gvp8qBKUzOrMW.png"
                    alt="Video Analytics"
                    className="card-image"
                />
                <div className="card-content">
                    <h3>Video Analytics</h3>
                    <p>
                        Through advanced video analytics, we derive actionable insights from visual data,
                        improving decision-making and operational efficiency with precision.
                    </p>
                </div>
            </div>

            <div className="analytics-description">
                <h2>Data Analytics</h2>
                <p>
                    Utilizing advanced predictive analytics and video analytics, we convert raw data into
                    actionable insights. These insights drive smarter decision-making, enhance efficiency,
                    reveal new opportunities, and propel your business growth.
                </p>
            </div>
        </section>
    )
}

export default DataAnalytics
