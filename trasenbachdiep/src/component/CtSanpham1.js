import React from 'react'
import { Link } from 'react-router-dom'
import '../css/CtSanpham1.css'
function CtSanpham1() {
    return (
        <div className='product-details'>
            <div>
                <div className='product'>
                    <Link to={'/'}>Trang chủ &gt;</Link>
                    <Link to={'/sanpham'}>Sản phẩm &gt;</Link>
                    <Link to={'/chsp1'}>Chi tiết sản phẩm</Link>
                </div>
                <div className='item'>
                    <div>
                        <img src="Pictures/chitietsanpham/Bac.png" alt="" />
                    </div>
                    <div className='title'>
                        <h1>Tinh dầu bạc hà</h1>
                        <p className="icon">
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <span>0 đánh giá</span>
                        </p>
                        <p className='dola'>
                            <span>170,000 <sub>VND</sub></span>
                            <select>
                                <option>10ml</option>
                            </select>
                        </p>
                    </div>
                </div>
            </div>
           
                <h1>Sản phẩm liên quan</h1>
            
            <div className='product-list'>
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
            </div>
        </div>

    )
}

export default CtSanpham1