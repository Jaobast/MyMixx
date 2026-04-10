import './ShoppingCart.css'

type CartItem = {
  name: string
  price: number
  category: string
}

type ShoppingCartProps = {
  onClose: () => void
  cart: CartItem[]
  onRemove: (name: string) => void
}

function ShoppingCart({ onClose, cart, onRemove }: ShoppingCartProps) {

  const categories = [...new Set(cart.map(p => p.category))]

  const total = cart.reduce((sum, p) => sum + p.price, 0).toFixed(2)

  return (
    <div className="ShoppingCart">
      <div className="background" onClick={onClose}></div>
      <div className="cart">
        <img className='logo' src="/MyMixx/svg/logo.svg" alt="logo" />

        <div className='total'>
            <p>
                {total == "0.00" ? "Füge Produkte hinzu :D" : `Total: ${total} €`}
            </p>
        </div>

        <div className="everything">
            {categories.map(cat => (
            <div key={cat} className='category-container'>
                <p className='category-name'>{cat}</p>

                <div className="product-container">
                {cart.filter(p => p.category === cat).map(p => (
                    <div key={p.name} className='product'>
                        <div className="info">
                            <p className='name'>{p.name}</p>
                            <p className='price'>{p.price.toFixed(2)}€</p>
                        </div>
                    <button className='delete' onClick={() => onRemove(p.name)}>x</button>
                    </div>
                ))}
                </div>
            </div>
            ))}
        </div>

      </div>
    </div>
  )
}

export default ShoppingCart