import React from 'react'

function index() {
  return (
    <div className="container-fluid">
      <div className="row">
          <nav
              id="sidebarMenu"
              className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
              <div className="position-sticky pt-3">
                  <ul className="nav flex-column">
                      <li className="nav-item">
                          <a
                              className={`nav-link`}
                              href={'/dashboard'}
                          >
                              <span data-feather="home"></span>
                              Dashboard
                          </a>
                      </li>
                      <li className="nav-item">
                          <a
                              className={`nav-link`}
                              href={'/users'}
                          >
                              <span data-feather="home"></span>
                              Usuários
                          </a>
                      </li>
                  </ul>
              </div>
          </nav>
      </div>
  </div>
  )
}

export default index