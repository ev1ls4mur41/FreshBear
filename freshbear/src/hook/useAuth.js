import {useContext} from "react";
import {AuthContext} from "../hoc/authProvider.jsx";

export function useAuth() {
    return useContext(AuthContext)
}