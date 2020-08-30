import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = Styled.div`
  padding:20px;
`;

const HomePresenter = ({ nowPlaying, upComing, popular, error, loading }) => (
  <>
    <Helmet>
      <title>Movies | Nexflix</title>
    </Helmet>
    {loading
      ? <Loader />
      : (<Container>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="nowPlaying">
            {nowPlaying.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            )
            )}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="popular">
            {popular.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            )
            )}
          </Section>
        )}
        {upComing && upComing.length > 0 && (
          <Section title="upComing">
            {upComing.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            )
            )}
          </Section>
        )}
        {error && <Message text="error found" color="#c0392b" />}
      </Container>
      )
    }
  </>
)



HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upComing: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
}

export default HomePresenter;