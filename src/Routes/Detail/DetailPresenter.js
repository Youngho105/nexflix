import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'

const Container = Styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  position:relative;
`;

const Backdrop = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position :center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0
`;

const Content = Styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;

const Cover = Styled.div`
  background-image:url(${props => props.bgImage});
  background-size : cover;
  background-position: center center;
  width: 30%;
  height: 100%;
  margin-right: 20px;
  @media (max-width:768px) {
    display:none;
  }
`;

const Data = Styled.div`
  position: relative;
  width: 70%;
  padding-top: 10px;
  @media (max-width:768px) {
    width: 100%;
    padding: 20px;
  }
`;

const Title = Styled.h3`
  font-size :30px;
  font-weight: 600;
  @media (max-width:768px) {
    font-size:20px;
  }
`;

const ItemContainer = Styled.div`
  margin: 7px 0;  
`;

const Item = Styled.span`
  font-size: 13px;
`;

const Imdb = Styled.a`
`;

const Divider = Styled.span`
  margin: 0 5px;
`;

const OverView = Styled.p`
  opacity:0.8;
  font-size: 12px;
  line-height: 1.5;
  width: 70%;
  margin-bottom: 20px;
`;

const Video = Styled.a`
  font-size: 16px;
  color:#e74c3c;
  &:hover {
    color: red;
    font-size: 17px;
  }
`;

const CollectionContainer = Styled.div`
  position: absolute;
  bottom :10px;
  &:hover{transform: scale(1.1)};
`;

const CollectionPoster = Styled.div`
  background-image: url(${props => props.collectionPoster});
  background-position: center center;
  background-size: cover;
  width: 300px;
  height: 350px;
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const Collection = Styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  
  @media (max-width:768px) {
    font-size: 15px;
  }
`;

const VideoPlayer = Styled.div`
  position: absolute;
  bottom :10px;
  width: 300px;
  height: 350px;
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;



const DetailPresenter = ({ loading, result, error }) =>
  loading ? (
    <>
      <Helmet><title>loading</title></Helmet>
      <Loader />
    </>
  ) : (
      <Container>
        <Helmet>
          <title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </title>
          <script src="https://kit.fontawesome.com/a1e9a9da77.js" crossorigin="anonymous"></script>
        </Helmet>
        <Backdrop
          bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
        />
        <Content>
          <Cover bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/photo-1472491235688-bdc81a63246e.jpg")
          }
          />
          <Data>
            <Title>
              {result.original_title
                ? result.original_title
                : result.original_name}
            </Title>
            <ItemContainer>
              <Item>
                {result.release_date
                  ? result.release_date.substring(0, 4)
                  : result.first_air_date.substring(0, 4)}
              </Item>
              <Divider>-</Divider>
              <Item>
                {result.runtime ? result.runtime : result.episode_run_time[0]}min
              </Item>
              <Divider>-</Divider>
              <Item>
                {result.genres &&
                  result.genres.map((genre, index) => (
                    index === result.genres.length - 1
                      ? genre.name
                      : `${genre.name} / `
                  ))
                }
              </Item>
              <Divider>-</Divider>
              <Imdb
                target="_blank" rel="noopener noreferrer"
                href={result.imdb_id && `https://www.imdb.com/title/${result.imdb_id}`}
              >
                <i className="fas fa-crown"></i> IMDB
              </Imdb>
            </ItemContainer>
            <OverView>
              {result.overview}
            </OverView>
            <Video
              target="_blank"
              href={
                result.videos &&
                `https://www.youtube.com/watch?v=${result.videos.results[0].key}`}
            >
              {result.videos ? "Trailer (youtube)" : null}
            </Video>

            {result.belongs_to_collection
              ? <CollectionContainer>
                <Collection>
                  {result.belongs_to_collection && `${result.belongs_to_collection.name}s`}
                </Collection>
                <Link to={`/collection/${result.belongs_to_collection.id}`}>
                  <CollectionPoster
                    collectionPoster={`https://image.tmdb.org/t/p/w300${result.belongs_to_collection.poster_path}`}
                  >
                  </CollectionPoster>
                </Link>
              </CollectionContainer>
              : <VideoPlayer>
                <ReactPlayer controls url={result.videos && `https://www.youtube.com/watch?v=${result.videos.results[0].key}`} />
              </VideoPlayer>}
          </Data>
        </Content>
      </Container>
    )

DetailPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  result: PropTypes.object,
  error: PropTypes.string
};

export default DetailPresenter;