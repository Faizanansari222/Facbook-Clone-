// import logo from './logo.svg';
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [fbData, setFbData] = useState([]);
  function rederAPI() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setFbData(res.products));
    // console.log(res.products);
  }
  useEffect(() => {
    rederAPI();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="main ">
          <div className="top-content flex justify-center items-center ">
            <div className="img-icon">
              <img
                className="w-10 bg-white rounded-full mr-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Cirila-%D0%90-majuskla.svg/800px-Cirila-%D0%90-majuskla.svg.png"
                alt=""
              />
            </div>
            <div className="flex-col m[-10] ">
              <h1 className=" text-base font-semibold"> {fbData[0].title} </h1>

              <p className="inline-block text-xs font-light"> Sponsored</p>
            </div>
            
          </div>

          <div className="img-content">




          </div>

          {/* <h1>{item.title}</h1> */}
        </div>
        {fbData.map(function (item) {
          return <></>;
        })}
      </header>
    </div>
  );
}

export default App;
