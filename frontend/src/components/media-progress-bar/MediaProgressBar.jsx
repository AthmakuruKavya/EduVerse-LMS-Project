// import React, { useEffect, useState } from 'react'
// import {motion} from "framer-motion"

// const MediaProgressBar = ({isMediaUploading, progress}) => {
//     const [showProgress, setShowProgress] = useState(false)
//     const [animatedProgress, setAnimatedProgress] = useState(0)

//   useEffect(()=>{
//     if(isMediaUploading){
//         setShowProgress(true)
//         setAnimatedProgress(progress)
//     }else{
//         const timer = setTimeout(() => {
//             setShowProgress(false)
//         }, 1000);
//         return ()=>clearTimeout(timer)
//     }
//   },[isMediaUploading,progress])

//   if(!showProgress) return null
    
//   return (
//     <div className=''>
//         <motion.div className=''
//         initial={{width:0}}
//         animate={{
//             width:`${animatedProgress}%`,
//             transition:{duration:0.5, ease:'easeInOut'}
//         }}
//         >
//             {
//                 progress>=100 && isMediaUploading &&
//                 (
//                     <motion.div className=''
//                     animate={{
//                         x:["0%", "100%", "0%"]
//                     }}
//                     transition={{
//                         duration :2,
//                         repeat : Infinity,
//                         ease:"linear"
//                     }}
//                     />
//                 )
//             }

//         </motion.div>
//     </div>
//   )
// }

// export default MediaProgressBar

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MediaProgressBar = ({ isMediaUploading, progress }) => {
  const [showProgress, setShowProgress] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    if (isMediaUploading) {
      setShowProgress(true);
      setAnimatedProgress(progress);
    } else {
      const timer = setTimeout(() => {
        setShowProgress(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isMediaUploading, progress]);

  if (!showProgress) return null;

  return (
    <div className="w-full bg-[#F0E6FF] rounded-lg h-3 overflow-hidden shadow-inner">
      {/* MAIN PROGRESS BAR */}
      <motion.div
        className="h-full bg-[#A86CFF] rounded-lg relative"
        initial={{ width: 0 }}
        animate={{
          width: `${animatedProgress}%`,
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
      >
        {/* SHIMMER EFFECT WHEN 100% */}
        {progress >= 100 && isMediaUploading && (
          <motion.div
            className="absolute top-0 left-0 h-full w-1/3 bg-white/30 rounded-lg"
            animate={{
              x: ["0%", "120%", "0%"],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}
      </motion.div>
    </div>
  );
};

export default MediaProgressBar;
