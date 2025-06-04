import React from 'react'
import { MdFilterListAlt } from "react-icons/md";
import Default from '../assets/default.png'
import User from '../assets/user.png'
import SmallStory from '../Components/Story/SmallStory';


const Feed = () => {
  return (
    <div className='p-[20px] bg-(--color-gray) flex-1 flex flex-col gap-3'>
      <div className="topbar flex justify-between items-center">
        <p className='font-bold text-[25px] text-(--color-violet)'>Bảng tin</p>
        <div className="filter bg-white px-[21px] py-[10px] flex gap-[10px] rounded-[20px] items-center">
          <p className='font-semibold text-(--color-violet) text-[15px] p-0 flex items-center leading-none'>Tất cả</p>
          <MdFilterListAlt className='font-semibold text-(--color-violet) text-[15px] leading-none'/>
        </div>
      </div>

      <div className="feed-wrapper grid-cols-5 grid gap-5 p-[30px] bg-white rounded-[20px]">
          <SmallStory name={'User'} avatar={User} time={'3 phút trước'} storyImg={Default} />
          <SmallStory name={'User'} avatar={User} time={'3 phút trước'} storyImg={Default} />
          <SmallStory name={'User'} avatar={User} time={'3 phút trước'} storyImg={Default} />
          <SmallStory name={'User'} avatar={User} time={'3 phút trước'} storyImg={Default} />
          <SmallStory name={'User'} avatar={User} time={'3 phút trước'} storyImg={Default} />
          <SmallStory name={'User'} avatar={User} time={'3 phút trước'} storyImg={Default} />
          <SmallStory name={'User'} avatar={User} time={'3 phút trước'} storyImg={Default} />
          <SmallStory name={'User'} avatar={User} time={'3 phút trước'} storyImg={Default} />
          <SmallStory name={'User'} avatar={User} time={'3 phút trước'} storyImg={Default} />
          <SmallStory name={'User'} avatar={User} time={'3 phút trước'} storyImg={Default} />


      </div>
    </div>
  )
}

export default Feed