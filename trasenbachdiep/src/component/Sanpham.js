import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import '../css/sanpham.css'
import MultiRangeSlider from "multi-range-slider-react"
// import axioProduct from '../api/mockapi/user'

function Sanpham({ renderProduct,onData}) {
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(505);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
 
  const HandleShow = (item,index) => {
    onData(item,index)
    console.log('đ',onData);
  }
  let product = [];
  product = renderProduct && renderProduct.length > 0 &&
    renderProduct.map((item,index) => {
      return (
        <Link to={'/ctsp1'} key={item.id} onClick={()=>HandleShow(item,index)}>
          <div className="card">
            <p className="icon">
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              (17)
            </p>
            <h4>New</h4>

            <img
              src={item.image}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">{item.tensp}</p>
              <p className="card-text2">
                {item.gia}<sub>VND</sub>
                <select>
                  <option value="">200g</option>
                  <option value="">300g</option>
                  <option value="">400g</option>
                  <option value="">700g</option>
                </select>
              </p>
            </div>
          </div>
        </Link>
      )
    })

  const checkProduct = () => {
    // product = renderProduct && renderProduct.length > 0 &&
    //   renderProduct.filter((item) => {
    //     if (item.loai === "Trà")
         

    //   })
  }
  return (
    <>


      <div className='product-intro'>
        <div className="banner">
          <img src="Pictures/san-pham/banner.png" alt="" />
          <h1>SẢN PHẨM</h1>
        </div>
        <div className="main">
          <div className="main-title">
            <p>
              <Link to={'/index'}>Trang chủ &gt; </Link>
              <Link to={'/sanpham'}>Sản phẩm</Link>

            </p>
            <h3>SẢN PHẨM</h3>
          </div>

          <hr />
          <div className='sort'>
            <select>
              <option>Thứ tự mặc định</option>
              <option>Giá thấp đến cao</option>
              <option>Giá cao đến thấp</option>
            </select>
          </div>
          <div className="product">
            <div className="categore">
              <h6>bộ lọc sản phẩm</h6>
              <h4>Loại sản phẩm</h4>
              <div >
                <input type="checkbox" id="traxanh" onClick={checkProduct} />
                <label htmlFor="traxanh">Trà</label>
              </div>

              <div>
                <input type="checkbox" id="olong" />
                <label htmlFor="olong">Tinh dầu</label>
              </div>
             
              <h4>Giá thành</h4>
              <div className="input">
                <MultiRangeSlider
                  min={0}
                  max={1000}
                  step={5}
                  minValue={minValue}
                  maxValue={maxValue}
                  onInput={(e) => {
                    handleInput(e);
                  }}
                />
                <p>giá {minValue} - {maxValue}</p>

              </div>
              
            </div>
            <div className="product-list">
              {product}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Sanpham