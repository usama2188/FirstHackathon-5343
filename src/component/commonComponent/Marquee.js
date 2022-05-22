import React from "react";
import { Link } from "react-router-dom";

export default function Marquee(props) {
  return (
    <div>
      <marquee
        behavior="alternate"
        direction="right"
        scrollamount="10"
        style={{ backgroundColor: "white", marginTop: 13 }}
        className="fs-3"
      >
        <Link
          to="/OnlineSession"
          className="heaC2"
          style={{ textDecoration: "none",fontWeight:"bold", color: "black" }}
        >
          {props.title}
        </Link>
      </marquee>
    </div>
  );
}
