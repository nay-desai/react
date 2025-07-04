import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        <div class="form-check form-switch">
</div>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.tooglemode} type="checkbox" role="switch" id="switchCheckDefault"></input>
  <label className="form-check-label" htmlFor="switchCheckDefault">{props.text}</label>
</div>

 <div className={`form-check form-switch text-${props.mode==='light'?'red':'light'}`}>
  <input className="form-check-input" onClick={props.tooglemode1} type="checkbox" role="switch" id="switchCheckDefault"></input>
  <label className="form-check-label" htmlFor="switchCheckDefault">{props.text}</label>
</div>

 <div className={`form-check form-switch text-${props.mode==='light'?'purple':'light'}`}>
  <input className="form-check-input" onClick={props.tooglemode2} type="checkbox" role="switch" id="switchCheckDefault"></input>
  <label className="form-check-label" htmlFor="switchCheckDefault">{props.text}</label>
</div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired
, aboutText: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About text here"
};
