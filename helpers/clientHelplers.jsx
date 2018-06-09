import React from 'react';

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
  if ((currentPage === pages.length) && pages.length > 2) {
    selectedPages.push(pages[pages.length - 3]);
  }
  selectedPages = [
    ...selectedPages,
    ...pages.slice(Math.max(currentPage - 2, 0), Math.min(currentPage + 1, pages.length)),
  ];
  if (currentPage === 1 && pages.length > 2) {
    selectedPages.push(pages[2]);
  }
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

const months = [
  'January',
  'Feburary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getFullMonth = date => months[date.getMonth()];

export const normalizeRating = (ratingRatio, fullRating, increment) => (
  Math.ceil((ratingRatio * fullRating) / increment) * increment
);

/* eslint-disable react/no-array-index-key */
export const makeStarElements = (
  ratingRatio,
  fullStar,
  {
    containerClass,
    fullStarClass,
    pointFiveClass,
    zeroStarClass,
    halfStarClass,
    hiddenHalfStarClass,
  },
) => {
  const rate = normalizeRating(ratingRatio, fullStar, 0.5);
  const numFullStar = Math.floor(rate);
  const numHalfStar = (rate - numFullStar) > 0 ? 1 : 0;
  const numZeroStar = fullStar - numFullStar - numHalfStar;
  return (
    <span className={containerClass}>
      {
        Array(numFullStar).fill().map((_, i) => (
          <span className={fullStarClass} key={`full_${i}`}>
            <svg
              viewBox="0 0 1000 1000"
              role="presentation"
              focusable="false"
            >
              <path
                d="M971.5 379.5
                c9 28 2 50-20 67
                L725.4 618.6
                l87 280.1
                c11 39-18 75-54 75-12 0-23-4-33-12
                l-226.1-172-226.1 172.1
                c-25 17-59 12-78-12-12-16-15-33-8-51
                l86-278.1
                L46.1 446.5
                c-21-17-28-39-19-67 8-24 29-40 52-40
                h280.1
                l87-278.1
                c7-23 28-39 52-39 25 0 47 17 54 41
                l87 276.1
                h280.1
                c23.2 0 44.2 16 52.2 40
                z"
              />
            </svg>
          </span>
        ))
      }
      {
        Array(numHalfStar).fill().map((_, i) => (
          <span className={pointFiveClass} key={`half_${i}`}>
            <span className={hiddenHalfStarClass}>
              <svg
                viewBox="0 0 1000 1000"
                role="presentation"
                focusable="false"
              >
                <path
                  d="M971.5 379.5
                  c9 28 2 50-20 67
                  L725.4 618.6
                  l87 280.1
                  c11 39-18 75-54 75-12 0-23-4-33-12
                  l-226.1-172-226.1 172.1
                  c-25 17-59 12-78-12-12-16-15-33-8-51
                  l86-278.1
                  L46.1 446.5
                  c-21-17-28-39-19-67 8-24 29-40 52-40
                  h280.1
                  l87-278.1
                  c7-23 28-39 52-39 25 0 47 17 54 41
                  l87 276.1
                  h280.1
                  c23.2 0 44.2 16 52.2 40
                  z"
                />
              </svg>
            </span>
            <span className={halfStarClass}>
              <svg
                viewBox="0 0 1000 1000"
                role="presentation"
                focusable="false"
              >
                <path
                  d="M510.2 23.3
                  l1 767.3-226.1 172.2
                  c-25 17-59 12-78-12-12-16-15-33-8-51
                  l86-278.1
                  L58 447.5
                  c-21-17-28-39-19-67 8-24 29-40 52-40
                  h280.1
                  l87-278.1
                  c7.1-23.1 28.1-39.1 52.1-39.1
                  z"
                />
              </svg>
            </span>
          </span>
        ))
      }
      {
        Array(numZeroStar).fill().map((_, i) => (
          <span className={zeroStarClass} key={`half_${i}`}>
            <svg
              viewBox="0 0 1000 1000"
              role="presentation"
              focusable="false"
            >
              <path
                d="M971.5 379.5
                c9 28 2 50-20 67
                L725.4 618.6
                l87 280.1
                c11 39-18 75-54 75-12 0-23-4-33-12
                l-226.1-172-226.1 172.1
                c-25 17-59 12-78-12-12-16-15-33-8-51
                l86-278.1
                L46.1 446.5
                c-21-17-28-39-19-67 8-24 29-40 52-40
                h280.1
                l87-278.1
                c7-23 28-39 52-39 25 0 47 17 54 41
                l87 276.1
                h280.1
                c23.2 0 44.2 16 52.2 40
                z"
              />
            </svg>
          </span>
        ))
      }
    </span>
  );
};
/* eslint-enable react/no-array-index-key */
