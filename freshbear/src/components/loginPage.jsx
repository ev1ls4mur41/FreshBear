import {Link, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../hook/useAuth.js";

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signin} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;
        signin(user, () => navigate(fromPage, {replace: true}));
    }
    return (
        <div className="loginPage">
            <h1 className="logTitle">Авторизация</h1>
            <div className="loginForm">
                <form onSubmit={handleSubmit}>
                    <p className="inputT"> Имя:</p>
                    <input className="loginName" type="text" name="username"/>
                    <p className="inputT">Пароль:</p>
                    <input className="loginPass" type="password" name="password"/>

                    <Link className="logInLink" to='/profile'> <button className="loginBtn" type="submit">Войти</button></Link>
                </form>
            </div>
        </div>
    )
}

export {LoginPage};