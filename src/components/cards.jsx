import React, { Component } from "react";
import "./cards.css";

class Cards extends Component {
  constructor() {
    super();
    this.changeCounterOld = this.changeCounterOld.bind(this);
  }

  state = {
    counter: 0,
    myText: "demo text",
    image: {
      url:
        "https://pixabay.com/get/g3a93ef01c034d09bffa25654f6230688b1e4e88d344ff12b9bbe6de17a7d4a1d79bbc7b921f27b1a267a8dfdaf3f0b61_640.jpg",
      alt: "Car Image",
    },
    thumb: "img-thumbnail",
    img: "img",
    // iteration
    nums: [10, 20, 30, 40],
    cards: [
      { id: 1, title: "Card 1", article: "Text demo 1" },
      { id: 2, title: "Card 2", article: "Text demo 2" },
      { id: 3, title: "Card 3", article: "Text demo 3" },
    ],
    users: [
      { id: 1, name: "Avi Cohen", email: "avi@gmail.com" },
      { id: 2, name: "Moshe Levi", email: "mosh@gmail.com" },
      { id: 3, name: "Haim Israeli", email: "haim@gmail.com" },
    ],
    noUsers: [],
  };

  styles = {
    fontSize: 40,
    color: "red",
  };

  render() {
    return (
      <React.Fragment>
        <h3 style={this.styles}>My head line</h3>
        <p style={{ color: "blue", fontWeight: "bold" }}>{this.getText()}</p>
        <div className="className">
          {this.demoFunk()} {this.withConst()}
        </div>
                
        <img
          className={this.state.thumb}
          src={this.state.image.url}
          alt={this.state.image.alt}
        />
        {/* iteration */}
        <ul>
          {this.state.nums.map((num) => (
            <li key={num}>{num}</li>
          ))}
        </ul>
        {/* array of objects */}
        <div className="container">
          <div className="row">
            {this.state.cards.map((card) => (
              <div className="col-12 mt-3" key={card.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.article}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* render table */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* conditional render */}
        <div className="container">
          <div className="row">
            <div className="col-12">{this.renderUsers(this.state.noUsers)}</div>
          </div>
        </div>
        {/* events */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <button type="button" onClick={() => alert("work!")}>
                just an alert
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <button type="button" onClick={this.myFunk}>
                just an alert
              </button>
            </div>
          </div>
        </div>
        {/* binding this */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <span className="mr-3">{this.state.counter}</span>
              <button type="button" onClick={this.changeCounter}>
                +
              </button>
              <button type="button" onClick={this.changeCounterOld}>
                + old
              </button>
              <button type="button" onClick={this.changeFirstUserId}>
                change first user id
              </button>
            </div>
          </div>
        </div>
        {/* remove user */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          onClick={() => this.removeUser(this.state.users, user.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  changeCounter = () => {
    let { counter } = this.state;
    counter++;
    this.setState({ counter });
  };

  changeCounterOld() {
    let { counter } = this.state;
    counter++;
    this.setState({ counter });
  }

  changeFirstUserId = () => {
    let { users } = this.state;
    users[0].id = 99;
    this.setState({ users });
  };
  myFunk() {
    alert("work!");
  }

  getText() {
    const { myText } = this.state;
    return myText.length > 0 ? myText : "No text data";
  }
  demoFunk() {
    return <p>more para demo text article</p>;
  }

  withConst() {
    const el = <span>some value here</span>;
    return el;
  }

  renderUsers(users) {
    if (users.length === 0) return <p>No Users found...</p>;

    return (
      <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          onClick={() => this.removeUser(this.state.users, user.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      
    );
  }

  removeUser = (users, userId) => {
    users = users.filter((user) => user.id !== userId);
    this.setState({ users });
  };
}
export default Cards;
