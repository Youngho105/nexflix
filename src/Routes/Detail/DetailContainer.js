import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "api";

export default class extends React.Component {
  state = {
    loading: true,
    result: null,
    error: null
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push },
      location: { pathname }
    } = this.props;
    this.isMovie = pathname.includes("/movie/");
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      push("/");
    }
    let result = null;
    try {
      if (this.isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      this.setState({
        error: "can't find any information"
      })
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { loading, result, error } = this.state;
    console.log(result);
    return (
      <DetailPresenter
        loading={loading}
        result={result}
        error={error}
      />
    )
  }
}