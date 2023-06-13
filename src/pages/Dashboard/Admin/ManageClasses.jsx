import React, { useEffect } from 'react';
import useAxios from '../../../hooks/useAxios';

const ManageClasses = () => {
    const [Axios] = useAxios()

    useEffect(()=>{
        try{
            fetch('http://localhost:5000/classes')
            .then(res=>res.json())
            .then(data=>console.log(data))
        }
        catch{
            console.log('Failed Fetch');
        }
    },[])

    return (
        <div>
            class
        </div>
    );
};

export default ManageClasses;