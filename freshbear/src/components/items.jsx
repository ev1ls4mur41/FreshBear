import React, { Component } from "react";
import Item from "./item";

export class Items extends Component {
    render() {
        return(
            <main>
                <div className="container">
                {this.props.items.map(el => (
                    <Item key={el.id} item={el}/>
                ))}
                </div>
            </main>
        )
    }
}

export default Items