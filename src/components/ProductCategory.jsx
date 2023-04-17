import React from "react";

function ProductCategory(props){
    const category = props.category;
    return(
        <tr>
            <td colSpan={2} className="impact">{category}</td>
        </tr>
    )
}

export default ProductCategory;