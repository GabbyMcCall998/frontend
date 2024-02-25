const offers = () => {
    return ( 
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h2>Offers For You</h2>
                <p>ONLY ON THE BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img className='img-offers' src={require ('./images/getty-removebg-preview (1) (1).png')} alt="" />
            </div>
        </div>
     );
}
 
export default offers;