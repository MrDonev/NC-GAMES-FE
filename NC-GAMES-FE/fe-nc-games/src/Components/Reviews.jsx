import { getAllReviews } from "../util/api";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";

const Reviews = ()=>{
  const {category}=useParams()
   const [reviews, setReviews]=useState([])
   const [loading, setLoading]=useState(true)

   useEffect(()=>{
    getAllReviews(category).then((allReviews)=>{
        setReviews(allReviews.reviewsArr)
        setLoading(false)
    }).catch((err)=>{
      console.dir(err)
    })
   },[category])
    return ( (loading) ? <p>...Loading</p> :
    <main className="Main">
        <ul>
      {reviews.map(review=>{
       return <li key={review.title}><ReviewCard reviewObj={review}/></li>
      })}
      </ul>
    </main>
        )
}

export default Reviews;