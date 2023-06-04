import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/sanpham.css'
import MultiRangeSlider from "multi-range-slider-react";
import axioProduct from '../api/mockapi/user'

function Sanpham() {
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  const [listUser, setListUser] = useState([]);
 
  useEffect(() => {
      getAllUser()
  }, [])
  const getAllUser = async () => {
      const resp = await axioProduct.get('product');
      setListUser(resp.data)
  }
  console.log(getAllUser);
  return (
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
            <div>
              <input type="checkbox" id="traxanh" />
              <label htmlFor="traxanh">Trà xanh Thái Nguyên</label>
            </div>
            <div>
              <input type="checkbox" id="olong" />
              <label htmlFor="olong">Trà Ô long</label>
            </div>
            <div>
              <input type="checkbox" id="sen" />
              <label htmlFor="sen">Trà sen</label>
            </div>
            <div>
              <input type="checkbox" id="tralai" />
              <label htmlFor="tralai">Trà lài</label>
            </div>
            <div>
              <input type="checkbox" id="thaoduoc" />
              <label htmlFor="thaoduoc">Trà thảo dược</label>
            </div>
            <div>
              <input type="checkbox" id="dungcu" />
              <label htmlFor="dungcu">Dụng cụ pha trà</label>
            </div>
            <div>
              <input type="checkbox" id="nuoc" />
              <label htmlFor="nuoc">Nước pha trà</label>
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
            <h4>Thương hiệu</h4>
            <div>
              <input type="checkbox" id="tancuong" />
              <label htmlFor="tancuong">Trà Tân Cương Xanh</label>
            </div>
            <div>
              <input type="checkbox" id="tayho" />
              <label htmlFor="tayho">Trà Sen Tây Hồ</label>
            </div>
            <div>
              <input type="checkbox" id="loctan" />
              <label htmlFor="loctan">Trà Lộc Tần</label>
            </div>
          </div>
          <div className="product-list">
          
            <Link to={'/ctsp1'}>
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
                src="Pictures/san-pham/sp1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Trà san tuyết</p>
                <p className="card-text2">
                  50.000 <sub>VND</sub>
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
            <div className="card">
              <p className="icon">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                (27)
              </p>
              <h4>New</h4>
              <img
                src="Pictures/san-pham/sp2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Trà ooLong</p>
                <p className="card-text2">
                  70.000 <sub>VND</sub>
                  <select>
                    <option value="">200g</option>
                    <option value="">300g</option>
                    <option value="">400g</option>
                    <option value="">700g</option>
                  </select>
                </p>
              </div>
            </div>
            <div className="card">
              <p className="icon">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                (37)
              </p>
              <h4>New</h4>
              <img
                src="Pictures/san-pham/sp3.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Trà Búp</p>
                <p className="card-text2">
                  70.000 <sub>VND</sub>
                  <select>
                    <option value="">200g</option>
                    <option value="">300g</option>
                    <option value="">400g</option>
                    <option value="">700g</option>
                  </select>
                </p>
              </div>
            </div>
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
                src="Pictures/san-pham/sp1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Trà san tuyết</p>
                <p className="card-text2">
                  50.000 <sub>VND</sub>
                  <select>
                    <option value="">200g</option>
                    <option value="">300g</option>
                    <option value="">400g</option>
                    <option value="">700g</option>
                  </select>
                </p>
              </div>
            </div>
            <div className="card">
              <p className="icon">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                (27)
              </p>
              <h4>New</h4>
              <img
                src="Pictures/san-pham/sp2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Trà ooLong</p>
                <p className="card-text2">
                  70.000 <sub>VND</sub>
                  <select>
                    <option value="">200g</option>
                    <option value="">300g</option>
                    <option value="">400g</option>
                    <option value="">700g</option>
                  </select>
                </p>
              </div>
            </div>
            <div className="card">
              <p className="icon">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                (37)
              </p>
              <h4>New</h4>
              <img
                src="Pictures/san-pham/sp3.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Trà Búp</p>
                <p className="card-text2">
                  70.000 <sub>VND</sub>
                  <select>
                    <option value="">200g</option>
                    <option value="">300g</option>
                    <option value="">400g</option>
                    <option value="">700g</option>
                  </select>
                </p>
              </div>
            </div>
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
                src="Pictures/san-pham/sp1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Trà san tuyết</p>
                <p className="card-text2">
                  50.000 <sub>VND</sub>
                  <select>
                    <option value="">200g</option>
                    <option value="">300g</option>
                    <option value="">400g</option>
                    <option value="">700g</option>
                  </select>
                </p>
              </div>
            </div>
            <div className="card">
              <p className="icon">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                (27)
              </p>
              <h4>New</h4>
              <img
                src="Pictures/san-pham/sp2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Trà ooLong</p>
                <p className="card-text2">
                  70.000 <sub>VND</sub>
                  <select>
                    <option value="">200g</option>
                    <option value="">300g</option>
                    <option value="">400g</option>
                    <option value="">700g</option>
                  </select>
                </p>
              </div>
            </div>
            <div className="card">
              <p className="icon">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                (37)
              </p>
              <h4>New</h4>
              <img
                src="Pictures/san-pham/sp3.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Trà Búp</p>
                <p className="card-text2">
                  70.000 <sub>VND</sub>
                  <select>
                    <option value="">200g</option>
                    <option value="">300g</option>
                    <option value="">400g</option>
                    <option value="">700g</option>
                  </select>
                </p>
              </div>
            </div>
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
                src="Pictures/san-pham/sp1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Trà san tuyết</p>
                <p className="card-text2">
                  50.000 <sub>VND</sub>
                  <select>
                    <option value="">200g</option>
                    <option value="">300g</option>
                    <option value="">400g</option>
                    <option value="">700g</option>
                  </select>
                </p>
              </div>
            </div>
            <div className="card">
              <p className="icon">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                (27)
              </p>
              <h4>New</h4>
              <img
                src="Pictures/san-pham/sp2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Trà ooLong</p>
                <p className="card-text2">
                  70.000 <sub>VND</sub>
                  <select>
                    <option value="">200g</option>
                    <option value="">300g</option>
                    <option value="">400g</option>
                    <option value="">700g</option>
                  </select>
                </p>
              </div>
            </div>
            <div className="card">
              <p className="icon">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                (37)
              </p>
              <h4>New</h4>
              <img
                src="Pictures/san-pham/sp3.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Trà Búp</p>
                <p className="card-text2">
                  70.000 <sub>VND</sub>
                  <select>
                    <option value="">200g</option>
                    <option value="">300g</option>
                    <option value="">400g</option>
                    <option value="">700g</option>
                  </select>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Sanpham