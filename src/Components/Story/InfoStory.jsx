import React from "react";
import { IoTimeOutline } from "react-icons/io5";

const InforStory = ({ name, time, avatar }) => {
  return (
    <div className="bg-cover bg-center  aspect-[3/4]">
      <div className="w-44 h-65 flex items-start">
        <div className="bg-[var(--color-gray)] w-full rounded-[60px] h-[20%] flex items-center ">
          <div className="flex gap-2 h-full w-full items-center">
            <img src={avatar} className="h-full rounded-full px-[2px] py-[2px]" alt={name} />
            <div className="flex flex-col items-start gap-1">
              <p className="leading-none font-bold text-[var(--color-violet)]">
                {name}
              </p>
              <p className="leading-none flex items-center gap-0.5 text-[var(--color-violet)]">
                {time} <IoTimeOutline />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InforStory;
