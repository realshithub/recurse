import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {
    constructor(props){
        super(props);
        this.changeCheckbox = this.changeCheckbox.bind(this);
        this.preventMe = this.preventMe.bind(this);
        this.state = {
            filterText: "Nagger",
            inStockOnly: false
        }
    }
    preventMe(element){
        element.preventDefault();
        console.log("YOYOYO");
    }
    changeCheckbox(element) {
        element.preventDefault();
        let inputValue = element.target.value;
        this.setState({
            filterText: inputValue
        });
        console.log(this.state.filterText);
    };
    render() {
        var products = this.props.products;
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    changeCheckbox={this.changeCheckbox}
                    preventMe={this.preventMe}
                />
                <ProductTable
                    products={products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
}

export default FilterableProductTable;

