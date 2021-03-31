import { AiFillGithub, AiFillProject, AiOutlineMail } from 'react-icons/ai';
import { SiQiita } from 'react-icons/si';
import { BsFillPersonFill } from 'react-icons/bs';

const Sidebar = () => {
  return (
    <div>
      <img 
        src="https://pbs.twimg.com/profile_images/1336930218510991361/fpiM0QyN_400x400.jpg" 
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />

      <a 
        className="flex items-center justify-center px-2 py-2 my-2 bg-gray-100 rounded-full cursor-pointer"
        href=""
        download="name">
          <BsFillPersonFill className="mx-1"/>
          Kobayashi Kai
      </a>
      {/* <a 
        className="flex items-center justify-center px-2 py-2 my-2 bg-gray-100 rounded-full cursor-pointer"
        href=""
        download="name">
          <AiFillProject className="mx-1"/>
          Project
      </a> */}
      <a 
        className="flex items-center justify-center px-2 py-2 my-2 bg-gray-100 rounded-full cursor-pointer"
        href=""
        download="name">
          <AiFillGithub className="mx-1"/>
          Git hub
      </a>
      <a 
        className="flex items-center justify-center px-2 py-2 my-2 bg-gray-100 rounded-full cursor-pointer"
        href=""
        download="name">
          <SiQiita className="mx-1"/>
          Qiita
      </a>
      <a 
        className="flex items-center justify-center px-2 py-2 my-2 bg-gray-100 rounded-full cursor-pointer"
        href=""
        download="name">
          <AiOutlineMail className="mx-1"/>
          Contact
      </a>

      <button className="bg-gradient-to-r from-blue-600 to-blue-300 w-8/12 rounded-fullb shadow border-blue-500 text-white rounded-full px-2 py-2 hover:text-black">Toggle Theme</button>
    </div>

    
  )
}

export default Sidebar;