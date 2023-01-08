import _ from "lodash";

export const paginate = (allData, currentPage, purPage) => {
  const startIndex = (currentPage - 1) * purPage;
  return _(allData).slice(startIndex).take(purPage).value();
};
