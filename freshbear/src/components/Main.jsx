import React from "react";
import Spice from '../images/spice.png';
import Pelmen from '../images/pelmen.png';
import Bastur from '../images/bastur.png';
import Rulet from '../images/rulet.png';
import Bento from '../images/bento.png';
import Varen from '../images/varen.png';
import Hinkal from '../images/hinkal.png';
import Tartar from '../images/tartar.png';
import Hamon from '../images/hamon.png';
import Balik from '../images/balik.png';

function Main() {
    return (
        <div className="main">
                <div className="prodRow">
                    <div className="Prod leftSide">
                        <img src={Spice} alt="Специи для курицы" className="prodImg"/>
                        <div className="prodDesc">
                            <p className="prodTitle">Специи для курицы</p>
                            <p className="prodSub">Куркума, горчичное семя, пажитник, петрушка,соль, перец черный
                                дробленный, чеснок, морковь</p>
                            <p className="lPrice">Цена</p>
                            <div className="priceBtn">
                                <p className="price">150 ₽</p>
                                <button className="inCart">В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div className="Prod rightSide">
                        <img src={Bastur} alt="Специи для курицы" className="prodImg"/>
                        <div className="prodDesc">
                            <p className="prodTitle">Бастурма</p>
                            <p className="prodSub">Говядина, соль, чеснок сушёный, кориандр, лавровый лист, перец
                                чёрный</p>
                            <p className="lPrice">Цена</p>
                            <div className="priceBtn">
                                <p className="price">550 ₽</p>
                                <button className="inCart">В корзину</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="prodRow">
                    <div className="Prod leftSide">
                        <img src={Rulet} alt="Специи для курицы" className="prodImg"/>
                        <div className="prodDesc">
                            <p className="prodTitle">Меринговый рулет</p>
                            <p className="prodSub">Яичные белки, сахарный песок мелкий, лимонный сок, кукурузный
                                крахмал, миндальные лепестки</p>
                            <p className="lPrice">Цена</p>
                            <div className="priceBtn">
                                <p className="price">450 ₽</p>
                                <button className="inCart">В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div className="Prod rightSide">
                        <img src={Bento} alt="Специи для курицы" className="prodImg"/>
                        <div className="prodDesc">
                            <p className="prodTitle">Бенто торт</p>
                            <p className="prodSub">Пшеничная мука, какао, яйца, сахар, кефир, растительное масло,
                                сливки, сливочное масло, арахис</p>
                            <p className="lPrice">Цена</p>
                            <div className="priceBtn">
                                <p className="price">350 ₽</p>
                                <button className="inCart">В корзину</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="prodRow">
                    <div className="Prod leftSide">
                        <img src={Varen} alt="Специи для курицы" className="prodImg"/>
                        <div className="prodDesc">
                            <p className="prodTitle">Вареники домашние</p>
                            <p className="prodSub">Вода, яйцо, мука, соль, картофель, лук репчатый, соль, перец
                                черный</p>
                            <p className="lPrice">Цена</p>
                            <div className="priceBtn">
                                <p className="price">320 ₽</p>
                                <button className="inCart">В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div className="Prod rightSide">
                        <img src={Pelmen} alt="Специи для курицы" className="prodImg"/>
                        <div className="prodDesc">
                            <p className="prodTitle">Пельмени домашние</p>
                            <p className="prodSub">Мясной фарш домашний(Свинина, говядина, курица, соль, перец),
                                тесто(мука, вода, соль)</p>
                            <p className="lPrice">Цена</p>
                            <div className="priceBtn">
                                <p className="price">450 ₽</p>
                                <button className="inCart">В корзину</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="prodRow">
                    <div className="Prod leftSide">
                        <img src={Hinkal} alt="Специи для курицы" className="prodImg"/>
                        <div className="prodDesc">
                            <p className="prodTitle">Хинкали домашние</p>
                            <p className="prodSub">Пшеничная мука, соль, телятина, говядина, сало, репчатый лук, чеснок,
                                молотый кумин, красный перец, кинза</p>
                            <p className="lPrice">Цена</p>
                            <div className="priceBtn">
                                <p className="price">430 ₽</p>
                                <button className="inCart">В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div className="Prod rightSide">
                        <img src={Tartar} alt="Специи для курицы" className="prodImg"/>
                        <div className="prodDesc">
                            <p className="prodTitle">Тартар</p>
                            <p className="prodSub">Говядина, горчица, французская соль морская, перец черный молотый,
                                соус табаско, каперсы маринованные, вустерширский соус, бальзамический соус, лук
                                красный, огурцы маринованные, багет, рукола, яйца перепелиные</p>
                            <p className="lPrice">Цена</p>
                            <div className="priceBtn">
                                <p className="price">150 ₽</p>
                                <button className="inCart">В корзину</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="prodRow">
                    <div className="Prod leftSide">
                        <img src={Hamon} alt="Специи для курицы" className="prodImg"/>
                        <div className="prodDesc">
                            <p className="prodTitle">Хамон</p>
                            <p className="prodSub">Свиной окорок, морская соль</p>
                            <p className="lPrice">Цена</p>
                            <div className="priceBtn">
                                <p className="price">1150 ₽</p>
                                <button className="inCart">В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div className="Prod rightSide">
                        <img src={Balik} alt="Специи для курицы" className="prodImg"/>
                        <div className="prodDesc">
                            <p className="prodTitle">Балык</p>
                            <p className="prodSub">Свинина, соль(мелкая), сахар, чеснок, перец(смесь разных молотых
                                перцев),хмели-сунели, молотый кориандр.</p>
                            <p className="lPrice">Цена</p>
                            <div className="priceBtn">
                                <p className="price">650 ₽</p>
                                <button className="inCart">В корзину</button>
                            </div>
                        </div>
                    </div>
                </div>


        </div>
    )
}

export default Main;