import all_products from "../all_productsdb";
import Item from "../item";

const RelatedProducts = () => {
    return ( 
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {all_products.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

                })}
            </div>
        </div>
     );
}
 
export default RelatedProducts;