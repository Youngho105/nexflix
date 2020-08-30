import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader"
import Message from "Components/Message"
import Section from "Components/Section"
import Poster from "Components/Poster"
import Helmet from "react-helmet"

const Container = Styled.div`
  padding: 20px;
`;

const Form = Styled.form`
  margin-bottom: 50px;
  width: 100%;
  `;

const Input = Styled.input`
  all: unset;
  font-size: 20px;
  width: 100%;
`;

const SearchPresenter = ({ searchTerm, handleSubmit, movieResults, tvResults, error, loading, updateTerm }) => (
  <Container>
    <Helmet>
      <title>Search | Nomflix</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Search anything you want" value={searchTerm} onChange={updateTerm} />
    </Form>
    {loading ? <Loader /> : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map(tv => (
              <Poster
                key={tv.id}
                id={tv.id}
                imageUrl={tv.poster_path}
                title={tv.original_name}
                rating={tv.vote_average}
                year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {error && <Message text="error" color="e74c3c" />}
        {movieResults && tvResults && movieResults.length === 0 && tvResults.length === 0 &&
          <Message text="Nothing found" color="#95a5a6" />}
      </>
    )}
  </Container>
)

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
}

export default SearchPresenter;