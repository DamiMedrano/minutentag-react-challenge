/**
 * You have a Grocery component, which receives a list of products, each one with name and votes.
 * - The app should render an unordered list, with a list item for each product.
 * - Products can be upvoted or downvoted.
 * By appropriately using React state and props, implement the upvote/downvote logic. Keep the state in the topmost component, while the Product component should accept props.
 *
 * For example, passing the following array as products prop to Grocery
 * [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]
 * and clicking the '+' button next to the Oranges should result in HTML like:
 *
 *   <ul>
 *     <li>
 *       <span>Oranges - votes: 1</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *     <li>
 *       <span>Bananas - votes: 0</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *   </ul>
 */

import React, { useState } from "react";

function Product({ name, votes, onUpvote, onDownvote }) {
  return (
    <li style={{width: 200, display: "flex", justifyContent: "space-between"}}>
      <span>
        {name} - votes: {votes}
      </span>
      <div>
        <button onClick={onUpvote}>+</button>
        <button onClick={onDownvote}>-</button>
      </div>
      
    </li>
  );
}

export function Grocery({ products }) {
  const [productList, setProductList] = useState(products);

  const handleUpvote = (index) => {
    const updatedProducts = [...productList];
    updatedProducts[index].votes++;
    setProductList(updatedProducts);
  };

  const handleDownvote = (index) => {
    const updatedProducts = [...productList];
    updatedProducts[index].votes--;
    setProductList(updatedProducts);
  };

  return (
    <div className="list-container">
       <ul>
        {productList.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            votes={product.votes}
            onUpvote={() => handleUpvote(index)}
            onDownvote={() => handleDownvote(index)}
          />
        ))}
      </ul>
    </div>
   
  );
}
