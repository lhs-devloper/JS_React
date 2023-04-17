import React from "react";

function SearchBar(props){
    function change(e){
        props.onFilterTextChange(e.target.value);
    }
    function click(e){
        props.onInStockChnage(e);
    }
    return (
        <div>
            <form className="form">
                <input type="text" placeholder="Search..." value={props.filterText} onChange={change}></input>
                <label for="check">
                    <input type="checkbox" id="check" checked={props.inStockOnly} onChange={click}></input>
                    Only show products in stock
                </label>
                
            </form>
        </div>
    )
}

export default SearchBar;