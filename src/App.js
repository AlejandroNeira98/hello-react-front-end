import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Greetings from './components/Greetings';
import { getGreeting } from './redux/greetings/greetings';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Greetings />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
