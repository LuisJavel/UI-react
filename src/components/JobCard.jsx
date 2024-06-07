import { AiFillAmazonCircle } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

const JobCard = () => {
  return (
    <div className="w-[400px] p-6 bg-white rounded-xl space-y-10">
        <div className="flex justify-between items-center">
            <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="" 
            className="w-16 h-16 p-2 rounded-full border"/>
            <button className="flex items-center space-x-2 px-4 py-2 boder rounded-md">
                <p>Save</p>
                <AiFillAmazonCircle size={14} /> <FaReact />
            </button>
        </div>
        <div className="space-y-4">
            <h1>
                <span className="text-2xl font-semibold">Javier</span>
                <span className="text-xs text-gray-400"> 6 de agos</span>
            </h1>
            <h1 className="text-3xl font-semibold">UI/UX Diseño</h1>
            <div className="flex space-x-5">
                <button className="px-5 py-2 rounded-md bg-gray-100 font-semibold">Contanto</button>
                <button className="px-5 py-2 rounded-md bg-gray-100 font-semibold">Remoto</button>
            </div>
        </div>
        <div className="pt-6 border-t flex justify-between items-center">
            <div>
                <h1 className="text-xl font-bold">$100/hr</h1>
                <p className="text-sm text-gray-500">Ecuador - Quito</p>
            </div>
            <button className="px-5 py-2 rounded-md bg-black text-white cursor-pointer">Salasaka</button>
        </div>
    </div>

  )
}

export default JobCard