import React from "react";
import { assets } from "../assets/assets.js";

const MainBar = () => {
  return (
    <div className="flex bg-white text-black dark:bg-[#131619] dark:text-white flex-col justify-between w-full overflow-y-scroll h-[100vh]">
      <div className="bg-white text-black dark:bg-[#131619] dark:text-white  rounded-2xl mr-3 my-3">
        <div className="flex items-center justify-between gap-4 border-b border-gray-700 pb-4 p-6">
          <div className="flex-1 gap-1 flex flex-col">
            <h1 className="font-bold text-[20px]">Orbital Oddysey</h1>
            <p className="text-[#9B9C9E] text-[14px]">Marketing Campaign for a new TV series Launch</p>
          </div>
          <p>+4</p>
          <div className="flex gap-2 items-center">
            <img src={assets.share} alt="" />
            <p>Share</p>
          </div>
          <img src={assets.pencil_icon} alt="" />
        </div>
        <div className="flex gap-4 pl-6">
          <div className="flex justify-center items-center gap-2 p-6 border-b border-green-200 cursor-pointer">
            <img className="w-[15px] h-[15px]" src={assets.arificium_logo} alt="" />
            <p className="text-[14px]">Artificum</p>
          </div>
          <div className="flex items-center gap-2 p-6 cursor-pointer">
            <img className="w-[15px] h-[15px]" src={assets.chat_icon} alt="" />
            <p className="text-[14px]">Chat</p>
          </div>
          <div className="flex gap-2 p-6 items-center cursor-pointer">
            <img className="w-[15px] h-[15px]" src={assets.library_icon} alt="" />
            <p className="text-[14px]">Library</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col  justify-center items-center gap-16">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-bold text-[28px]">Innovation Starter Pack</h1>
          <p className="text-[16px] text-[#9B9C9E]">Kickstart your innovation process with our comprehensive selection of predefined prompts.</p>
        </div>

        <div className="grid grid-cols-4 gap-16 px-13">
          <div className="flex flex-col justify-center gap-2 items-center">
            <img className="rounded-full" src={assets.create_assets} alt="" />
            <h1 className="text-[18px] font-semibold text-center">Creative Assets</h1>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center p-4 rounded-2xl" style={{ background: "linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%)" }}>
                <p>UI wireframe</p>
                <img className="w-3 h-2" src={assets.arrow_icon} alt="" />
              </div>
              <div className="flex justify-between items-center p-4 rounded-2xl" style={{ background: "linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%)" }}>
                <p>UI wireframe</p>
                <img className="w-3 h-2" src={assets.arrow_icon} alt="" />
              </div>
              <div className="flex justify-between items-center p-4 rounded-2xl" style={{ background: "linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%)" }}>
                <p>UI wireframe</p>
                <img className="w-3 h-2" src={assets.arrow_icon} alt="" />
              </div>
              <div className="flex justify-between items-center p-4 rounded-2xl" style={{ background: "linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%)" }}>
                <p>UI wireframe</p>
                <img className="w-3 h-2" src={assets.arrow_icon} alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2 items-center">
            <img className="rounded-full" src={assets.create_assets} alt="" />
            <h1 className="text-[18px] font-semibold text-center">Creative Assets</h1>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center p-4 rounded-2xl" style={{ background: "linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%)" }}>
                <p>UI wireframe</p>
                <img className="w-3 h-2" src={assets.arrow_icon} alt="" />
              </div>
              <div className="flex justify-between items-center p-4 rounded-2xl" style={{ background: "linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%)" }}>
                <p>UI wireframe</p>
                <img className="w-3 h-2" src={assets.arrow_icon} alt="" />
              </div>
              <div className="flex justify-between items-center p-4 rounded-2xl" style={{ background: "linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%)" }}>
                <p>UI wireframe</p>
                <img className="w-3 h-2" src={assets.arrow_icon} alt="" />
              </div>
              <div className="flex justify-between items-center p-4 rounded-2xl" style={{ background: "linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%)" }}>
                <p>UI wireframe</p>
                <img className="w-3 h-2" src={assets.arrow_icon} alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2 items-center">
            <img className="rounded-full" src={assets.create_assets} alt="" />
            <h1 className="text-[18px] font-semibold text-center">Creative Assets</h1>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center p-4 rounded-2xl" style={{ background: "linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%)" }}>
                <p>UI wireframe</p>
                <img className="w-3 h-2" src={assets.arrow_icon} alt="" />
              </div>
              <div className="flex justify-between items-center p-4 rounded-2xl" style={{ background: "linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%)" }}>
                <p>UI wireframe</p>
                <img className="w-3 h-2" src={assets.arrow_icon} alt="" />
              </div>
              <div className="flex justify-between items-center p-4 rounded-2xl" style={{ background: "linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%)" }}>
                <p>UI wireframe</p>
                <img className="w-3 h-2" src={assets.arrow_icon} alt="" />
              </div>
              <div className="flex justify-between items-center p-4 rounded-2xl" style={{ background: "linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%)" }}>
                <p>UI wireframe</p>
                <img className="w-3 h-2" src={assets.arrow_icon} alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2 items-center">
            <img className="rounded-full" src={assets.create_assets} alt="" />
            <h1 className="text-[18px] font-semibold text-center">Creative Assets</h1>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center p-4 rounded-2xl" style={{ background: "linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%)" }}>
                <p>UI wireframe</p>
                <img className="w-3 h-2" src={assets.arrow_icon} alt="" />
              </div>
              <div className="flex justify-between items-center p-4 rounded-2xl" style={{ background: "linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%)" }}>
                <p>UI wireframe</p>
                <img className="w-3 h-2" src={assets.arrow_icon} alt="" />
              </div>
              <div className="flex justify-between items-center p-4 rounded-2xl" style={{ background: "linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%)" }}>
                <p>UI wireframe</p>
                <img className="w-3 h-2" src={assets.arrow_icon} alt="" />
              </div>
              <div className="flex justify-between items-center p-4 rounded-2xl" style={{ background: "linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%)" }}>
                <p>UI wireframe</p>
                <img className="w-3 h-2" src={assets.arrow_icon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-black dark:bg-[#131619] dark:text-white flex rounded-2xl mr-3 my-3 p-3 sm:p-6 items-center gap-4">
        <img className="cursor-pointer" src={assets.mic_icon} alt="" />
        <input className="flex-1 placeholder:text-[16px] py-3 outline-none focus:outline-none" type="text" name="" id="" placeholder="You can ask me anything! I am here to help." />
        <img className="cursor-pointer" src={assets.cart_icon} alt="" />
        <img className="cursor-pointer" src={assets.button_icon} alt="" />
      </div>
    </div>
  );
};

export default MainBar;
