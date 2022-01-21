import React, { Component } from "react";
import "./css/User.css";
export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.defaultOpen,
    };
    this.handleClick = this.handleClick.bind(this);
  }

   componentDidUpdate(prevProps, prevState){
       if(prevState.isOpen !== this.props.defaultOpen){
          this.setState({isOpen: this.props.defaultOpen})
       }
   }

  render() {
    return (
      <article>
        <button className="btn-delete" onClick={this.props.deleteUser}>Delete</button>
        <header onClick={this.handleClick}>
          <h2>{this.props.username}</h2>
          <p>{this.props.name}</p>
        </header>
        {this.state.isOpen && (
          <section>
            <div className="adress">
              <h3>address</h3>
              <ul>{this.objectMapper(this.props.address)}</ul>
            </div>
            <div className="company">
              <h3>company</h3>
              <ul>{this.objectMapper(this.props.company)}</ul>
            </div>
            <p>
              <span className="keySpan">email:</span>{" "}
              <a href={"mailto:" + this.props.email}>{this.props.email}</a>
            </p>
            <p>
              <span className="keySpan">phone:</span>{" "}
              <a href={"tel:" + this.props.website}>{this.props.phone}</a>
            </p>
            <p>
              <span className="keySpan">website:</span>{" "}
              <a href={this.props.website}>{this.props.website}</a>
            </p>
          </section>
        )}
      </article>
    );
  }

  objectMapper(obj) {
    const entries = obj && Object.entries(obj);
    return (
      entries &&
      entries.map((e, i) => {
        const value =
          typeof e[1] === "object" ? <ul>{this.objectMapper(e[1])}</ul> : e[1];
        return (
          <li key={i}>
            <span className="keySpan">{e[0]}:</span> {value}
          </li>
        );
      })
    );
  }

  handleClick() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }
}
