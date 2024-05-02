 const footer = () => {
    return ( 
        <div className="footer">
            <div className="footer-logo">
            <p>SHOPPER</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">

                <div className="footer-icon-container">
                <img className="icon" src={require ('./images/icons8-whatsapp-144.png')} alt="whatsapp logo" />
                </div>

                <div className="footer-icon-container">
                <img className="icon" src={require ('./images/icons8-instagram-144.png')} alt="instagram logo" />
                </div>

                <div className="footer-icon-container">
                <img className="icon" src={require ('./images/icons8-facebook-144.png')} alt="facebook logo" />
                </div>

            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Right Reserved </p>
            </div>
        </div>
     );
}
 
export default footer;