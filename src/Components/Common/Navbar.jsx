import React from 'react'
import { NavLink } from 'react-router-dom'
import User from '../../assets/user.png'
const Navbar = () => {
  return (
    <div className='px-[25px] py-[10px] flex justify-between h-15 items-center'>
      <div className="brand text-3xl font-bold text-(--color-violet)">Picchi</div>
      <div className="menu flex items-center font-bold gap-[15px] text-(--color-violet)">
        <NavLink className={({ isActive }) => (isActive ? 'border-b-3' : '')} to='/'>Bảng tin</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'border-b-3' : '')} to='/create-story'>Đăng tin</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'border-b-3' : '')} to='/storymanager'>Quản lý tin</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'border-b-3' : '')} to='/friend'>Bạn bè</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'border-b-3' : '')} to='/grid'>Lưới ảnh</NavLink>
        <NavLink>Cài đặt</NavLink>
      </div>
      <div className="profile h-full flex font-bold items-center gap-[10px]">
        <img src={User} className='h-full' alt="" />
        <p className='text-(--color-violet)'>User</p>
      </div>
    </div>
  )
}

export default Navbar