import { getAllReviews } from "../util/api";
import { useState,useEffect } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = ()=>{
   const [reviews, setReviews]=useState([])
   const [loading, setLoading]=useState(true)
   useEffect(()=>{
    getAllReviews().then((allReviews)=>{
        console.log(allReviews)
        setReviews(allReviews.reviewsArr)
        setLoading(false)
    })
   },[])
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