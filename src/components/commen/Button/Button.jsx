import React from "react";

const Button = ({ children, customClass, icon, closeFun }) => {
  return (
    <button
      className={`TwIN-btn transition ${customClass}`}
      onClick={() => closeFun()}
    >
      <span className=" ">{icon}</span>
      {children}
    </button>
  );
};

export default Button;

// const Button = ({props}) => {
//   return (
//     <button className={`TwIN-btn ${props.customClass}`}>
//       <span className=" ml-2 text-2xl">{props?.icon}</span>
//       {props.text}
//     </button>
//   );
// };

// export default Button;
