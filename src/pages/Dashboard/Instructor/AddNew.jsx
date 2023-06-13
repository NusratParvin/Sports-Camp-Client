import { FormProvider, useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-toastify';
import useAxios from '../../../hooks/useAxios';
import { useNavigate } from 'react-router-dom';


// const img_hosting_token = import.meta.env.VITE_Image_Upload_Token

const AddNew = () => {
    const { user } = useAuth()
    const [Axios] = useAxios()
    const navigate = useNavigate()

    // const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`


    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm();

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setValue('image', file);
    };

    const onSubmit = data => {
        // fetch(img_hosting_url, {
        //     method: 'POST',
        //     body: data
        // })
        //     .then(res => res.json())
        //     .then(imgResponse => {
        //         if (imgResponse.success) {
        //             const imgURL = imgResponse.data.display_url;
                    const { name, price, seatsAvailable, email, instructor ,image } = data;
                    const newClass = { name,email,image, price: parseFloat(price), seatsAvailable: parseInt(seatsAvailable), instructor };
        console.log(newClass);

        //             console.log(newClass);
                    Axios.post('/addClass', newClass)
                        .then(response => {
                            console.log('posting new menu class', response.data.insertedId);
                            if (response.data.insertedId) {
                                toast.success("New class added!");
                                reset();
                                navigate('/dashboard/allclasses')
                            }
                        })
                        // .catch(error => {
                        //     toast.error('Error adding class', error);
                        // });
                }
    //         })
    //         .catch(error => {
    //             console.error('Error uploading image:', error);
    //         });
    // }
    return (
        <div className='text-black  mx-auto mt-0 p-0 '>
            <h1 className='text-xl font-bold text-black/70 text-center pt-4 pb-0 mb-6 '>Add new Class</h1>

            <form class="w-full border  -mt-1" onSubmit={handleSubmit(onSubmit)} >

                <div class="flex flex-wrap -mx-3 mb-3 ">
                    <div class="w-full px-3 ">
                        <label class="block uppercase   text-gray-700 text-xs font-bold mt-3 mb-1" >
                            Class Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-sm text-gray-700 py-3 px-4 mb-1 leading-tight " type='text'
                            placeholder=" Class Name" {...register("name")} />
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-0 ">
                    <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
                        <label class="block uppercase   mt-0 pt-0 text-gray-700 text-xs font-bold mb-1">
                            Seats Available
                        </label>
                        <input class="appearance-none block w-full text-sm bg-gray-200 text-gray-700 py-3 px-4 mb-1 leading-tight " type="number" placeholder="Available seats" {...register("seatsAvailable", { required: true })} />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase    mt-0 pt-0 text-gray-700 text-xs font-bold mb-1" for="grid-last-name">
                            Class Image
                        </label>
                        {/* <input type="file" onChange={handleImageUpload} required /> */}
                        <input class="appearance-none block w-full bg-gray-200 text-sm text-gray-700 py-3 px-4 mb-1 leading-tight " type="text" 
                            placeholder="Photo url of class" {...register("image")} />
                    </div>


                </div>



                <div class="flex flex-wrap -mx-3 mb-0 mt-3 ">
                    <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
                        <label class="block uppercase   mt-0 pt-0 text-gray-700 text-xs font-bold mb-1">
                            Instructor Name
                        </label>
                        <input class="appearance-none block w-full text-sm bg-gray-200 text-gray-700 py-3 px-4 mb-1 leading-tight " readOnly
                            type="text" defaultValue={user?.displayName} {...register("instructor")} />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase    mt-0 pt-0 text-gray-700 text-xs font-bold mb-1">
                            Instructor Email
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 text-sm py-3 px-4 leading-tight " readOnly type="email"
                           {...register("email")}   defaultValue={user?.email}/>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-0 ">
                    <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
                        <label class="block uppercase   text-gray-700 text-xs font-bold mb-1 mt-3">
                            Price
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 py-3 px-4 text-sm" type="number" placeholder="Price" {...register("price", { required: true })} />

                    </div>

                    {/* <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
                        <label class="block uppercase   text-gray-700 text-xs font-bold mb-1 mt-3">
                            Status
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 py-3 text-sm px-4 leading-tight " type="number"  {...register("status")}  defaultValue='Pending' readOnly/>
                    </div> */}
                </div>


                <input className='mt-6 bg-teal-600 text-white font-semibold mx-auto' type="submit" />
            </form>
        </div>


    );
};

export default AddNew