// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Default from "../assets/default.png";
// import User from "../assets/user.png";
// import Story3 from "../assets/story3.jpg";
// import { FaRegHeart } from "react-icons/fa";
// import { PiChatCircleDots } from "react-icons/pi";
// import { MdCancel } from "react-icons/md";
// import ChatStory from "../Components/Chat/ChatStory";
// import InforStory from "../Components/Story/InfoStory";

// const storyImages = [
//   { id: 1, storyImg: Story3 },
//   { id: 2, storyImg: Story3 },
//   { id: 3, storyImg: Story3 },
//   { id: 4, storyImg: Story3 },
//   { id: 5, storyImg: Story3 },
//   { id: 6, storyImg: Story3 },
//   { id: 7, storyImg: Story3 },
//   { id: 8, storyImg: Story3 },
//   { id: 9, storyImg: Story3 },
//   { id: 10, storyImg: Story3 },
// ];

// const StoryDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [story, setStory] = useState(null);
//   const [isChatFormVisible, setIsChatFormVisible] = useState(false);
//   const [chatInput, setChatInput] = useState("");
//   const [isNavigationBlurred, setIsNavigationBlurred] = useState(false);

//   useEffect(() => {
//     const storiesData = {
//       1: {
//         id: 1,
//         name: "DucLe",
//         avatar: User,
//         time: "3 phút trước",
//         storyImg: storyImages[0].storyImg,
//         content: "Đây là nội dung chi tiết của bảng tin 1.",
//       },
//       2: {
//         id: 2,
//         name: "DucLe",
//         avatar: User,
//         time: "8 phút trước",
//         storyImg: storyImages[1].storyImg,
//         content: "Đây là nội dung chi tiết của bảng tin 2.",
//       },
//       3: {
//         id: 3,
//         name: "DucLe",
//         avatar: User,
//         time: "13 phút trước",
//         storyImg: storyImages[2].storyImg,
//         content: "Đây là nội dung chi tiết của bảng tin 3.",
//       },
//       4: {
//         id: 4,
//         name: "DucLe",
//         avatar: User,
//         time: "18 phút trước",
//         storyImg: storyImages[3].storyImg,
//         content: "Đây là nội dung chi tiết của bảng tin 4.",
//       },
//       5: {
//         id: 5,
//         name: "DucLe",
//         avatar: User,
//         time: "23 phút trước",
//         storyImg: storyImages[4].storyImg,
//         content: "Đây là nội dung chi tiết của bảng tin 5.",
//       },
//       6: {
//         id: 6,
//         name: "DucLe",
//         avatar: User,
//         time: "28 phút trước",
//         storyImg: storyImages[5].storyImg,
//         content: "Đây là nội dung chi tiết của bảng tin 6.",
//       },
//       7: {
//         id: 7,
//         name: "DucLe",
//         avatar: User,
//         time: "33 phút trước",
//         storyImg: storyImages[6].storyImg,
//         content: "Đây là nội dung chi tiết của bảng tin 7.",
//       },
//       8: {
//         id: 8,
//         name: "DucLe",
//         avatar: User,
//         time: "38 phút trước",
//         storyImg: storyImages[7].storyImg,
//         content: "Đây là nội dung chi tiết của bảng tin 8.",
//       },
//       9: {
//         id: 9,
//         name: "DucLe",
//         avatar: User,
//         time: "43 phút trước",
//         storyImg: storyImages[8].storyImg,
//         content: "Đây là nội dung chi tiết của bảng tin 9.",
//       },
//       10: {
//         id: 10,
//         name: "DucLe",
//         avatar: User,
//         time: "48 phút trước",
//         storyImg: storyImages[9].storyImg,
//         content: "Đây là nội dung chi tiết của bảng tin 10.",
//       },
//     };

//     const selectedStory = storiesData[id] || {
//       id,
//       name: "DucLe",
//       avatar: User,
//       time: "Không xác định",
//       storyImg: Default,
//       content: "Không tìm thấy nội dung cho bảng tin này.",
//     };
//     setStory(selectedStory);
//   }, [id]);

//   // Toggle chat form and navigation blur
//   const toggleChatForm = () => {
//     setIsChatFormVisible(!isChatFormVisible);
//     setIsNavigationBlurred(!isChatFormVisible);
//     setChatInput("");
//   };

//   return (
//     <div className="p-[20px] bg-[var(--color-gray)] flex-1 flex flex-col gap-3">
//       <div className="bg-white min-h-[500px] flex-1 p-[30px] rounded-[15px] flex justify-center items-center gap-0">
//         {/* Story */}
//         <div
//           className="flex flex-col items-start justify-between gap-[10px] p-4 w-full max-w-[600px] aspect-[3/4] rounded-[20px] shadow-md border border-gray-200 bg-cover bg-center text-white"
//           style={{
//             backgroundImage: `url(${story?.storyImg})`,
//           }}
//         >
//           {/* Info */}
//           <div className="relative w-full flex">
//             {!isChatFormVisible && (
//               <button
//                 className="absolute top-0 right-0 text-white hover:text-gray-50/80 text-4xl"
//                 onClick={() => navigate("/")}
//               >
//                 <MdCancel />
//               </button>
//             )}

//             {/* Story info */}
//             <InforStory
//               name={story?.name}
//               time={story?.time}
//               avatar={story?.avatar}
//             />
//           </div>

//           {/* Content and Actions */}
//           <div className="flex w-full text-base font-semibold text-black text-center">
//             {!isChatFormVisible ? (
//               <div className="flex w-full items-center justify-between gap-5">
//                 {/* Nội dung câu chuyện */}
//                 <div
//                   className="flex flex-1 justify-center rounded-[20px] px-2 py-2 h-20"
//                   style={{
//                     backgroundColor: "rgba(243, 244, 253, 0.8)",
//                   }}
//                 >
//                   <span className="self-center">{story?.content}</span>
//                 </div>

//                 {/* Nút hành động */}
//                 <div
//                   className="flex flex-col items-center gap-1 w-auto rounded-[20px] px-2 py-2 h-20"
//                   style={{
//                     backgroundColor: "rgba(243, 244, 253, 0.8)",
//                   }}
//                 >
//                   <button
//                     className="text-red-500 hover:text-red-600 text-3xl"
//                     onClick={() => console.log("Liked")}
//                   >
//                     <FaRegHeart />
//                   </button>
//                   <button
//                     className="text-black-500 hover:text-black-600 text-3xl"
//                     onClick={toggleChatForm}
//                   >
//                     <PiChatCircleDots />
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div className="w-full">
//                 <ChatStory />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StoryDetail;
