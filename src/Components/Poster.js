import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = Styled.div`
  font-size: 12px;
`;

const Image = Styled.div`
  background-image: url(${props => props.bgUrl});
  background-position: center center;
  background-size: cover;
  height: 180px;
`;

const Rating = Styled.span`
  position: absolute;
  bottom : 10px;
  right: 10px;
  color: white;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
  `;

const ImageContainer = Styled.div`
  cursor: pointer;
  position: relative;
  margin-bottom : 10px;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
  transition: opacity 300ms ease-in-out;
`;

const Title = Styled.h3`
  display: block;
  font-size; 20px;
  font-weight: 600;
  margin-bottom: 3px;
`;


const Year = Styled.span`
  color: #FFFFFF50;
`;


const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w500${imageUrl}`
              : require("assets/photo-1472491235688-bdc81a63246e.jpg")
          }
        />
        <Rating>{rating} / 10</Rating>
      </ImageContainer>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
)

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool
}

export default Poster;