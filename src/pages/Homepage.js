import React from 'react';
import {useFetch} from "../hooks";
import {Link} from "react-router-dom";

const Homepage = (props) => {
  const { data, loading, error} = useFetch('http://localhost:1337/reviews');

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;
    return (
        <div>
          {data && data.map(review => (
              <div key={review.id} className="review-card">
                <div className="rating">{review.rating}</div>
                <h2>{review.title}</h2>

                <small>console list</small>

                <p>{review.body.substring(0, 200)} ...</p>
                <Link to={`/details/${review.id}`}>Read more</Link>
              </div>
          ))}
        </div>
    );
}

export default Homepage;