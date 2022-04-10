import React from "react";
import ReactDOM from "react-dom";

function Profile(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="profile pic" />
      <p>{props.bio}</p>
      <p>{props.profession}</p>
    </div>
  );
}

ReactDom.render(
  <div>
    <h1>My Profile</h1>
    <Profile
      name="Kelechi Anozia"
      img="/public/img.png"
      alt="profile pic"
      bio="A Freelance Web Developer based in Lagos, Nigeria"
      profession="Web Designer"
    />

    <input
      id="fName"
      placeholder="Enter your first name"
      value="Kelech Anozia"
    />
  </div>,
  document.getElementById("root")
);
