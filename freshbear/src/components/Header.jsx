import React, {useState} from "react";
import Modal from 'react-modal';
import logo from '../images/logo.svg';
import profileIco from '../images/profileIco.svg';
import aboutIco from '../images/aboutIco.svg';
import cart from '../images/cart.svg'
import closeBtn from '../images/close.svg';
import homeIco from '../images/homeIco.svg';
import {Routes, Route, Link} from "react-router-dom";


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
                <div className="hContainer">
                    <div className="headerInner">
                        <Link to="/"><img className="logo" src={logo} alt="FRESH BEAR"/></Link>
                        <nav>
                            <Link to="/" className="navBtn">Главная <img className="navImg" src={homeIco}
                                                                         alt="home"/></Link>
                            <Link to="/about" className="navBtn">О нас <img className="navImg" src={aboutIco}
                                                                            alt="about"/></Link>
                            <Link to="/login" className="navBtn">Профиль<img className="navImg" src={profileIco}
                                                                               alt="profile"/></Link>
                            <button className="navBtn" onClick={openModal}>Корзина<img className="navImg" src={cart}
                                                                                       alt="cart"/></button>
                            <Modal
                                isOpen={modalIsOpen}
                                onAfterOpen={afterOpenModal}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >

                                <div className="cartContainer">
                                    <button className="closeBtn" onClick={closeModal} type="submit"><img src={closeBtn}
                                                                                                         alt=""/>
                                    </button>
                                    <h1 className="cartTitle">Корзина</h1>
                                    <p>Ваша корзина пуста</p>
                                    {/*<section className="productSection">*/}
                                    {/*    <img className="productImg" src={Spice} alt=""/>*/}
                                    {/*    <p className="cartProd">Приправа для курицы</p>*/}
                                    {/*    <p className="cartPrice">150₽</p>*/}
                                    {/*</section>*/}
                                    {/*<div className="totalBack">*/}
                                    {/*    <section className="totalDelPrice">*/}
                                    {/*        <p className="delTitle">Доставка</p>*/}
                                    {/*        <p className="delPrice">150₽</p>*/}
                                    {/*    </section>*/}
                                    {/*    <section className="totalAllPrice">*/}
                                    {/*        <p className="totalTitle">Итого</p>*/}
                                    {/*        <p className="totalPrice">300₽</p>*/}
                                    {/*    </section>*/}
                                    {/*</div>*/}
                                </div>
                            </Modal>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}


export default Header;