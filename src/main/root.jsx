import React from 'react'
import Comp1 from '../comp1/comp1.jsx'
import Header from '../header.jsx'
import Page from '../page.jsx'

class Root extends React.Component {


  render() {
    return (
      <div className="container">
        <Header />
        <Page />
      </div>
    )
  }

}

export default Root
