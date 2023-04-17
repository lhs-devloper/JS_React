import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function FilterProductTable(props){
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    function handleFilterTextChange(filterText){
        setFilterText(filterText)
    } 
    function handleInStockChnage(e){
        setInStockOnly(!inStockOnly)
    }
    return (
        <div className="product_table">
            <SearchBar 
                filterText = {filterText}
                inStockOnly = {inStockOnly}
                onFilterTextChange = {handleFilterTextChange}
                onInStockChnage = {handleInStockChnage}
            />
            <ProductTable 
                products={props.products}
                filterText = {filterText}
                inStockOnly = {inStockOnly}
            />
        </div>
    )
}

export default FilterProductTable;