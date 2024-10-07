import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

export const UserMenu = () => {

const userName = useSelector(selectUser).name;
const dispatch = useDispatch();


    return (
        <div>
            <p>Welcome {userName} 👋</p>
            <button type="button" onClick={() => dispatch(logOut())}>Log out</button>
        </div>
    )
}