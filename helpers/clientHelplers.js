export const calculateOverAllRates = rates => (
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
