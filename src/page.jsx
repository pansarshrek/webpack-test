import React from 'react'
import {Link, Route, Redirect} from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <p>this is dashboard</p>
      <Route path="/dashboard/quick" component={Quick} />
    </div>
  )
}

function Quick() {
  return (
    <p>Showing quick dashboard</p>
  )
}

function DashboardNav() {
  return (
    <ul>
      <li>
        <Link to="/dashboard/quick">Quick</Link>
      </li>
    </ul>
  )
}

function About() {
  return (
    <p>this is about</p>
  )
}

function Default() {
  return (
    <p>this is default</p>
  )
}

export default () => {
  return (
    <div className="row">
      <div className="four columns">
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Go to dashboard</Link>
              <Route path="/dashboard" component={DashboardNav} />
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="eight columns">
        <Route exact path="/" component={Default} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/about" component={About} />
      </div>
    </div>
  )
}
