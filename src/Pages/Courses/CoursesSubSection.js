import React from 'react'
import { Link } from 'react-router-dom'

const CoursesSubSection = () => {
  return (
    
 // Main Content 
<section className="py-5">
  <div className="container">
    <div className="row">
       {/* Filters Sidebar  */}
      <div className="col-lg-3">
        <div className="filter-sidebar">
          {/* // Categories  */}
          <div className="filter-group">
            <h5>Categories</h5>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="web-dev" />
              <label className="form-check-label" for="web-dev">Web Development</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="data-science" />
              <label className="form-check-label" for="data-science">Data Science</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="cybersecurity" />
              <label className="form-check-label" for="cybersecurity">Cybersecurity</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="cloud" />
              <label className="form-check-label" for="cloud">Cloud Computing</label>
            </div>
          </div>

          {/* // Skill Level  */}
          <div className="filter-group">
            <h5>Skill Level</h5>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="beginner" />
              <label className="form-check-label" for="beginner">Beginner</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="intermediate" />
              <label className="form-check-label" for="intermediate">Intermediate</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="advanced" />
              <label className="form-check-label" for="advanced">Advanced</label>
            </div>
          </div>

           {/* // Price Range  */}
          <div className="filter-group">
            <h5>Price Range</h5>
            <div className="price-range">
              <input type="number" className="form-control" placeholder="Min" />
              <input type="number" className="form-control" placeholder="Max" />
            </div>
          </div>

          {/* <!-- Duration --> */}
          <div className="filter-group">
            <h5>Duration</h5>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="0-3" />
              <label className="form-check-label" for="0-3">0-3 months</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="3-6" />
              <label className="form-check-label" for="3-6">3-6 months</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="6plus" />
              <label className="form-check-label" for="6plus">6+ months</label>
            </div>
          </div>

          <button className="btn btn-primary w-100">Apply Filters</button>
        </div>
      </div>

      {/* <!-- Courses Grid --> */}
      <div className="col-lg-9">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h4>Found 500+ courses</h4>
          </div>
          <div className="d-flex align-items-center">
            <label className="me-2">Sort by:</label>
            <select className="form-select">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="course-grid">
          {/* <!-- Repeat the course card component from the main page here -->
          <!-- Add more course cards --> */}
        </div>

        {/* <!-- Pagination --> */}
        <nav aria-label="Course pagination" className="d-flex justify-content-center">
          <ul className="pagination">
            <li className="page-item disabled">
              <Link className="page-link" to="#" tabindex="-1">Previous</Link>
            </li>
            <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
            <li className="page-item">
              <Link className="page-link" to="#">Next</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</section>
  )
}

export default CoursesSubSection