import React from "react";

const AverageBox = ({ item }) => {
  return (
    <>
      <div
        key={item.title}
        className="bg-white shadow-lg  dark:text-gray-200 dark:bg-secondary-dark-bg  p-4 pt-9 rounded-2xl 
        dark:bg-Dark-ItemBg
        "
      >
        <button
          type="button"
          style={{ color: item.iconColor, backgroundColor: item.iconBg }}
          className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
        >
          {item.icon}
        </button>

        <p className="mt-3 flex justify- justify-between text-gray-700 dark:text-gray-400">
          <span className="text-lg font-semibold ">{item.amount}</span>
          <span className={`text-sm ${item.pcColor} ml-2 dark:text-Dark-Sea`}>
            {item.percentage}
          </span>
        </p>
        <p
          className="text-sm text-gray-400  mt-1
        
         dark:text-gray-300
        "
        >
          {item.title}
        </p>
      </div>
    </>
  );
};

export default AverageBox;
