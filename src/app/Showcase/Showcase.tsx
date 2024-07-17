import BlurFade from '@/components/magicui/blur-fade'
import img1 from './img/showcase-1.png'
import img2 from './img/showcase-2.png'


const Showcase = () => {
  

  const data = [
    {
      id:1,
      img:img1,
      title:'The title',
      desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, quos'
    },
    {
      id:2,
      img:img2,
      title:'The title',
      desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, quos'
    },
    {
      id:3,
      img:img2,
      title:'The title',
      desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, quos'
    },
    {
      id:4,
      img:img1,
      title:'The title',
      desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, quos'
    },
    {
      id:5,
      img:img2,
      title:'The title',
      desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, quos'
    },
    {
      id:6,
      img:img1,
      title:'The title',
      desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, quos'
    },
    
  ]

  

  return (
    <div className='py-10'>

      <BlurFade delay={0.25} inView>
        <div className='flex flex-col items-center'>
          <h1 className='text-center text-4xl w-full md:w-8/12 font-bold'>Interactive Product Demo Examples</h1>
          <BlurFade delay={0.30} inView>
            <p className=' py-4 text-center'>A selection of our favorite demos to get your creativity flowing</p>
          </BlurFade>
        </div>
      </BlurFade>
      <BlurFade delay={0.40} inView>
        <div className=' grid grid-cols-sm md:grid-cols-md lg:grid-cols-lg justify-center gap-16 mt-20'>
          {data.map((item)=>{
            return(
              <div key={item.id} className='cursor-pointer'>
                <img src={item.img} alt={item.title} className=' object-cover'/>
                <h1 className='font-bold text-lg py-2'>{item.title}</h1>
                <p className='text-[0.9rem] opacity-70'>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </BlurFade>

      <div className='mx-5 bg-black text-white flex flex-col gap-8 justify-between items-center px-10 py-6 rounded-lg mt-20 md:flex-row md:gap-0 md:px-16 '>
        <h1 className='text-xl'>Create your first product demo on us!</h1>
        <button className='bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-500 duration-200'>Get started for free</button>
      </div>

    </div>
  )
}

export default Showcase