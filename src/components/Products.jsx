import React, { useState, useEffect } from "react";
import "./products.css";
import { useProductContext } from "../context/ProductContext";
import Product from "./Product";

export const Products = () => {
  const { isLoading, products } = useProductContext();

  const [searchInput, setSearchInput] = useState("");
  const [items, setItems] = useState(products);
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  useEffect(() => {
    if (selectedOption === "lowest" || selectedOption === "a-z") {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      setItems(sortedProducts);
    } else if (selectedOption === "higest" || selectedOption === "z-a") {
      const sortedProducts = [...products].sort((a, b) => b.price - a.price);
      setItems(sortedProducts);
    }
  }, [selectedOption, products]);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    // Filter the products based on the search input
    const filteredProducts = products.filter((product) =>
      product.category.toLowerCase().includes(inputValue.toLowerCase())
    );

    setItems(filteredProducts);
  };

  const filterButton = new Set(
    products.map((curElem) => {
      return curElem.category;
    })
  );

  const handleData = (cat) => {
    const updatedItems = products.filter((ele) => {
      return ele.category === cat;
    });
    setItems(updatedItems);
  };

  return (
    <div className="products-container">
      <div className="products-sidebar">
        <div className="search-items">
          <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={handleInputChange}
          />
        </div>
        <h2>Category</h2>
        <div className="filter-buttons">
          <button onClick={() => setItems(products)} className="filter-button">
            All
          </button>

          {Array.from(filterButton).map((ele) => (
            <button
              onClick={() => handleData(ele)}
              className="filter-button"
              key={ele}
            >
              {ele}
            </button>
          ))}
        </div>
        <button onClick={() => setItems(products)} className="filter-button">
          <h2 className="clearfilter">Clear Filter</h2>
        </button>
      </div>
      <div className="right-side">
        <div className="filteration">
          <div className="count-items">Total Items: {items.length}</div>

          <div className="select-items">
            <form action="#">
              <label htmlFor="sort"></label>
              <select value={selectedOption} onChange={handleOptionChange}>
                <option value="lowest">Price(lowest)</option>
                <option value="higest">Price(higest)</option>
                <option value="a-z">Price(a-z)</option>
                <option value="z-a">Price(z-a)</option>
              </select>
            </form>
          </div>
        </div>

        <div className="grid grid-three-column">
          {items.map((curElem) => (
            <Product key={curElem.id} {...curElem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
