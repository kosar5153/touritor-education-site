export const setCooki = (cookiName, cookiValue, cookiPath, cookiExprDate) => {
  const now = new Date();
  now.setTime(now.getTime() + cookiExprDate * 24 * 60 * 60 * 1000);
  document.cookie = `${cookiName}=${cookiValue};path=${cookiPath};expires=${now}`;
  console.log(document.cookie);
};

export const removeCooki = (
  cookiName,
  cookiValue,
  cookiPath,
  cookiExprDate
) => {
  const now = new Date();
  now.setTime(now.getTime() - cookiExprDate * 24 * 60 * 60 * 1000);
  document.cookie = `${cookiName}=${cookiValue};path=${cookiPath};expires=${now}`;
  console.log(document.cookie);
};
