import React from "react";

export default function Skills() {
  return (
    <div className="skills">
      <div className="skills-left">
        <h2 className="header-1">MY SERVE</h2>
        <p>
          I value simple content structure, clean design patterns, and
          thoughtful interactions.
        </p>
      </div>
      <div>
        <h2 className="header-2">New technologies</h2>
        <p>
          I started my education with HTML&CSS&JavaScript projects, which are
          the most basic needs in my development process in the frontend field,
          then I continue by learning frameworks, up-to-date npm libraries and
          assistive technologies that would make the code I wrote during the
          design phase.
        </p>
        <h2 className="header-2">Responsive design</h2>
        <p>
          As in this project, I attach importance to the responsive design that
          I write together with the libraries I use. It is important for me that
          the user can effectively use the site I wrote, regardless of the
          device he or she is using.
        </p>
        <h2 className="header-2 ">What includes my skill ?</h2>
        <div className="skills-flex">
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
          <ul>
            <li>Redux</li>
            <li>Redux Toolkit</li>
            <li>Context API</li>
            <li>Redux Saga</li>
          </ul>
          <ul>
            <li>Formik</li>
            <li>Responsive Design</li>
            <li>Sass</li>
            <li>Ant Design</li>
          </ul>

          <ul>
            <li>Bootstrap</li>
            <li>Tailwind css</li>
            <li>Bulma</li>
            <li>Git & Github</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
