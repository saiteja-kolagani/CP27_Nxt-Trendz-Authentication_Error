// Write your JS code here

import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-main-container">
    <Header />
    <main className="home-content-container">
      <section className="home-text-container">
        <h1 className="home-heading-text">Clothes That Get YOU Noticed</h1>
        <p className="home-description-text">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="home-text-button">
          Shop Now
        </button>
      </section>
      <figure className="home-image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-image"
        />
      </figure>
    </main>
  </div>
)

export default Home
