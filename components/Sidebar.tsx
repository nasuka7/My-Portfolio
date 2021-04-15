import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { IoIosCloudyNight } from 'react-icons/io'
import { SiQiita } from 'react-icons/si';
import { BsFillPersonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes'
// import Image from 'next/image';

const Sidebar = () => {
  const { theme, setTheme } = useTheme()
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  } 

  return (
    <>
      <img src="https://pbs.twimg.com/profile_images/1336930218510991361/fpiM0QyN_400x400.jpg" 
        alt="avatar"
        className="w-32 h-32 mx-auto border rounded-full" />
      {/* <Image 
        height="128px"
        width="128px"
        src="https://pbs.twimg.com/profile_images/1336930218510991361/fpiM0QyN_400x400.jpg" 
        alt="avatar"
        className="mx-auto border rounded-full"
      /> */}

      <p className="text-xl my-5 font-bold">Kobayashi Kai</p>
      <a 
        className="flex items-center justify-center px-2 py-2 my-2 bg-gray-100 dark:bg-dark-200 rounded-full cursor-pointer"
        href="/"
      >
          <BsFillPersonFill className="mx-1"/>
          Home
      </a>
      <a 
        className="flex items-center justify-center px-2 py-2 my-2 bg-gray-100 dark:bg-dark-200 rounded-full cursor-pointer"
        href="https://github.com/nasuka7"
      >
          <AiFillGithub className="mx-1"/>
          Git hub
      </a>
      {/* <a 
        className="flex items-center justify-center px-2 py-2 my-2 bg-gray-100 dark:bg-dark-200 rounded-full cursor-pointer"
        href="https://qiita.com/n4suka7"
      >
          <SiQiita className="mx-1"/>
          Qiita
      </a> */}
      {/* <a 
        className="flex items-center justify-center px-2 py-2 my-2 bg-gray-100 dark:bg-dark-200 rounded-full cursor-pointer"
        href=""
      >
          <AiOutlineMail className="mx-1"/>
          Contact
      </a> */}

      <div className="flex items-center justify-center">
        <button 
          onClick={ changeTheme }
          className="flex items-center justify-around px-2 py-2 my-2 bg-gradient-to-r from-blue-600 to-blue-300 rounded-full border-blue-500 text-white hover:text-black"
        >
            <IoIosCloudyNight className="mx-1"/>
            Toggle theme
        </button>
      </div>
    </>
  );
};

export default Sidebar;