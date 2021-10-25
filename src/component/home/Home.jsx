import React from "react";
import myImg from "../../images/IMG_20191002_020213_548.jpg";

export default function Home() {
  const style = {
    borderRadius: "50%",
  };
  return (
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-12 col-md-6 mt-5">
          <img style={style} className="w-75" src={myImg} alt="profile" />
        </div>
        <h4 className="desc text-start col-12 col-md-6">
          Hello I’m Hana Mohamed. I’m a front-end engineer, and I create fun,
          innovative, accessible, and fast websites. I try to leave every bit of
          code I touch more readable, modular, performant and accessible than I
          found it.
        </h4>
      </div>
    </div>
  );
}
