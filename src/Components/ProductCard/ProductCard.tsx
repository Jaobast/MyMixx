import { useState } from 'react'
import './ProductCard.css'

type ProductCardProps= {
    name: string,
    price: number,
    amount: number,
    img: string,
    liquid?: boolean,
    category: string,
    onAdd: (item: { name: string; price: number; category: string }) => void
    onRemove: (name: string) => void
}

function ProductCard({name, price, amount, img, liquid, onAdd, onRemove, category}: ProductCardProps) {

    const [portion, setPortion] = useState(1)

    const [added, setAdded] = useState(false)

    function addPortion(){
        if (portion < (3)) {
            setPortion(portion + 1)
        }
    }

    function deletePortion(){
        if (portion > (1)) {
            setPortion(portion - 1)
        }
    }

    function toggleProduct() {
    if (!added) {
        setAdded(true)
        onAdd({ name, price, category })
    } else {
        setAdded(false)
        onRemove(name)
    }
    }


  return (
    <div className={added ? 'added ProductCard' : 'ProductCard'}>
        <h3>{name}</h3>
        <img src={img} alt={name} />
        <div className='info'>
            <p className='amount'>
                {amount * portion}
                {liquid? " ml" : " g"}
            </p>
            <p className='price'>
                {(price * portion).toFixed(2)}
                €
            </p>
        </div>
        <div className="button-container">
            <div className="portion">
                <button className='minus' onClick={deletePortion}> - </button>
                <p>{portion} {portion >1? "Portionen" : "Portion"}</p>
                <button className='plus' onClick={addPortion}> + </button>
            </div>
            <button className={added ? 'delete' : 'add'} onClick={toggleProduct}>
                {added ? 'entfernen' : 'hinzufügen'}
            </button>
        </div>
    </div>
  )
}

export default ProductCard