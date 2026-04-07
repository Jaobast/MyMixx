import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import type { SwiperRef } from 'swiper/react'
import { useState, useRef } from 'react'
import './Choice.css'
import './Swiper.css'

import products from '../../Components/Products.json'
import ProductCard from '../../Components/ProductCard/ProductCard'

const categories = ['basis', 'fruechte', 'suess', 'nuesse', 'superfood', 'fluessigkeit']


function Choice() {
  const [category, setCategory] = useState('basis')

  const swiperRef = useRef<SwiperRef>(null)

  function changeCategory(cat: string) {
    setTimeout(() => {
      setCategory(cat)
      swiperRef.current?.swiper.slideTo(0)
    }, 300)
  }

  return (
    <div className="Choice">
      
      <div className="category">
        {categories.map((cat) => (
          <button
            key={cat}
            className={category === cat ? 'active' : ''}
            onClick={() => changeCategory(cat)}
          >
            {cat}
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
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Choice