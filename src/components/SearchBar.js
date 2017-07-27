import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..."
                       onChange={this.props.changeCheckbox}
                       value={this.props.filterText}
                       onSubmit={e => { e.preventDefault(); }}
                />
                <p>
                    <input type="checkbox" checked={this.props.inStockOnly} />
                    {' '}Only show products in stock
                </p>
            </form>
        );
    }
}

export default SearchBar