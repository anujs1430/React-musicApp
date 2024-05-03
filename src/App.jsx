import React, { useState } from "react";

const App = () => {
  const [track, setTrack] = useState([]);
  const [search, setSearch] = useState("");

  const getTrack = async () => {
    const data = await fetch(
      `https://v1.nocodeapi.com/anujs143/spotify/eEMOFTeIfvypleOM/search?q=${search}&type=track`
    );

    const convertedData = await data.json();
    setTrack(convertedData.tracks.items);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ms-auto" role="search">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                onClick={getTrack}
                className="btn btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row mt-5">
          {track.map((ele) => {
            return (
              <div className="col-lg-3 col-md-4 mb-3">
                <div className="card p-3" key={ele.id}>
                  <img
                    src={ele.album.images[0].url}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{ele.name}</h5>
                    <p className="card-text">
                      Artist: {ele.artists[0].name} <br />
                      Release Date: {ele.album.release_date}
                    </p>
                    <audio
                      src={ele.preview_url}
                      controls
                      style={{ width: "100%" }}
                    ></audio>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
