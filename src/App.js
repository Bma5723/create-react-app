import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="buttons">
      <button className="duplicate">Duplicate last card</button>
      <button className="modifytitle">Change Name</button>
      <button id="deletelastcard">Delete</button>
      <div className="btn-wrapper">
        <a href="https://gopsusports.com/sports/football/roster/nicholas--singleton/14065">
          Nicholas Singleton
        </a>
      </div>
      <div className="wrapper">
        <div className="container">
          <img
            className="image"
            src="https://www.inquirer.com/resizer/JVse2HXoMM-7NcrCYLy8QPlLBnY=/800x533/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/pmn/GPCW7HKIGBB35GT5JNSHOYPF7Y.jpeg"
            alt="Nicholas Singleton"
          />
          <div className="header">
            <h3>Nicholas Singleton</h3>
            <h4>PSU Football player</h4>
          </div>
          <details className="details">
            <summary>Career Stats</summary>
            <div>
              <ul>
                <li>Big Ten's Freshman of the Year in 2022..</li>
                <li>Penn State running back</li>
              </ul>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}

export default App;
