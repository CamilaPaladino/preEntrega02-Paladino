import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";



function ItemListContainer({greatings}) {
    const [productos, setProducts] = useState([]);
    const {categoryId} = useParams()

    useEffect(()=>{
      const asyncFunctions = categoryId ? getProductsByCategory : getProducts
      asyncFunctions(categoryId)
          .then(data => setProducts(data))
  }, [categoryId])
return (
  <>
      <div className="containerGral mb-3">
        <h2 className="text-center mb-5">{greatings}</h2>
        <ItemList products={productos} />
      </div>
  </>
)
}


export default ItemListContainer