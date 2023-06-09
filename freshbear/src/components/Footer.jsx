import miniLogo from '../images/miniLogo.svg'

function Footer() {
    return(
        <footer>
            <div className="fContainer">
            <div className="footerItems">
                <a className="footerItem" href="#">О нас</a>
                <a className="footerItem" href="#">Профиль</a>
                <a className="footerItem" href="#">FaQ</a>
                <a className="footerItem" href="">Корзина</a>
            </div>
            <img className="footerLogo" src={miniLogo} alt="" />
            </div>
        </footer>
    )
}

export default Footer;