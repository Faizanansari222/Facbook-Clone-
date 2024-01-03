// import logo from './logo.svg';
import "./App.css";
import { useEffect, useState } from "react";
import FbImageLibrary from "react-fb-image-grid";

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
      <header className="App-header ">
        {fbData.map(function (item) {
          return (
            <>
              <div className="main h-full center m-auto rounded-xl bg-white my-5  w-1/3">
                
                  <div className="top-content flex  items-center ">
                    <div className="img-icon px-3">
                      <img
                        className="w-16 bg-white rounded-full border-2 border-blue-950 shadow-lg "
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Cirila-%D0%90-majuskla.svg/800px-Cirila-%D0%90-majuskla.svg.png"
                        alt=""
                      />
                    </div>
                  
                    <div className="flex-col ">
                      <h1 className=" text-xl cursor-pointer font-bold text-blue-950">
                        {item.title}
                      </h1>

                      <p className="block text-base font-light text-gray-700">
                        Sponsored
                      </p>
                    </div>
                  </div>
                  <div className="description my-4 px-3">
                    {item.description}.
                  </div>
                  <div className="main-img">
                    <FbImageLibrary images={item.images} />
                  </div>
                  <div className="like-btn flex justify-around p-3 border-t mx-10"> 

                  <button onClick={()=>{}}><i class="fa-regular fa-thumbs-up text-blue-950 text-3xl"></i> Like</button>
                  <button><i class="fa-regular fa-comment text-blue-950 text-3xl"></i> Comment</button>
                  <button><i class="fa-regular fa-share-from-square text-blue-950 text-3xl"></i>Share</button>

                </div>
              </div>
            </>
          );
        })}
      </header>
    </div>
  );
}

export default App;
