import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import type { SwiperRef } from 'swiper/react'
import { useState, useRef } from 'react'
import './Choice.css'
import './Swiper.css'

import products from '../../Components/Products.json'
import ProductCard from '../../Components/ProductCard/ProductCard'
import Pattern from '../../Components/Pattern/Pattern'
import ShoppingCart from '../../Components/ShoppingCart/ShoppingCart'

const categories = ['basis', 'fruechte', 'suess', 'nuesse', 'superfood', 'fluessigkeit']

const categoriesButton = ['Basis', 'Früchte', 'Süßigkeit', 'Nüsse', 'Superfood', 'Flüssigkeit']


function Choice() {
  const [category, setCategory] = useState('basis')

  const [cartOpen, setCartOpen] = useState(false)

  const swiperRef = useRef<SwiperRef>(null)

  function changeCategory(cat: string) {
    setTimeout(() => {
      setCategory(cat)
      swiperRef.current?.swiper.slideTo(0)
    }, 300)
  }

  type CartItem = {
    name: string
    price: number
    category: string
  }

  const [cart, setCart] = useState<CartItem[]>([])

  function addToCart(item: CartItem) {
    setCart(prev => [...prev, item])
  }

  function removeFromCart(name: string) {
    setCart(prev => prev.filter(p => p.name !== name))
  }

  return (
    <div className="Choice">

      {cartOpen && (
        <ShoppingCart
          onClose={() => setCartOpen(false)}
          cart={cart}
          onRemove={removeFromCart}
        />
      )}

      <div className="category">
        {categories.map((cat, index) => (
          <button
            key={cat}
            className={category === cat ? 'active' : ''}
            onClick={() => changeCategory(cat)}
          >
            {categoriesButton[index]}
          </button>
        ))}
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        spaceBetween={16}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1080: { slidesPerView: 4 },
          2000: { slidesPerView: 5 }
        }}
      >
        {products[category as keyof typeof products].map((product) => (
          <SwiperSlide key={product.name}>
            <ProductCard
              name={product.name}
              amount={product.amount}
              price={product.price}
              img={product.img}
              liquid={product.liquid}
              category={category}
              onAdd={(item) => addToCart(item)}
              onRemove={(name) => removeFromCart(name)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="button-bottom">
        <button className='cart' onClick={() => setCartOpen(!cartOpen)}>
          {
            cartOpen? "Zurück" : "MyMixx"
          }
        </button>
        <button className='next'>Weiter</button>
      </div>

      <Pattern/>
    </div>
  )
}

export default Choice