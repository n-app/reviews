export const calculateOverallRates = rates => (
  Object.keys(rates).reduce((accu, key, index) => (((accu * index) + rates[key]) / (index + 1)), 0)
);

export const calculatePages = (numberReviewsPerPage, totalNumberReviews) => {
  const totalPages = Math.ceil(totalNumberReviews / numberReviewsPerPage);
  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    pages[i] = [i + 1, i * numberReviewsPerPage];
  }
  return pages;
};

export const displayPages = (currentPage, pages) => {
  let selectedPages = [];
  if (currentPage !== 1) {
    selectedPages.push(['<', pages[currentPage - 2]]);
  }
  if (currentPage - 1 > 1) {
    selectedPages.push(pages[0]);
    if (currentPage - 1 > 2) {
      if (currentPage - 1 === 3) {
        selectedPages.push(pages[1]);
      } else {
        selectedPages.push(['...', null]);
      }
    }
  }
  // console.log(selectedPages);
  if ((currentPage === pages.length) && pages.length > 2) {
    selectedPages.push(pages[pages.length - 3]);
  }
  // let currentPointer;
  // for (let i = Math.max(currentPage - 2, 0); i < Math.min(currentPage + 1, pages.length); i++) {
  //   selectedPages.push(pages[i]);
  //   if (currentPage === i + 1) currentPointer = selectedPages.length - 1;
  // }
  selectedPages = [
    ...selectedPages,
    ...pages.slice(Math.max(currentPage - 2, 0), Math.min(currentPage + 1, pages.length)),
  ];
  if (currentPage === 1 && pages.length > 2) {
    selectedPages.push(pages[2]);
  }
  // console.log(selectedPages);
  if (currentPage + 1 < pages.length) {
    if (currentPage + 1 < pages.length - 1) {
      if (currentPage + 1 === pages.length - 2) {
        selectedPages.push(pages[pages.length - 2]);
      } else {
        selectedPages.push(['...', null]);
      }
    }
    selectedPages.push(pages[pages.length - 1]);
  }
  if (currentPage !== pages.length) {
    selectedPages.push(['>', pages[currentPage]]);
  }
  return selectedPages;
};
