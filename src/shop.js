import Hero from "./hero";
import Popular from "./popular";
import Offers from "./offers";
import NewCollection from "./NewCollection";
import NewsLetter from "./NewsLetter";




const shop = () => {
    return ( 
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollection/>
            <NewsLetter/>
       </div>
     );
}
 
export default shop;