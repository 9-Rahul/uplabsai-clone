import React from 'react'
import '../styles/AIagentsSection.css'
const AIagentsSection = () => {
    return (
        <section className='aiAgents-container'>
            <div className="aiAgents-left">
                <h2>AI Agents</h2>
                <p>
                    Our advanced Voice and Text AI Agents automate your sales and customer
                    service processes, working for you 24/7. They enhance user experiences,
                    save you time, and reduce operational costs—helping you earn and save
                    money
                </p>
            </div>

            <div className="aiAgents-cards">
                <div className="ai-card">
                    <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=264,fit=crop/AoPGlLRxpzcJbzB1/openart-image_sjaj9ma4_1727919620345_raw-mePvPEoLV5u6vj0a.jpg" alt="Text AI" />

                    <div className="ai-card-content">
                        <h3>Text AI Agents</h3>
                        <p>
                            Text AI agents provide efficient and personalized communication
                            24/7, handle multiple interactions simultaneously, offer valuable
                            insights, automate tasks, integrate seamlessly, and continually
                            improve performance, enhancing operational efficiency and customer
                            satisfaction
                        </p>
                    </div>
                </div>


                <div className="ai-card">
                    <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=264,fit=crop/AoPGlLRxpzcJbzB1/openart-image_libknwvf_1727919802815_raw-AVLpL8elgXiKbaqr.jpg" alt="Voice AI" />

                    <div className="ai-card-content">
                        <h3>Voice AI Agents</h3>
                        <p>
                            Voice AI agents offer natural, 24/7 customer interactions, handling
                            inquiries efficiently, personalizing user experiences, providing
                            valuable insights, and ensuring consistent service quality and
                            scalability for enhanced customer satisfaction.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AIagentsSection
