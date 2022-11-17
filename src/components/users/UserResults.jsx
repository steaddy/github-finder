import {useContext} from "react";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContex";

const UserResults = () => {
    const {
        users,
        loading,
    } = useContext(GithubContext);


    return (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3
        md:grid-cols-2'>
            {loading ? <h3>Loading...</h3> :
            users.map(user => {
                return <UserItem key={user.id} user={user} />
            })
            }
        </div>
    );
};

export default UserResults;