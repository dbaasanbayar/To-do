
import { TaskInput } from "../_components/Input" 

export default function Home() {
   
    return (
       <div className='flex justify-center pb-[594px] pt-15 bg-[#F3F4F6]'>
          <div className="flex flex-col py-6 px-4 items-center rounded-[6px] bg-[#FFF]">
                <h2 className="text-[20px] font-[600] ">To-Do list</h2>
            <div className="flex py-5 gap-1.5 ">
            <TaskInput />
            </div>
            </div>
       </div>    
    )
}