import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    loading: false,
    error: null,
    searchTerm: ""
  }

  updateTerm = event => {
    const { target :
      {value}} = event;
      this.setState({
        searchTerm: value
      })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  }

  searchByTerm = async () => {
    this.setState({loading: true})
    const { searchTerm } = this.state;
    try {
      const {
        data: { results: movieResults }
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm);
      this.setState({
        movieResults,
        tvResults
      })
    } catch {
      this.setState({
        error: "can't find results."
      })
    } finally {
      this.setState({
        loading: false
      })
    }
  }

  render() {
    const { movieResults, tvResults, loading, error, searchTerm } = this.state
    return <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      loading={loading}
      error={error}
      searchTerm={searchTerm}
      handleSubmit={this.handleSubmit}
      updateTerm={this.updateTerm}
    />
  }
}