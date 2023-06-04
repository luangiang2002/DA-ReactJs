import React from 'react'
import '../css/lienhe.css'
function Lienhe() {
  return (
    <div className='contact'>
      <div className="main">
        <img src="Pictures/lien-he/banner.jpg" alt="" />
        <div className="hotline">
          <form action="#" method="post">
            <h1>Liên hệ với chúng tôi</h1>
            <input type="text" placeholder="Họ tên" required="" /> <br />
            <input type="email" placeholder="Email" required="" />
            <br />
            <input type="tel" placeholder="Số điện thoại" required="" />
            <br />
            <input type="text" placeholder="Nội dung" required="" />
            <br />
            <input type="submit" defaultValue="Gửi" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Lienhe