import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Helmet from "react-helmet";

const Image = Styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center center;
  height: 100%;
  border-radius: 5px;
`;
const Title = Styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;


const Container = Styled.div`
  padding: 10px;
  width: 98vw;
  height: calc(100vh - 80px);
  display:grid;
  grid-template-columns: repeat(auto-fit, 350px);
  grid-auto-rows: 350px;
  gap: 60px;                                             
`;

const Content = Styled.div`
  height: 100%;
  margin-bottom: 50px;
`;






const CollectionPresenter = ({ loading, error, result }) => (
  <>
    <Helmet>
      <title>Loading...</title>
    </Helmet>
    {loading
      ? <Loader />
      : (
        <Container length={result.length}>
          <Helmet>
            <title>{result.map(data => (
              data.original_title))}
            </title>
          </Helmet>
          {result.map(data => (
            <Content key={data.id}>
              <Title>{data.original_title}</Title>
              <Image
                imageUrl={data.poster_path && `https://image.tmdb.org/t/p/w300${data.poster_path}`}
              />
            </Content>
          ))}
          {error && <Message text="can't find any collection" color="#e74c3c" />}
        </Container>
      )}
  </>
)

export default CollectionPresenter;

CollectionPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  result: PropTypes.array
}