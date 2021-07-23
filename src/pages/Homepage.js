import React from 'react';
import {Link} from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const REVIEWS = gql`
  query GetReviews {
    reviews {
      title,
      body,
      rating,
      id
    }
  }
`

const Homepage = (props) => {
  const { data, loading, error, } = useQuery(REVIEWS);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;
    return (
        <div>
          {data && data.reviews.map(review => (
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