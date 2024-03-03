import { useMemo } from "react";

export const usePagination = (totalPages) => {
  console.log('totalPages', totalPages);
  const pagesArray = useMemo(() => {
    let res = [];
    for (let i = 0; i < totalPages; i++) {
      res.push(i + 1);
    }
    return res;
  }, [totalPages]);
console.log('pagesArray', pagesArray);
  return pagesArray;
}