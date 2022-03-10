import React from "react";

function Date() {
  const current = new Date(null);
  const date = `${current.getDate()} / ${
    current.getMonth() + 1
  } / ${current.getFullYear()}`;

  return (
    <div>
      <h3>Today Date : {date}</h3>
    </div>
  );
}

export default Date;
