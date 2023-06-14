import im1 from '../../../assets/slider/activity/Swimming _Two Color.png'
import im2 from '../../../assets/slider/activity/Football team_Monochromatic.png'
import im3 from '../../../assets/slider/activity/Basketball_Monochromatic.png'
import im4 from '../../../assets/slider/activity/Tennis_Two Color.png'
const Gallery = () => {
    return (
        <div>
            <section className="md:py-10 mt-28 dark:bg-gray-800">
                {/* <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?1" />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?2" />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?3" />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?4" />
                    </div>
                </div> */}
                <div className="flex flex-col md:flex-row md:gap-4 gap-4 border-black mx-12">
                    <div className="md:w-1/2  relative pt-24">
                        <p className='text-center font-extrabold text-gray-300/70 dark:text-white/70 md:text-8xl  -z-10 '>Activity</p>
                        <h1 className=" text-black/80 dark:text-white/70 z-30 md:px-16 font-bold leading-relaxed md:text-5xl text-3xl  uppercase absolute top-1/4 md:text-right text-center">What we have to offer</h1>
                        <div className='mt-8 md:pl-24'>
                            <img src="https://kamperen.qodeinteractive.com/wp-content/uploads/2021/06/Home-6-map.png" alt="" />
                        </div>

                    </div>
                    <div className='md:w-1/4'>
                        <div className='pt-8 '>
                            <img className='w-44 h-24 pb-2' src={im1} alt="" />
                            <p className='text-xl font-semibold dark:text-white/70'>Swimming Club</p>
                            <p className='text-black/60 dark:text-white/70'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At magnam mollitia pariatur deleniti, harum alias ducimus,  nostrum! Magni cum magni!</p>
                        </div>
                        <div className='mt-12 '>
                            <img className='w-40 h-36 pb-2' src={im2} alt="" />
                            <p className='text-xl font-semibold dark:text-white/70'>Football Club</p>
                            <p className='text-black/60 dark:text-white/70'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At magnam mollitia pariatur deleniti, harum alias ducimus,  nostrum! Magni cum magni!</p>
                        </div>
                    </div>
                    <div className='md:w-1/4'>
                        <div className='pt-24 '>
                            <img className='w-44 h-36 pb-2' src={im3} alt="" />
                            <p className='text-xl font-semibold dark:text-white/70'>Basketball Club</p>
                            <p className='text-black/60 dark:text-white/70'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At magnam mollitia pariatur deleniti, harum alias ducimus,  nostrum! Magni cum magni!</p>
                        </div>
                        <div className='mt-12 '>
                            <img className='w-40 h-36 pb-2 ' src={im4} alt="" />
                            <p className='text-xl font-semibold dark:text-white/70'>Tennis Club</p>
                            <p className='text-black/60 dark:text-white/70'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At magnam mollitia pariatur deleniti, harum alias ducimus,  nostrum! Magni cum magni!</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Gallery;