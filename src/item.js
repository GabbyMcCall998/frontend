const Item = (props) => {
    return ( 
        <div className="item">
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    Ghc {props.new_price}
                </div>

                <div className="item-price-old">
                    Ghc {props.old_price }
                </div>
            </div>

        </div>

     );
}
 
export default Item;