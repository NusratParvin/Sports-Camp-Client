import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useRole = () => {
    
        const {user,loading} = useAuth();
        const [Axios] = useAxios();
        const {data: isRole, isLoading: isRoleLoading} = useQuery({
            queryKey: ['isRole', user?.email],
            enabled: !loading,
            queryFn: async () => {
                // console.log('before axiosc call');
                const res = await Axios.get(`/users/role/${user?.email}`);
                // console.log('is role response', res.data.role)
                return res.data.role;
            }
        })
        return [isRole, isRoleLoading]
    
};

export default useRole;