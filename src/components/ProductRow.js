import React from 'react'

class ProductRow extends React.Component {
    /**
     * This Component is responsible for the Product Rows.
     * Properties:
     * product: <String> Product Name, eg a Basketball, an iPhone
     * price: <String> The Price
     * stocked: <Boolean> Is the product Stocked
     **/
    constructor(props){
        super(props);
        // Data
        this.price = this.props.price;
        this.productName = this.props.product;
        this.isStocked = this.props.stocked;
        // Computed
        this.name = this.isAvailable();
    }
    // Methods
    isAvailable() {
        let redStyle = {color: 'red'};
        let redString = <span style={redStyle}> {this.productName} </span>;
        return this.isStocked ? this.productName : redString;
    }
    render() {
        // Data
        return (
            <tr>
                <td>{this.name}</td>
                <td>{this.price}</td>
            </tr>
        );
    }
}

export default ProductRow