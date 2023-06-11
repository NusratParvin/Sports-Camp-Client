import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useCart = () => {
    const { user, loading } = useAuth()
    const [Axios] = useAxios();
    
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await Axios(`/cart?email=${user?.email}`)
            console.log(' mycart', res)
            return res.data;
        },
    })

    return [cart, refetch]
};

export default useCart;