import React, { useState } from "react";
import Loader from "../commen/Loader/Loader";

const UTicket = () => {
  const [ticket, setTicket] = useState([]);
  return (
    <div>
      {ticket.length > 0 ? (
        ""
      ) : (
        <div>
          <img
            className=" mx-auto my-10  animate-TwCon-book-movement"
            src={require("../../Assets/images/Touritor/course_image3.png")}
          />
          <h2 className=" text-xl text-Main-Blue dark:text-emerald-400 text-center mb-5">
            هیچ تیکتی یافت نشد
          </h2>
        </div>
      )}
    </div>
  );
};

export default UTicket;
