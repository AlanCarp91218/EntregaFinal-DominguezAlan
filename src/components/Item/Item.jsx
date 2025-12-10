import "./Item.css"

export const Item = ({name, price, description, imageUrl, children, showDescription = true}) => (
  <div className="product-item">
    <img src={imageUrl} alt={name} />
    <h2>{name}</h2>
    <p>Precio: ${price}</p>
    {showDescription && <p>{description}</p>}
    {children}
  </div>
);