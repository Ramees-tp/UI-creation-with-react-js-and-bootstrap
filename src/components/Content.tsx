// import React from 'react'
import img1 from '../assets/images/OIP.jpeg'
import img2 from '../assets/images/watches.jpeg'
import img3 from '../assets/images/phone.jpeg'
import img4 from '../assets/images/books.jpeg'
import img5 from '../assets/images/gadgets.jpeg'
import img6 from '../assets/images/cloths.jpeg'
import img7 from '../assets/images/lap.jpeg'
import img8 from '../assets/images/trolly.jpeg'

function Content() {
  return (
    <div className='main'>
      <div className='card1'>
      <div className="card" >
  <img src={img1} className="card-img-top" ></img>
  <div className="card-body">
    <h5 className="card-title">Casual Shoe</h5>
    <p className="card-text">A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains.</p>
    <a href="#" className="btn btn-primary">Buy Now</a>
  </div>
</div>
      </div>

      <div className='card2'>
      <div className="card" >
  <img src={img2} className="card-img-top" alt=""></img>
  <div className="card-body">
    <h5 className="card-title">Watches</h5>
    <p className="card-text">A watch is a small clock carried or worn by a person. It makes it easy to see the time. It is also a fashion accessory for men and women, and.</p>
    <a href="#" className="btn btn-primary">Buy Now</a>
  </div>
</div>
      </div>

      <div className='card3'>
      <div className="card" >
  <img src={img3} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Smart Phones</h5>
    <p className="card-text">A smartphone is a portable computer device that combines mobile telephone functions and personal computing functions into.</p>
    <a href="#" className="btn btn-primary">Buy Now</a>
  </div>
</div>
      </div>

      <div className='card4'>
      <div className="card" >
  <img src={img4} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Books</h5>
    <p className="card-text">In this guide, Ill walk you through how to write a book description, provide you a template, and include good and bad book.</p>
    <a href="#" className="btn btn-primary">Buy Now</a>
  </div>
</div>
      </div>

      <div className='card5'>
      <div className="card" >
  <img src={img5} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Gadgets</h5>
    <p className="card-text">A gadget is a new, often expensive, and relatively unknown hardware device or accessory that makes your life or using another devic.</p>
    <a href="#" className="btn btn-primary">Buy Now</a>
  </div>
</div>
      </div>

      <div className='card6'>
      <div className="card" >
  <img src={img6} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Cloths</h5>
    <p className="card-text">Clothing also known as clothes, garments, dress, apparel, or attire is any item worn on the body. Typically, clothing is made of .</p>
    <a href="#" className="btn btn-primary">Buy Now</a>
  </div>
</div>
      </div>

      <div className='card7'>
      <div className="card" >
  <img src={img7} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Laptops</h5>
    <p className="card-text">A laptop computer or notebook computer, also known as a laptop or notebook for short, is a small, portable personal computer.</p>
    <a href="#" className="btn btn-primary">Buy Now</a>
  </div>
</div>

      </div>

      <div className='card8'>
      <div className="card" >
  <img src={img8} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Bags</h5>
    <p className="card-text">You can browse online and choose from the best trolley bags available. Select from top brands such as VIP, Aristocrat, Skybags, Safari, and Ame</p>
    <a href="#" className="btn btn-primary">Buy Now</a>
  </div>
</div>
      </div>
    </div>
  )
}

export default Content
