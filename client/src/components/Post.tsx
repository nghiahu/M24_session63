import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './app.scss'
import Loanding from './Loanding';
import FromAddPost from './FromAddPost';
interface Post{
  id:number;
  title:string;
  image:string;
  created_at:string;
  status:boolean;
}
export default function Post() {
  const [posts,setPosts] = useState<Post[]>([])
  const [isLoaing,setIsLoaing] = useState<boolean>(true)
  const [openForm,setOpenForm] = useState<boolean>(false)

  function getData(){
    axios.get("http://localhost:8080/posts")
    .then((res)=>{
    setTimeout(()=>{
        setIsLoaing(false)
        setPosts(res.data)
    },2000)
    })
  }

  const handleOpenFrom=()=>{
    setOpenForm(true)
  }
  useEffect(()=>{
    getData();
    console.log(posts)
  },[])
  return (
    <>
    {openForm? <FromAddPost/> : <></>}
    <div className='outLine'>
      <div className='managerPostTop'>
        <div className='managerPostTopInp'>
          <input className='inpSearch' type="text" placeholder='Nhập từ khóa tìm kiếm'/>
          <select className='inpSelect' name="" id="">
            <option value="">Lọc bài viết</option>
          </select>
        </div>
      <button className='addPost' onClick={handleOpenFrom}>Thêm mới bài viết</button>
      </div>

      <table className='managerPostTable'>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tiêu đề</th>
            <th>Hình ảnh</th>
            <th>Ngày viết</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
        {isLoaing? <Loanding></Loanding> : ""}
          {posts.map((item,index)=>{
            return  <tr>
              <td className='tdF'>{index + 1}</td>
              <td>{item.title}</td>
              <td className='tdimg'><img src={item.image} alt="" className='imgPost'/></td>
              <td>{item.created_at}</td>
              <td>{item.status ? <button className='publish'>Đã xuất bản</button> : <button className='unpublished'>Ngừng xuất bản</button>}</td>
              <td>
                <div className='postFuncion'>
                <button className='btnBan'>Chặn</button>
                <button className='btnEdit'>Sửa</button>
                <button className='btnDel'>Xóa</button>
                </div>
              </td>
            </tr>

          })}
        </tbody>
      </table>
    </div>
    </>
  )
}
