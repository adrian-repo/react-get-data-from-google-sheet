import React, { Component } from 'react';
import 'tachyons';

class Hello extends Component {

    render() {

        return (
                <div className="fl w-100 tc bb bg-blue">
                    <h1 className="f1 white">Hello World</h1>
                    <p>{this.props.greeting}</p>
                </div>

        )
    }


}

export default Hello;