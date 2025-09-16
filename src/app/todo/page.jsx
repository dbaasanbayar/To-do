
import { Add } from "../_components/todoInput" 

export default function Home() {
   
    return (
       <div className='flex justify-center pb-[594px] pt-15 bg-[#F3F4F6]'>
          <div className="flex flex-col py-6 px-4 items-center rounded-[6px] bg-[#FFF]">
            <div className="">
                <h2 className="text-[20px] font-[600] ">To-Do list</h2>
            </div>
            <div className="flex py-5 gap-1.5 ">
                <Add/> 
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
       </div>    
    )
}