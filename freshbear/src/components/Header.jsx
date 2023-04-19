import {useState} from "react";
import Modal from 'react-modal';
import logo from '../images/logo.svg';
import profileIco from '../images/profileIco.svg';
import aboutIco from '../images/aboutIco.svg';
import cart from '../images/cart.svg'
import productImg from '../images/product.png';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        width: '954px',
        height: '437px',
        right: 'auto',
        bottom: 'auto',
        marginRight: 'auto',
        transform: 'translate(-50%, -50%)',
        borderRadius: '18px',

    },
};

function Header() {

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f000';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <header className="header">
                <div className="container">
                    <a href="#"><img className="img" src={logo} alt="FRESH BEAR"/></a>
                    <nav>
                        <p><a className="navBtn" href="#">О нас <img className="navImg" src={aboutIco} alt="about"/></a>
                        </p>
                        <p><a className="navBtn" href="#">Профиль<img className="navImg" src={profileIco} alt="profile"/></a>
                        </p>
                        <p>
                            <button className="navBtn" onClick={openModal}>Корзина<img className="navImg" src={cart}
                                                                                           alt="cart"/></button>
                        </p>
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >

                            <div className="cartContainer">
                                <h1 className="cartTitle">Корзина</h1>
                                <section className="productSection">
                                    <img className="productImg" src={productImg} alt=""/>
                                    <p className="cartProd">Приправа для курицы</p>
                                    <p className="cartPrice">150₽</p>
                                </section>
                                <section className="totalPrice">

                                </section>
                            </div>
                        </Modal>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header;