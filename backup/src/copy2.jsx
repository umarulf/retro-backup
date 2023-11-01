<div className="w-[1080px] h-[708px]">
<div className="section-1 bg-white w-[1080px] h-[122px] ">
  <h1 className=" text-neutral-700 not-italic font-semibold leading-normal text-2xl pl-[44px] pt-[44px]">Create Retrospective</h1>
  <div className="Tabs flex flex-col w-full">
    <ul className="Tabs-nav flex">
      <li
        className={` cursor-pointer ml-11 mt-3 pb-1.5  ${activeTab === 0 ? "text-neutral-700 border-b-2 border-black" : "text-neutral-400"}`}
        onClick={() => handleTabChange(0)}
      >
        General
      </li>
      <li
        className={`cursor-pointer ml-6 mt-3 pb-1.5 ${activeTab === 1 ? " text-neutral-700 border-b-2 border-black" : "text-neutral-400"}`}
        onClick={() => handleTabChange(1)}
      >
        Templates
      </li>
      <li
        className={`cursor-pointer ml-6 mt-3 pb-1.5  ${activeTab === 2 ? "= text-neutral-700 border-b-2 border-black" : "text-neutral-400"}`}
        onClick={() => handleTabChange(2)}
      >
        Options
      </li>
    </ul>
  </div>
  <img src={closeButton} alt="xhdj"  onClick={closeWindow} className="close-window-button absolute top-[24px] left-[1020px] cursor-pointer"/>
</div>


<div className="section-2 bg-stone-50 w-[1080px] h-[586px] ">
  <div className="create-button absolute left-[875px] top-[580px] ">
    <button className="w-[133px] h-14 cursor-pointer bg-emerald-400 text-white rounded-[10px] text-base font-medium border-none ">Create</button>
  </div>
</div>
</div>