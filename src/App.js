import React from 'react';
import logo from './img/logo.svg';
import Button from './components/Button';
import './App.scss';

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href=".">
                <img src={logo}
                     width="30"
                     height="30"
                     alt="logo" />
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                    aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href=".">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://reactjs.org">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="https://reactjs.org">Disabled</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link-different" href="https://reactjs.org">Different</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu" aria-labelledby="dropdown01">
                            <a className="dropdown-item" href="https://reactjs.org">Action</a>
                            <a className="dropdown-item" href="https://reactjs.org">Another action</a>
                            <a className="dropdown-item" href="https://reactjs.org">Something else here</a>
                        </div>
                    </li>
                </ul>

                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />

                    <Button className="btn-success my-2 my-sm-0 btn-custom" type="submit">Search</Button>
                </form>
            </div>
        </nav>

        <div className="container">
            <div style={{paddingTop: '120px', textAlign: 'center'}}>
                <h1>Hello Earth!</h1>

                <p className="lead">Remove this content or build upon it.
                    <br />
                    For documentation and examples: <a href="http://getbootstrap.com/"
                                                       target="_blank"
                                                       rel="noopener noreferrer">getbootstrap.com</a>
                    <br />
                    Here is a <a href="newpage.html">link to another page</a>
                </p>
            </div>
        </div>
    </div>
  );
}

export default App;
