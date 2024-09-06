import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import BlogItemDetails from './components/BlogItemDetails'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      {/* header component should be used outside of switch */}
      <Header />
      <div className="app-body">
        <Switch>
          {/* when the path is '/' it display home Component  */}
          <Route exact path="/" component={Home} />
          {/* in defining path it should begin with '/' */}
          <Route exact path="/about" component={About} />
          {/*  in defining path it should begin with '/'  */}
          <Route exact path="/contact" component={Contact} />
          {/* in route the path parameter begin with ':' */}
          <Route exact path="/blogs/:id" component={BlogItemDetails} />
          {/* not found component should be atlast */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
