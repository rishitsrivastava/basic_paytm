import { BrowserRouter as Router, Routes, Switch , Route } from 'react-router-dom'
import Signup from './components/Signup'
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';

function App() {

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/signup" component={Signup} /> 
    //     <Route path="/signin" component={Signin} />
    //     <Route path="/dashboard" component={Dashboard} />
    //   </Routes>
    // </Router>
    <div>
      <Signup />
    </div>
  )
}

export default App
