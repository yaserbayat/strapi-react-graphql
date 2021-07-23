import React from 'react';
import {useParams} from 'react-router-dom';
import { useQuery, gql } from "@apollo/client";

const REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
      id,
      title,
      body,
      rating 
    }
  }
`;

const ReviewDetails = (props) => {
  const { id } = useParams();
  const { data, error, loading } = useQuery(REVIEW, {variables: {id}});

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

    return (
        <div className="review-card">
          <div className="rating">{data.review?.rating}</div>
          <h2>{data.review?.title}</h2>

          <small>console list</small>
          <p>{data.review?.body}</p>

        </div>
    );
}

export default ReviewDetails;