import { useEffect, useState } from "react";
const API = "https://dog.ceo/api/breeds/image/random";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [dog, setDog] = useState({});
  useEffect(() => {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => {
        setDog(data.message);
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return <img src={dog} alt="A Random Dog"></img>;
}

export default App;
