import React from "react";
import food from "../images/food.png";
import movie from "../images/movie.png";
import spotify from "../images/spotify.png";
import Project from "../components/Project";

export default function Projects() {
  return (
    <div>
       <Project
        className="Firebase e-Shop App"
        image={firebase}
        sitelink="https://lucky-stroopwafel-a3ee4c.netlify.app/"
        title="Firebase e-shop App"
        text1=" In this project, I created a user-specific field using firebase authentication. I colored the site by adding ads with the react-swipeable-views library. I kept my data in a global state using ContextApi. I edited my pages with pure css."
        text2="On this site, you can shop with the account you have created for yourself. When you log out of your account and return, the products in your cart are protected."
        codelink="https://github.com/iremCidem/e-shop-firebase"
      />
      <Project
        className="projects"
        image={movie}
        sitelink="https://master--cosmic-taiyaki-9f2879.netlify.app"
        title="Movies App"
        text1=" I used local storage to permanently store my data on this
            site, at the same time, i stored this data in redux because
            of user-sourced updates. In this project, I used redux saga 
            to handle async or complex operations that will be transmitted to
            redux in the middleware. I used the formik library for my
            form operations. Also, another thing that is different from my other
            projects is that by creating styled components, i was able
            to write my css data in my js files on a regular basis."
        text2="On this site, you can see trending, new released or upcoming
              movies and learn about movie's information. You can also search
              for the movie you want and access the movie contents. You can
              choose your favorites from these movies and create your favorite
              list."
        codelink="https://github.com/iremCidem/movie-site"
      />

      <Project
        className="projects"
        image={spotify}
        sitelink="https://poetic-cat-414ed7.netlify.app"
        title="Spotify 2.0 App"
        text1="  I got the data i need on this site using the Web Api via the
             Developerspotify address. I managed to avoid code duplication by
             using reusable components on this site. I used the
             react-router-dom library for the routing process within the site.I created and used
            my required state variables in the redux store using
            redux-toolkit. I used the React UI library,
             Ant Design, for the design part of my site."
        text2=" On this site, you can see the recently released popular albums and
              access the playlists on your spotify account. You can also search
              for the artist you want and access his album lists. You can choose
              your favorites from these lists and create your favorites list."
        codelink="https://github.com/iremCidem/spotify2.0-app"
      />

      <Project
        className="projects"
        image={food}
        sitelink="https://clever-phoenix-af9d76.netlify.app"
        title="Food Order App"
        text1=" On this site, i created and used my required state variables in the
             redux store using redux-toolkit. I used the
             react-router-dom
             library for the routing process within the site. I used
             bootstrap as css framework"
        text2="You can order what you want from the campaigns given on this
               site, which belongs to a pizza restaurant, and find out whether
               there is a restaurant in your city."
        codelink="https://github.com/iremCidem/food-order-app"
      />
    </div>
  );
}
