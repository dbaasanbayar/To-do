export function Cards() {
    return ( <div className="flex flex-col py-6 px-4 m items-center w-[377px] h-[290px] rounded-[6px] bg-[#FFF]">
            <div className="">
                <h2 className="text-[20px] font-[600] ">To-Do list</h2>
            </div>
            <div className="flex py-5 gap-1.5">
                <input type="text" placeholder="Add a new task..." />
                <button className="w-[59px] h-[40px] bg-[#3C82F6] rounded-[6px]">Add</button>
            </div>
            <div className="flex gap-1.5 h-8 mb-8 ">
                <button className="w-[38px] bg-[#F3F4F6] rounded-[6px]">All</button>
                <button className="w-[60px] bg-[#F3F4F6] rounded-[6px]">Active</button>
                <button className="w-[87px] bg-[#F3F4F6] rounded-[6px]">Completed</button>
            </div>
            <div>
                <p className="mb-10 text-[#6B7280] text-[14px]">No tasks yet. Add one above!</p>
                </div>
            <div className='flex gap-1 text-[12px]'>
                <p>Powered by</p>
                <p>Pinecone academy</p>
            </div>
            </div>
    )
}