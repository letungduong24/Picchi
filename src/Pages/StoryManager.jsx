import React from 'react'
import { MdFilterListAlt } from "react-icons/md";
import Pic_giang from '../assets/pic_giang.png'
import Pic_giang1 from '../assets/pic_giang1.png'
import SmallStory_giang from '../Components/Story/SmallStory_giang';


const StoryManager = () => {
  return (
    <div className='p-[20px] bg-(--color-gray) flex-1 flex flex-col gap-3'>

      <div className="topbar flex justify-between items-center">
        <p className='font-bold text-[25px] text-(--color-violet)'>Quản lý tin</p>
        <div className="filter bg-white px-[21px] py-[10px] flex gap-[10px] rounded-[20px] items-center">
          <p className='font-semibold text-(--color-violet) text-[15px] p-0 flex items-center leading-none'>Tất cả</p>
          <MdFilterListAlt className='font-semibold text-(--color-violet) text-[15px] leading-none'/>
        </div>
      </div>

      <div className="feed-wrapper grid-cols-5 grid gap-5 p-[30px] bg-white rounded-[20px]">
          <SmallStory_giang time={'3 phút trước'} storyImg={Pic_giang1} />
          <SmallStory_giang time={'4 tiếng trước'} storyImg={Pic_giang} />
          <SmallStory_giang time={'18 tiếng trước'} storyImg={Pic_giang1} />
          <SmallStory_giang time={'1 ngày trước'} storyImg={Pic_giang1} />
          <SmallStory_giang time={'1 ngày trước'} storyImg={Pic_giang1} />
          <SmallStory_giang time={'3 ngày trước'} storyImg={Pic_giang1} />
          <SmallStory_giang time={'4 ngày trước'} storyImg={Pic_giang1} />
          <SmallStory_giang time={'4 ngày trước'} storyImg={Pic_giang1} />
          <SmallStory_giang time={'5 ngày trước'} storyImg={Pic_giang1} />
          <SmallStory_giang time={'6 ngày trước'} storyImg={Pic_giang1} />
      </div>
    </div>
  )
}

export default StoryManager