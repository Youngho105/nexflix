import React from "react";
import CollectionPresenter from "./CollectionPresenter";
import { moviesApi } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    error: null,
    result: null
  }

  async componentDidMount() {
    const {
      match: {
        params: { collectionId }
      },
      history: { push }
    } = this.props;
    const parsedId = parseInt(collectionId);
    if (isNaN(parsedId)) {
      push('/');
    }
    try {
      const { data: { parts: result } } = await moviesApi.collection(parsedId);
      this.setState({ result });
    } catch {
      this.setState({ error: "Can't find any collections" })
    } finally {
      this.setState({
        loading: false
      })
    }
  }

  render() {
    const { loading, error, result } = this.state;
    return (
      <CollectionPresenter
        loading={loading}
        error={error}
        result={result}
      />
    )
  }
} 