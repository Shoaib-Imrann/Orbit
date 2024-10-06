import React from "react";

function NumberCards(props) {
  return (
    <div>
      <div
        className={`h-[215px] w-full md:w-[230px] xl:h-[250px] xl:w-[320px] ${props.color} rounded-xl`}
      >
        <div className="flex flex-col justify-between h-full w-full pt-2 pb-5 px-5">
          <div className="h-auto">
            <h1 className="text-[52px] xl:text-[65px] font-sans">
              {props.numbers}
            </h1>
          </div>
          <div>
            <h4 className={`text-[15px] xl:text-[19px] ${props.visibility}`}>
              {props.text}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NumberCards;
