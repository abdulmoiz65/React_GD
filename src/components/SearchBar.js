import React from 'react';

function SearchBar() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 search-bar">
          <input type="text" className="form-control" placeholder="Search Graduate Directory..." />
          <div className="dropdown">
            <button className="btn btn-light dropdown-toggle px-5" type="button" id="filterDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
              Filter Data
            </button>
            <ul className="dropdown-menu keep-open" aria-labelledby="filterDropdown">
              <li>
                <div className="d-flex align-items-center">
                  <input type="checkbox" className="parent-checkbox department" id="dept" />
                  <label htmlFor="dept">Computer Science Department</label>
                  <i className="fas fa-chevron-down toggle-icon"></i>
                </div>
                <ul className="nested">
                  <li>
                    <div className="d-flex align-items-center">
                      <input type="checkbox" className="child-checkbox program" id="program" />
                      <label htmlFor="program">BSc in Artificial Intelligence</label>
                      <i className="fas fa-chevron-down toggle-icon"></i>
                    </div>
                    <ul className="nested">
                      <li>
                        <input type="checkbox" className="sub-child-checkbox semester" id="semester1" />
                        <label htmlFor="semester1">Spring 2024</label>
                      </li>
                      <li>
                        <input type="checkbox" className="sub-child-checkbox semester" id="semester2" />
                        <label htmlFor="semester2">Spring 2025</label>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <button className="btn btn-dark">Search</button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
