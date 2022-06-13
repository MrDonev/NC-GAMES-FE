import axios from 'axios';

export const baseUrl= axios.create({
    baseURL:'https://donev-nc-games.herokuapp.com/api'
})

export const getAllReviews = ()=>{
    return baseUrl.get('/reviews').then((res)=>{
        return res.data
    })
}