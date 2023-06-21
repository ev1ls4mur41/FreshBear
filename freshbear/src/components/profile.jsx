import React from "react";
import profPic from "../images/profPic.svg";
import profileIcon from "../images/profileIco.svg"
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';


function Profile() {
    const defaultState = {
        center: [47.409693, 40.084166],
        zoom: 15,
    };

    return(
        <div className="profile">
            <div className="profInfo">
            <h1  className="profTitle">Профиль</h1>
            {/*<img src={profPic} alt="prof" className="profPic"/>*/}

                <div className="profLeftSide">
                    <p>Имя</p>
                    <p>Электронная почта</p>
                    <p>Пароль</p>
                    <button className="history">История заказов</button>
                    <p className="profNo"> У вас еще нет заказов</p>
                </div>
                <div className="profRightSide">
                    <p>Игорь</p>
                    <p>misakinigor@gmail.com</p>
                    <p>**************</p>
                    <button className="adress">Адреса</button>
                    <p>Ростов-на-Дону, ул. Белорусская 188/2</p>
                    <p>Новочеркасск, ул. Михайловская 103а</p>
                </div>

            </div>
            <div className="Map">
            <YMaps>
                <Map defaultState={defaultState}  className="mapMain" >
                    <Placemark geometry={[47.409693, 40.084166]} />
                </Map>
            </YMaps>
            </div>
        </div>
    )
}

export default Profile;