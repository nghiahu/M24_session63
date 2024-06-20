import React from 'react'
import { AiOutlineFontSize } from 'react-icons/ai'
import { IoCloseOutline } from 'react-icons/io5'
import { FaBold } from "react-icons/fa";
import { LiaItalicSolid } from 'react-icons/lia';
export default function FromAddPost() {
  return (
    <div className='outluneFrom'>
     <div className='fromPost'>
    <div className='formTitle'>
        <div className='Title'>Thêm mới bài viết</div>
        <div className='closeForm'><IoCloseOutline /></div>
    </div>
    <div className='textPost'>
        <label htmlFor="">Tên bài viết</label>
        <input type="text" />
    </div>
    <div className='textPost'>
        <label htmlFor="">Hình ảnh</label>
        <input type="text" />
    </div>
    <div className='textPost'>
        <label htmlFor="">Nội dung</label>
        <img src="public\image\Ảnh chụp màn hình 2024-06-20 063130.png" alt="" className='img'/>
        <textarea className='inpConten' placeholder='Nhập nội dung'></textarea>
        
    </div>
    <div className='formAddBtn'>
        <button className='resetBtn'>Làm mới</button>
        <button className='publishBtn'>Xuất bản</button>
    </div>
</div>   
    </div>
  )
}
