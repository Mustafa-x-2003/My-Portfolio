import React from "react";

function TitleSection({ title, desc , }) {
  return (
    <>
      <h5 className={`text-(--color-light) text-[1rem] ${title.style}`}>{title.t}</h5>
      <h2 className={`text-[1.7rem] text-(--color-primary) mb-12 ${desc.style}`}> {desc.d} </h2>
    </>
  );
}

export default TitleSection;
