import { Fade } from 'react-awesome-reveal';
import './Instructor.css'

const InstructorsCard = ({ data }) => {
    const { name, email, photoURL } = data
    console.log(data);
    return (
        <div>
            <div className='bubble '>
                <img className=' w-full h-full object-cover ' src={photoURL} alt="" />

            </div>
            <div className=' text-center my-8' >
                <Fade duration={3000}><h1 className='pb-3 text-2xl font bold'>{name}</h1></Fade>
                <Fade duration={3500}><h1>{email}</h1></Fade>


            </div>
        </div>
    );
};

export default InstructorsCard;