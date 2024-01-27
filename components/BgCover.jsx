import React from "react";

const BgCover = (props) => {
    
    const {color} = props
    
  return (
    <>
      <div
        className="w-full h-96 border-2 border-black"
        style={{backgroundColor: props.color}}
      ></div>

      <p className="my-5 font-bold">RGB VALUE: {props.color} </p>
    </>
  );
};

export default BgCover;
