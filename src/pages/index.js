import React,{ Component, useEffect, useState} from 'react'
import styles from '../styles/design.module.css'
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

export default class index extends Component {
 
render(){


  return (
    <div className={styles.register}>
    <div className={styles.landing}>
    <div className='relative top-5 flex flex-row w-full'>
    <div>

      <img className="mx-6 md:mx-28  h-12 w-auto" src='/icon1.png' width={25} height={25} alt="hand"/>
</div>
    {/* search bar */}
    {/* <div className='text-center  w-full'> */}

    <div className="w-[30%] mt-2">
   <div className="flex">
      <input type="search" className="w-full p-2 rounded-full text-black focus:border-blue-900" placeholder="Search Items..."/>
      <button type="submit" className="px-4 border rounded-full bg-blue-900 text-white hover:bg-blue-900 ">
        <CiSearch/>
     </button>
   </div>
    {/* </div> */}
</div>
      <div className={styles.register__sign}>
        <div className='pr-20 w-screen'>
        <div className=''>
      <div className='flex left-5 bg-slate-200  rounded-full w-21.2 h-10 float-end'>
        <CgProfile className='mt-2.5 left-3' />
        <select className='w-1 rounded-full border-none focus:border-slate-200 bg-slate-200'>
          <option className='bg-white'>Volvo</option>
          <option className='bg-white'>Saab</option>
          <option className='bg-white'>Mercedes</option>
          <option className='bg-white'>Audi</option>
        </select>
      </div>
    <div className=''>

        <a href='/register'>
    <button type='button' className="btn btn-primary  baseline mr-4 w-30 bg-blue-900   float-end">
          Join the Community
    </button>
        </a> 

        <p className='float-end text-sm px-24 font-semibold md:text-base no-underline mt-2'>
         <a href='' className='no-underline text-slate-700' >
        Sign In
          </a> 
        </p>
        <p className='float-end mx-30  text-sm font-semibold md:text-base no-underline  mt-2'>
         <a href='' className='no-underline text-slate-700' >
         Events
          </a> 
        </p>
    </div>

   </div>
        </div>
      </div>
      </div>
      

      <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2  flex justify-center items-center'>
        <div className='mb-40 '>
          {/* <div className=''> */}
        <img src='/rosary.png'  alt='' 
        width='100px'
        height='50px'
        className='ml-80'
        />
        {/* </div> */}
          <h1 className='py-2 r-4 text-gray-700'>
           <span> Quick access to </span>
          </h1>
          <h1 className='text-8xl -top-20 text-blue-900'>Online Community</h1>
          <p className='uppercase text-sm tracking-widest font-aeonic text-gray-600'>
          HOME OF VICTORY is a online community created to touch the lives of many
          <br/> who may have lost faith in God because of challenges.
          </p>
          <button type='button' className='btn btn-primary w-60 h-14 bg-blue-950'>
            Join the community
          </button>
          </div>

          </div>



      {/* containers */}
      <div className='grid md:grid-cols-3 grid-cols-1  ml-20 -mt-60 gap-none items justify-center items-center'>
          <div className='border border-1  w-4/5 h-80  rounded-lg bg-[#252F3F]'>
          {/*  */}
            <div className=''>
            <img 
            src='/Frame.png'
            className='text-white m-4'
            />
            <h1 className='text-xl text-white'> Experience it anywhere  </h1>
            <p className='text-slate-400 p-3'>
            Browse through Devotions, Prayers, Novenas, Daily reflections, testimonies and bible quotes all in one place from your PC, mobile and Tablet.
            </p>
            <p className='text-white  flex mt-10'>   
             View Programs  →
              </p>
            </div>
          </div>

          {/*  */}  
          <div className='border border-1 w-4/5 h-80 rounded-lg bg-[#252F3F]'>
            <div>
            <img
            src='/frame2.png'
            className='text-white m-4'
            />
            </div>
            <h1 className='text-xl text-white'> Experience it anywhere  </h1>
            <p className='text-slate-400 p-3'>
            Home of Victory connects Christians and Catholics from around the world to facilitate religious discussions and support. 
            </p>
            <p className='flex text-white mt-10'>   
             Join the Community  →
              </p>
          </div>

          {/*  */}
          <div className='border border-1 w-4/5 h-80 rounded-lg bg-[#252F3F]'>
            <div>
            <img
            src='/frame3.png'
            className='text-white m-4'
            />
            </div>
            <h1 className='text-xl text-white'> Experience it anywhere  </h1>
            <p className='text-slate-400 p-3'>
            Join the community of like minded individuals, who have  deep affection for Jesus Christ and the Blessed Virgin Mary. 
            </p>
            <p className='flex text-white mt-10'>   
             Join the Community  →
              </p>
          </div>
        {/*  */}
        </div>
        <div className='mt-40'>
        <h1 font-semibold>Light at the end of the tunnel...</h1>
        </div>
    <div className='grid grid-rows-2 mt-20'>
    <div className='absolute ml-20 w-screen '>
      <img  
      src='/man.png'
      className='w-90'
      />
    </div>
    <div className='relative w-screen ml-40 '>
    <div className='pl-80'>
    <img  
    src='/Line2.png'
   className='absolute ml-80 top-40'
   />
      <h2 className='pr-80 text-lg'>
        Values
      </h2>
      <p className='ml-20 text-slate-400'>
      To live a life of holiness, consecration, and separation and
      <br/> to teach with our lifestyles devoid of worldly attraction.
      </p>
    </div>
    <div className='pl-80'>
      <h2 className='pr-60 text-lg'>
        Vision Statement
      </h2>
      <p className='ml-20 text-slate-400'>
      To populate the kingdom of God starting from<br/> the
   earthly realm and ensure fruits are geared to
      <br/>wards repentance, redemption, and salvation.
      </p>
    </div>
    <div className='pl-80'>
      <h2 className='pr-60 text-lg'>
    <img  
    src='/Line2.png'
    />
        Mission Statement
      </h2>
      <p className='ml-20 text-slate-400'>
      To spread the message of the Bible to lost souls, to 
      <br/> preach the good news, and spread the love of Christ.
      </p>
    </div>

    </div>
    </div>
          </div>


  </div>
</div>
  )
}

}
