import React, { Component } from "react";

export class Item extends Component{
    render() {
        return(
            <div className='Item'>
                <img src={"./img/" + this.props.item.img}  className="prodImg"/>
                <h2 className="prodTitle">{this.props.item.title}</h2>
                <p className="prodSub">{this.props.item.desc}</p>
                <p className="lPrice">Цена</p>
                <p className="price">{this.props.item.price}₽</p>
                <button className="inCart">В корзину</button>
            </div>
        )
    }
}

export default Item