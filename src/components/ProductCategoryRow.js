import React from 'react'

class ProductCategoryRow extends React.Component {
    /**
     * This Component is responsible for the Product Category.
     * Properties:
     * category: <String> Displays what category the item belongs to, eg: Sporting Goods.
     **/
    render() {
        let category = this.props.category;
        return (
            <tr>
                <th colSpan="2">{category}</th>
            </tr>
        )
    }
}

export default ProductCategoryRow;