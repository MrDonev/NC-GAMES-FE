import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "../util/api";

const Categories=()=>{
const [allCategories, setAllCategories]=useState([]);
const [loading, setLoading]=useState(true);
useEffect(()=>{
    getAllCategories().then(({categories})=>{
      setAllCategories(categories)
      setLoading(false)
      console.log(`use effect`)
    })
},[loading])
return ( (loading) ? <p>...Loading</p> :
<main className="Main">
    <ul >
  {allCategories.map(category=>{
   return <li key={category.slug} className='ReviewCard'>
    <p>Category: {category.slug}</p>
    <p>Description: {category.description}</p>
   <Link to={`/reviews/${category.slug}`}>Select</Link>
   </li>
  })}
  </ul>
</main>
    )
}

export default Categories;