import AppLoader from "./components/loader";
import React, { useEffect, useState } from 'react';
import Profile from "./components/Profile";
function App() {

  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(false)
    }, 1000)
  })

  return (
    <React.Fragment>
      {
         loaded ?  <AppLoader /> : <Profile />
      }
    </React.Fragment>
     
  );
}

export default App;
