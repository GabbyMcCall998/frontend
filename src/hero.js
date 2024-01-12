const Hero = () => {
    return ( 
        <div className="hero">

            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new </p>
                        <div style={{ fontSize: '4em' }}>👋</div>

                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                    <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={require ('./images/right-arrow-7359 (1).png')} alt="" />
            </div>
                </div>
            </div>
            
            <div className="hero-right">
                 <img className="" src={require ('./images/profile.png')} alt="" />
            </div>
        </div>
       
     );
}
 
export default Hero;