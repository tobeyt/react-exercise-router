import React from "react";

const About = (props) => {
  const { history } = props;
  return (
    <div>
      <p>Company: ThoughtWorks Local</p>
      <p>Location: Xi'an</p>
      <br />
      <p>For more information, please</p>
      <p>
        view our 
        <a
          href="#"
          onClick={() => {
            history.push("/");
          }}
        >
          website
        </a>
        .
      </p>
    </div>
  );
};

export default About;
