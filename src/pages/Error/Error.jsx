import { NavLink, useRouteError } from 'react-router-dom';
import errorImage from '../../assets/slider/404-error-with-broken-robot-pana.svg';

const Error = () => {
    const { error, status } = useRouteError()

    return (
        <div>
            <div className="min-w-screen min-h-screen flex items-center p-5 lg:p-20 overflow-hidden relative">
                <div className="flex-1 min-h-full min-w-full rounded-3xl bg-transparent shadow-xl p-10 lg:p-20  relative md:flex items-center text-center md:text-left">
                    <div className="w-full md:w-1/2">

                        <div className="mb-10 md:mb-20 text-gray-600 ">
                            <h1 className="font-black uppercase text-3xl lg:text-5xl 
                bg-clip-text bg-gradient-to-r from-green-400 to-blue-600  text-transparent mb-10 ">You Are lost !</h1>
                            <p>{error.message}</p>
                        </div>
                        <div className="mb-20 md:mb-0">
                            <NavLink to='/' className=" btn-link text-lg font-semibold outline-none focus:outline-none transform transition-all hover:scale-125 bg-clip-text bg-gradient-to-r from-green-400 to-blue-600  text-transparent hover:text-indigo-800">
                                <i className="mdi mdi-arrow-left mr-2"></i>Go Back</NavLink>
                        </div>
                    </div>
                    <div className="w-full mx-auto md:w-1/2  h-72">
                        <img className='mx-auto w-72' src={errorImage} alt="" />
                    </div>
                </div>
                <div className="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
                <div className="w-96 h-full bg-orange-200 bg-opacity-60 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
            </div>
        </div>
    );
};

export default Error;