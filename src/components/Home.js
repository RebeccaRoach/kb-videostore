import React from 'react';
// import './App.css';

const Home = () => {
  return (
    <div className="App">

      {/* HEADER */}
      <header>
        <div class="overlay"></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
        </video>
        <div class="container h-100">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white">
              <h1 class="display-3">Get the Popcorn Ready</h1>
              <p class="lead mb-0">At KB Videos, it's always movie time.</p>
            </div>
          </div>
        </div>
      </header>

      {/* FOOTER */}
      <div class="mt-5 pt-5 pb-5 footer">
        <div class="container">
          <div class="row mt-5">
            <div class="col copyright">
              <h6><i>a Time and Space production</i></h6>
              <p>Directed by Kate && Becca</p>
              <p><small>© 2020. All Rights Reserved.</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;