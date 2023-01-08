import React, { useState } from "react";
import { render } from "react-dom";
import "./OrderStyle.css";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Orders = () => {
  const [rowData] = useState([
    { تصویر: "Toyota", "نام محصول": "Celica", price: 35000 },
    { تصویر: "Ford", "نام محصول": "Mondeo", price: 32000 },
    { تصویر: "Porsche", "نام محصول": "Boxster", price: 72000 },
  ]);

  const [columnDefs] = useState([
    { field: "تصویر" },
    { field: "نام محصول" },
    { field: "نام کاربر" },
    { field: " قیمت محصول" },
    { field: "  آی دی محصول" },
  ]);
  return (
    <div className="   flex justify-center  flex-col px-7 my-10">
      <div className=" bg-white p-10 shadow-lg rounded-xl">
        <div className=" mb-8 text-gray-700 text-2xl">
          <h2>سفارشات </h2>
        </div>

        <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
          <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
        </div>
      </div>
    </div>
  );
};

export default Orders;
