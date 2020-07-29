import React, { Component } from "react";
import "./Detail.css";

class Detail extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state === undefined) {
      return null;
    }
    return (
      <div className="article" key={location.state.id}>
        <img
          src={location.state.poster}
          alt={location.state.poster}
          name={location.state.poster}
        />
        <div className="article__movieInfo">
          <h3>{location.state.title}</h3>
          <h4>{location.state.year}</h4>
          <ul>
            {location.state.genres.map((genre, index) => {
              return <li key={index}>{genre}</li>;
            })}
          </ul>
          <div>{location.state.summary}</div>
        </div>
      </div>
    );
  }
}
export default Detail;
