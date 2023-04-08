import React from 'react'
import projectStyles from '../styles/style.module.css'
import styles from '../styles/style.module.css'
import {MdCall} from 'react-icons/md'
import {GoLocation} from 'react-icons/go'
import {HiOutlineMail} from 'react-icons/hi'
import {BsInstagram} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr'
import {AiOutlineCalendar} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineStock} from 'react-icons/ai'
import {ImTwitter} from 'react-icons/im'
import {CiSearch} from 'react-icons/ci'
import {CgProfile} from 'react-icons/cg'
const landpage = () => {
  return (
                     <div className='w-full h-12  '>

                            <div className='flex flex-row w-screen '>
            
                <div>
                 <img className="mx-7 md:mx-16 mb-4 h-12 w-auto" src='/icon1.png' width={25} height={25} alt="hand"/>
                 </div>
    
            <div class="relative mt-2  text-center justify-center items-center">
                     
                     <div class="mb-3 xl:w-96 w-screen mx-30 text-center">
                      <div class="relative flex pl-10 flex-row w-90  h-11 border border-solid border-neutral-300 bg-slate-200 rounded-full px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200">
                     <input
                       type="search"
                       class="relative m-0  border-slate-200  flex-auto  border border-solid  bg-slate-200 rounded-full px-3 py-1.5 text-base font-normal text- outline-none transition duration-300 ease-in-out focus:border-black  focus:text-black   dark:text-black dark:placeholder:text-black"   placeholder="Search Items..."
                       >

                       </input>
                     <button
                      class="relative z-[4] flex items-center  bg-primary  font-large uppercase leading-tight  bg-blue-900 text-white w-10 rounded-full border shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                      type="button"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                     <CiSearch className='ml-3 rounded-full'/>
                            </button>
                   </div>
                   </div>
             
            </div>
            <div className='flex flex-row w-screen right-0'>
                        <ul className='float-end'>

                <div className=''>
                  <a href=' '  className='no-underlit-0ne'>
                  <p className=' text-slate-700 text-md font-semibold'>Events</p>
                  </a>
             
              </div>

              <span className=''>
                <a href='' className='no-underline'>
                <p className='no-underline text-slate-700 font-semibold '>Sign In</p>
                </a>
                </span>
              <div className=''>
                <div className=''>
                  <span className=''>
                 <button type='button'  className='btn w-40 relative blue-900 mt-2.5 ml-10 btn-primary'> 
                  Join the Community
                 </button>
                  </span>
                </div>
              </div>
              <div className=''>
                <div className=''>
                  <div className=''>


                    <CgProfile
                      // alt="Ellipse2173364"
                      src='/ava.png'
                      width={12}
                      height={12}
                      className={styles['ellipse217']}
                      />
                  </div>
                </div>
              

                <select className='w-0 right-7  relative rounded-full'>
                  <option className='w-0 rounded-full'></option>
                  <option className='w-0 rounded-full'>account details</option>
                  <option className='w-0 rounded-full'>settings</option>
                  <option className='w-0 rounded-full'>logout</option>
                  <option>rev</option>
                </select>
        
            
         </div>
                      </ul>
  

                </div>
                      </div>
</div>


  )
}

export default landpage