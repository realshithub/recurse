import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends Component {
    constructor(props){
        super(props);
        this.displayInStockOnly = this.props.inStockOnly;
        console.log(this.display);
    }

    // Methods
    getProductArray() {
        var self = this;
        var rows = [];
        var lastCategory = null;
        var products = this.props.products;

        function get_product_and_category_title(product) {
            // At the start the category is null, and the category for the first item is Sporting Goods.
            // The are not equal, therefore the title is printed out.
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
            }
            // If we should display all items that are instock, or all items if  displayInStockOnly is false
            var display = !self.displayInStockOnly || product.stocked;
            if (display) {
                rows.push(<ProductRow product={product.name}
                      stocked={product.stocked}
                      price={product.price}
                      key={product.name}/>);
            }

            // The category will now be set to "Sporting Goods". The title row will be printed
            // when it changes to "electronics.
            lastCategory = product.category;
        }

        products.forEach(get_product_and_category_title);
        return rows
    }

    render() {
        var rows = this.getProductArray();
        return (
            <div>
                {this.props.filterText}

                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable