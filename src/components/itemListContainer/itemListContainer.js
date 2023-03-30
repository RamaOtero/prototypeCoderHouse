import './itemListContainer.css'
import React from 'react';
import ItemList from './ItemList/ItemList.js';
import { useState, useEffect } from "react";
import { productList } from '../Products/products'

const ItemListContainer = ({greetings}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout (() => {
    const data = new Promise((resolve, reject) => {
        resolve(productList);
    });
    data.then((data) => {
        setItems(data);
    });
    data.catch((err) => {
        console.log(err);
    });
  }, 2000);
 }, []);

  return (
    <div className='greetingDiv'>
        <span className='greeting'>
            New Arrival | {greetings}
        </span>
            <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer
