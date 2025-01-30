import React, { useState } from 'react';

const LoginHero = () => {
  // State to toggle between login and register forms
  const [activeTab, setActiveTab] = useState('login');

  // Function to handle tab switch
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };



  // 1. writting a state to get the data from the table
  // 2. send them database
  // 3. fecth request to get data and compare

  return (
    <div className="auth-hero">
      <div className="container">
        <div className="row align-items-center g-5">

          <div className="col-lg-6">
            <div className="auth-card">
              <div className="auth-tabs">
                <div
                  className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
                  onClick={() => handleTabSwitch('login')}
                >
                  Returning User
                </div>
                <div
                  className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`}
                  onClick={() => handleTabSwitch('register')}
                >
                  New User
                </div>
              </div>

              {/* Login Form */}
              {activeTab === 'login' && (
                <div className="auth-form">
                  <h3 className="mb-4">Welcome Back!</h3>
                  <form onSubmit={(e) => { e.preventDefault(); alert('Login Form Submitted!'); }}>
                    <div className="form-floating">
                      <input type="email" className="form-control" id="loginEmail" placeholder="Email" />
                      <label htmlFor="loginEmail">Email address</label>
                    </div>
                    <div className="form-floating">
                      <input type="password" className="form-control" id="loginPassword" placeholder="Password" />
                      <label htmlFor="loginPassword">Password</label>
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="rememberMe" />
                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                      </div>
                      <a href="https://example.com/forgot-password" className="text-primary">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mb-3">Sign In</button>
                    {/* <div className="social-login">
                      <p className="text-center mb-3">Or continue with</p>
                      <button type="button" className="social-btn">
                        <i className="fab fa-google text-danger"></i>
                        Sign in with Google
                      </button>
                      <button type="button" className="social-btn">
                        <i className="fab fa-facebook text-primary"></i>
                        Sign in with Facebook
                      </button>
                    </div> */}
                  </form>
                </div>
              )}

              {/* Register Form */}
              {activeTab === 'register' && (
                <div className="auth-form">
                  <h3 className="mb-4">Create Account</h3>
                  <form onSubmit={(e) => { e.preventDefault(); alert('Register Form Submitted!'); }}>
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="fullName" placeholder="Full Name" />
                      <label htmlFor="fullName">Full Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="registerEmail" placeholder="Email" />
                      <label htmlFor="registerEmail">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="password" className="form-control" id="registerPassword" placeholder="Password" />
                      <label htmlFor="registerPassword">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
                      <label htmlFor="confirmPassword">Confirm Password</label>
                    </div>
                    <div className="form-check mb-4">
                      <input className="form-check-input" type="checkbox" id="terms" />
                      <label className="form-check-label" htmlFor="terms">
                        I agree to the <a href="https://example.com/terms">Terms of Service</a> and <a href="https://example.com/privacy">Privacy Policy</a>
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Create Account</button>
                  </form>
                </div>
              )}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="auth-features">
              <h2 className="mb-4">Why Choose YUSMU?</h2>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div>
                  <h5>Expert Instructors</h5>
                  <p>Learn from industry professionals with years of experience.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-book-reader"></i>
                </div>
                <div>
                  <h5>Comprehensive Curriculum</h5>
                  <p>Access to detailed course materials and hands-on projects.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <div>
                  <h5>Recognized Certification</h5>
                  <p>Earn certificates valued by top employers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginHero;
