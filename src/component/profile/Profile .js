import React from "react";

function Profile(props) {
  const name = props.name;
  const profile = props.profile;
  return (
    <div>
      <h1>My name is {name}.</h1>
      <p>I am a {profile}.</p>
    </div>
  );
}

export default Profile;
