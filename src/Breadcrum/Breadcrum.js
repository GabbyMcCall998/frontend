import arrow_icon from '../images/arrow-point.png';

const Breadcrumb = (props) => {
  const { product } = props;

  // Add a null check for product before accessing properties
  if (!product) {
    return null; // or display a loading state, error message, or fallback content
  }

  return ( 
    <div className="breadcrumb">
      Home <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrumb;
