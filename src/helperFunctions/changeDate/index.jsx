import * as shamsi from "shamsi-date-converter";

// get date and change miladi to shamsi with event
export const changeDate = (event) => {
  const setBirthDate = event.target.value;

  // get and change date
  const date = shamsi.gregorianToJalali(setBirthDate);

  const finalDate = `${date[0]}/${date[1] < 10 ? `0${date[1]}` : date[1]}/${
    date[2] < 10 ? `0${date[2]}` : date[2]
  }`;

  return finalDate;
};

// get date and change miladi to shamsi
export const handelDate = (CDa) => {
  console.log(CDa);
  const splitArray = CDa.split("-");

  const year = splitArray[0];
  const month = splitArray[1];
  const day = splitArray[2].substring(0, 2);
  console.log(year, month, day);

  const finalDate = `${year}/${month}/${day}`;

  return finalDate;
};

// get date and change miladi to shamsi with event
export const changeDateSimple = (createDate) => {
  // get and change date
  const date = shamsi.gregorianToJalali(createDate);

  const finalDate = `${date[0]}/${date[1]}/${date[2]}`;

  return finalDate;
};
