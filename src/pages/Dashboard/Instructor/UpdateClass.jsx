import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useAxios from '../../../hooks/useAxios';
import { toast } from 'react-toastify';


const UpdateClass = () => {
    const id = useParams()
    const navigate = useNavigate()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [dataToUpdate, setDataToUpdate] = useState([])
    const [Axios] = useAxios()


    useEffect(() => {
        Axios(`/update?id=${id.id}`)
            .then(res => {
                console.log(res.data[0]);
                setDataToUpdate(res.data[0])
            })
    }, [])

    const onSubmit = data => {
        console.log(data);
        const { name, price, seatsAvailable,image } = data;
        const newClass = { name,image, price: parseFloat(price), seatsAvailable: parseInt(seatsAvailable)};
console.log(newClass);

Axios.put(`/update?id=${id.id}`, newClass)
        .then((response) => {
          console.log(response.data);
          if (response.data.modifiedCount > 0) {
            toast.success('Successfully updated !', {
                position: toast.POSITION.TOP_RIGHT
            });
            navigate('/dashboard/allclasses')
        }

})
        
        .catch((error) => {
          console.error(error);
        });


            // Axios.put(`/update?id=${id.id}`)
            //     .then((res) => res.json())
            //     .then((result) => {
            //         if (result.modifiedCount > 0) {
            //             toast.success('Successfully updated !', {
            //                 position: toast.POSITION.TOP_RIGHT
            //             });
            //         }
            //         console.log(result);
            //     });


    }

    const { user } = useAuth()
    return (
        <div>
            <h1 className='text-xl font-bold text-black/70 text-center pt-4 pb-0 mb-12 '>{dataToUpdate.name} Information</h1>
            <div>
               <form className="w-full bg-white -my-3" onSubmit={handleSubmit(onSubmit)} >
                <div className="flex flex-wrap -mx-3 mb-0 p-0 ">
                    <div className="w-full px-3">
                        <label className="block uppercase text-gray-700 text-xs font-bold mt-3 mb-1">
                            Class Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-xs border-none text-gray-700 py-1 px-4 mb-1 leading-tight"
                            type="text"
                            // placeholder="Class Name"
                            defaultValue={dataToUpdate.name}
                            {...register("name", { required: true })}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-3">
                    <div className="w-full px-3">
                        <label className="block uppercase text-gray-700 text-xs font-bold mt-3 mb-1">
                            Class Image
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-xs border-none text-gray-700 py-1 px-4 mb-1 leading-tight"
                            type="text"
                            // placeholder="Class Name"
                            defaultValue={dataToUpdate.image}
                            {...register("image", { required: true })}
                        />
                    </div>
                </div>
                <div className='flex w-full justify-between gap-2'>

                    <div className=" -mx-3 mb-3">
                        <div className="w-full px-3">
                            <label className="block uppercase text-gray-700 text-xs font-bold mt-3 mb-1">
                                Price
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-xs border-none text-gray-700 py-1 px-4 mb-1 leading-tight"
                                type="number"
                                // placeholder="Class Name"
                                defaultValue={dataToUpdate.price}
                                {...register("price", { required: true })}
                            />
                        </div>
                    </div>
                    <div className=" -mx-3 mb-3">
                        <div className="w-full px-3">
                            <label className="block uppercase text-gray-700 text-xs font-bold mt-3 mb-1">
                                Available Seats
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-xs border-none text-gray-700 py-1 px-4 mb-1 leading-tight"
                                type="number"
                                // placeholder="Class Name"
                                defaultValue={dataToUpdate.seatsAvailable}
                                {...register("seatsAvailable", { required: true })}
                            />
                        </div>
                    </div>
                </div>



                <input className="mt-6 bg-teal-600 text-white font-semibold mx-auto" type="submit" />
            </form> 
            </div>

            
        </div>

    );
};

export default UpdateClass;