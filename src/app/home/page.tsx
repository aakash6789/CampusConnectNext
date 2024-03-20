"use client";
import Image from "next/image";
import React,{useState} from "react";
import b1 from '../assets/b1.svg'
import b2 from '../assets/b2.svg'
import b3 from '../assets/b3.svg'
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
export default function Homly(){
    const [currindex, setCurrIndex] = useState(0);
  const images=[b1,b2,b3];
  const ptext=['Click New Meeting to get a link which you can send to people you want to meet with','Click New Meeting to scehdule meetings in Google Calendar and send invites to particpants','No one can join meetings unless invited or admitted by the host '];
  const phead=['Get a link you can share','Plan ahead','Your meeting is safe'];
  const prevInd = () => {
    if (currindex == 0) {
      setCurrIndex(2);
    } else {
      setCurrIndex(currindex - 1);
    }
  };
  const nextInd = () => {
    if (currindex == 2) {
      setCurrIndex(0);
    } else {
      setCurrIndex(currindex + 1);
    }

}
return (
  <div className='text-black font-serif   '>
      <h1 className='lg:text-[7vh] mt-[13%] text-center sm:text-[5vh] max-sm:text-[4vh]'>CampusConnectLive</h1>
      <h2 className='mt-[5vh]  text-[2.5vh] max-sm:text-[1.5vh] text-center'>Connecting Futures, Igniting Careers!</h2>
      <p className='mt-[10vh] px-[10%] text-center text-[2.5vh] max-sm:text-[2vh]'>Welcome to CampusConnectLive,one-stop solution for colleges to host pre-placement talks seamlessly. Placements Coordinators and TPOs, are you tired of students jeopardizing college placements due to an unfiltered chat system? Are you facing bans from companies due to the irresponsible behavior of students? Don't worry, we've got you covered. Presenting CampusConnectLive, where students cannot abuse, disrespect, or threaten the recruitment staff, and at the same time, help students ask the right questions. We are essentially Google Meet and MS Teams but better!!</p>
      <div className="md:mt-[15vh] max-sm:mt-[10vh]">
        <div className=" max-w-[600px] h-[450px] w-full m-auto py-2 px-4 relative group">
          <div className="relative flex justify-center ">
            <Image
              src={images[currindex]}
              className=""
              alt="img"
            ></Image>
          </div>
          <div>
            <BsChevronCompactLeft
              size={50}
              onClick={prevInd}
              className=" group-hover:block absoloute top-[30%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer absolute"
            />
          </div>
          <div>
            <BsChevronCompactRight
              size={50}
              onClick={nextInd}
              className=" group-hover:block absoloute top-[30%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer absolute"
            />
          </div>
        </div>
      </div>
      <h2 className='mt-[5vh] px-[10%] text-center text-[2.5vh] max-sm:text-[2vh] font-semibold'>{phead[currindex]}</h2>
      <p className=' px-[10%] text-center text-[2.5vh] mt-[5%] max-sm:text-[2vh]'>{ptext[currindex]}</p>
    
    </div> 
)
}