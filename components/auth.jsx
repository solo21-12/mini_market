import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { motion } from "framer-motion"
const Auth = () => {

  return (
    <div>
      <p className=' text-center  my-2'>Or </p>
      <div className=' flex flex-col gap-2'>
        <motion.div className=' flex flex-row gap-2 text-base  bg-gray-300 text-black h-8 justify-center rounded-lg'
          whileHover={{ scale: 1.1, backgroundColor: "red", color: "white" }}
          transition={{ duration: 1 }}>
          <p >Sign up using Google</p>
          <FcGoogle className=' text-base mt-2' />
        </motion.div>
        <motion.div className=' flex flex-row gap-2 text-base  bg-gray-300 text-black h-8 justify-center rounded-lg'
          whileHover={{ scale: 1.1, backgroundColor: "blue", color: "white" }}
          transition={{ duration: 1 }}>
          <p >Sign up using Facebook</p>
          <BsFacebook className=' text-base mt-2 text-blue-400' />
        </motion.div>
        <motion.div className=' flex flex-row gap-7 text-base  bg-gray-300 text-black h-8 justify-center rounded-lg'
        whileHover={{ scale: 1.1, backgroundColor: "black" ,color:"white"}}
        transition={{ duration: 1 }}>
          <p >Sign up using Github </p>
          <BsGithub className=' text-base mt-2 text-teal-800' />
        </motion.div>
      </div>
    </div>
  );
}

export default Auth;