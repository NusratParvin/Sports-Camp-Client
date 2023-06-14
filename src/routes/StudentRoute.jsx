import { useLocation } from 'react-router-dom';
import useRole from '../hooks/useRole';
import useAuth from '../hooks/useAuth';


const StudentRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isRole, isRoleLoading] = useRole();
    const location = useLocation();

    if(loading || isRoleLoading){
        return <progress className="progress w-56"></progress>
    }console.log(isRole,'in instructor route');

    if (user && isRole==='Student') {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default StudentRoute;