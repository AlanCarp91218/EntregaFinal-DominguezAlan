import { Item } from "../Item/Item"
import { Count } from "../Count/Count"
import { useCartContext } from "../../context/CartContext/useCartContext"
import './ItemDetail.css'

export const ItemDetail = ({detail}) => {
  const {addItem} = useCartContext()

  const handleAdd = (quantity) => {
    addItem({...detail, quantity})
  }

  return (
    <div className="container-detail">
      <h2>Detalle del producto:</h2>
      <Item {...detail} showDescription={false}>
      <p>{detail.info}</p>
      <Count btnText={"Agregar al carrito"} onConfirm={handleAdd} className="btn agregar"/>
    </Item>
    </div>

  )
}

