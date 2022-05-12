import React, { Component } from 'react';
import products_data from './Data';
class Tach_file extends Component {
    constructor(props){
        var arr = products_data();
        super(props);
        this.state={arr};
    }
    render() {
        return (
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            {this.state.arr.map((key) => (
              <div>
                {
                  <div className="product">
                    <div className="text"></div>
                    <div className="p-img">
                      <img src={key.img} with={200} height={200} />
                    </div>
                    <div className="p-name">
                      <a href="item.html">{key.name}</a>
                    </div>
                    <div className="text">
                      <div className="p-cart">{key.price}</div>
                      <div className="p-price">Please Call</div>
                      <input
                        type="button"
                        className="button"
                        name="add"
                        defaultValue="Add to cart"
                      />
                    </div>
                    <div className="clear" />
                  </div>
                }
              </div>
            ))}
          </div>
        );
    }
}

export default Tach_file;