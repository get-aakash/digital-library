import React from 'react'

const topRating = 5
const Ratings = ({ ratings }) => {
    const diff = topRating - +ratings

    const rating = new Array(+ratings).fill(<i className="fa-solid fa-star text-warning"></i>)
    const diffRtn = new Array(diff).fill(<i className="fa-solid fa-star"></i>)
    console.log(rating, diffRtn)
    return (
        <div className="ratings ">
            {rating.map((itm) => itm)}
            {diffRtn.map((itm) => itm)}
        </div>
    )
}

export default Ratings
