import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:5000',
});


const useAxios = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();



    useEffect(() => {
        Axios.interceptors.request.use((config) => {
            const token = localStorage.getItem('Token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        Axios.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logOut();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );
    }, [logOut, navigate]);

    return [Axios];
};

export default useAxios;