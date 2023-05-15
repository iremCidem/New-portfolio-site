import React, { useState } from "react";
import food from "../images/food.png";
import movie from "../images/movie.png";
import spotify from "../images/spotify.png";
import { AiFillCaretDown } from "react-icons/ai";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(true);
  let classname;
  if (isVisible) {
    classname = "dropdown-menu";
  } else {
    classname = "visible";
  }
  return (
    <div className="projects">
      <div className="project">
        <div className="project-left">
          <a
            href="https://master--cosmic-taiyaki-9f2879.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={movie} alt="app" className="project-image" />
          </a>
        </div>
        <div className="project-right">
          <h2 className="project-title">Movies App</h2>
          <p>
            I used <b>local storage </b> to permanently store my data on this
            site, at the same time, i stored this data in <b>redux </b> because
            of user-sourced updates. In this project, I used <b>redux saga </b>
            to handle async or complex operations that will be transmitted to
            redux in the middleware. I used the <b>formik </b> library for my
            form operations. Also, another thing that is different from my other
            projects is that by creating<b> styled components </b> , i was able
            to write my css data in my js files on a regular basis.
          </p>
          <br />
          <div className="site-content">
            <b>--Site Content--</b>
            <p>
              On this site, you can see trending, new released or upcoming
              movies and learn about movie's information. You can also search
              for the movie you want and access the movie contents. You can
              choose your favorites from these movies and create your favorite
              list.
            </p>
          </div>
          <div className="dropdown ">
            <div className="buttons">
              <button
                onClick={() => setIsVisible(!isVisible)}
                className="site-content-button"
              >
                Site Content <AiFillCaretDown />
              </button>
              <a
                href="https://github.com/iremCidem/movie-site"
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                github code
              </a>
              <a
                href="https://master--cosmic-taiyaki-9f2879.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                view site
              </a>
            </div>
          </div>
          <div className={classname} id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              On this site, you can see trending, new released or upcoming
              movies and learn about movie's information. You can also search
              for the movie you want and access the movie contents. You can
              choose your favorites from these movies and create your favorite
              list.
            </div>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-left">
          <a
            href="https://poetic-cat-414ed7.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={spotify} alt="app" className="project-image" />
          </a>
        </div>
        <div className="project-right">
          <h2 className="project-title">Spotify 2.0 App</h2>
          <p>
            I got the data i need on this site using the <b>Web Api </b> via the
            Developerspotify address. I managed to avoid code duplication by
            using <b> reusable components </b> on this site. I used the
            <b> react-router-dom </b>
            library for the routing process within the site.I created and used
            my required state variables in the <b>redux store </b> using
            <b> redux-toolkit </b> . I used the React UI library ,
            <b> Ant Design </b> , for the design part of my site.
          </p>
          <br />
          <div className="site-content">
            <b>--Site Content--</b>
            <p>
              On this site, you can see the recently released popular albums and
              access the playlists on your spotify account. You can also search
              for the artist you want and access his album lists. You can choose
              your favorites from these lists and create your favorites list.
            </p>
          </div>

          <div className="dropdown ">
            <div className="buttons">
              <button
                onClick={() => setIsVisible(!isVisible)}
                className="site-content-button"
              >
                Site Content <AiFillCaretDown />
              </button>
              <a
                href="https://github.com/iremCidem/spotify2.0-app"
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                github code
              </a>
              <a
                href="https://poetic-cat-414ed7.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                view site
              </a>
            </div>
            <div className={classname} id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                On this site, you can see the recently released popular albums
                and access the playlists on your spotify account. You can also
                search for the artist you want and access his album lists. You
                can choose your favorites from these lists and create your
                favorites list.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-left">
          <a
            href="https://clever-phoenix-af9d76.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={food} alt="app" className="project-image" />
          </a>
        </div>
        <div className="project-right">
          <h2 className="project-title">Food Order App</h2>
          <p>
            On this site, i created and used my required state variables in the
            redux store using <b> redux-toolkit </b>. I used the
            <b> react-router-dom </b>
            library for the routing process within the site. I used
            <b> bootstrap </b> as css framework
          </p>
          <br />
          <div className="site-content">
            <b>--Site Content--</b>
            <p>
              "You can order what you want from the campaigns given on this
              site, which belongs to a pizza restaurant, and find out whether
              there is a restaurant in your city.
            </p>
          </div>
          <div className="dropdown ">
            <div className="buttons">
              <button
                onClick={() => setIsVisible(!isVisible)}
                className="site-content-button"
              >
                Site Content <AiFillCaretDown />
              </button>

              <a
                href="https://github.com/iremCidem/food-order-app"
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                github code
              </a>
              <a
                href="https://clever-phoenix-af9d76.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                view site
              </a>
            </div>
            <div className={classname} id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                "You can order what you want from the campaigns given on this
                site, which belongs to a pizza restaurant, and find out whether
                there is a restaurant in your city.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
