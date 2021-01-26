/**
 * * TO SELECT THE METHOD OF COMPUTATION FOR TABLET
 * @param {INT} yPosition
 * @param {INT} screenWidth
 */
const selectTabletComputation = (yPosition, screenWidth) => {
  if (screenWidth >= 2000) {
    return getTabletPositionFrom2000(yPosition);
  }
  if (screenWidth >= 1920) {
    return getTabletPositionFrom1920(yPosition);
  }
  if (screenWidth >= 1440) {
    return getTabletPositionFrom1440(yPosition);
  }
  if (screenWidth >= 1024) {
    return getTabletPositionFrom1024(yPosition);
  }
  if (screenWidth >= 768) {
    return getTabletPositionFrom768(yPosition);
  }
  if (screenWidth >= 425) {
    return getTabletPositionFrom425(yPosition);
  }
  if (screenWidth >= 320) {
    return getTabletPositionFrom320(yPosition);
  }
};

/**
 * * TO SELECT THE METHOD OF COMPUTATION FOR IPHONE
 * @param {INT} yPosition
 * @param {INT} screenWidth
 */
const selectIphoneComputation = (yPosition, screenWidth) => {
  if (screenWidth >= 2000) {
    return getIphonePositionFrom2000(yPosition);
  }
  if (screenWidth >= 1920) {
    return getIphonePositionFrom1920(yPosition);
  }
  if (screenWidth >= 1440) {
    return getIphonePositionFrom1440(yPosition);
  }
  if (screenWidth >= 1024) {
    return getIphonePositionFrom1024(yPosition);
  }
  if (screenWidth >= 768) {
    return getIphonePositionFrom768(yPosition);
  }
  if (screenWidth >= 425) {
    return getIphonePositionFrom425(yPosition);
  }
  if (screenWidth >= 320) {
    return getIphonePositionFrom320(yPosition);
  }
};

/**
 * * TO SELECT THE METHOD OF COMPUTATION FOR LAPTOP
 * @param {INT} yPosition
 * @param {INT} screenWidth
 */
const selectLaptopComputation = (yPosition, screenWidth) => {
  if (screenWidth >= 2000) {
    return getLaptopPositionFrom2000(yPosition);
  }
  if (screenWidth >= 1920) {
    return getLaptopPositionFrom1920(yPosition);
  }
  if (screenWidth >= 1440) {
    return getLaptopPositionFrom1440(yPosition);
  }
  if (screenWidth >= 1024) {
    return getLaptopPositionFrom1024(yPosition);
  }
  if (screenWidth >= 768) {
    return getLaptopPositionFrom768(yPosition);
  }
  if (screenWidth >= 425) {
    return getLaptopPositionFrom425(yPosition);
  }
  if (screenWidth >= 320) {
    return getLaptopPositionFrom320(yPosition);
  }
};

/**
 * * TO COMPUTE THE POSITION MOVEMENT OF THE TABLET
 * @param {INT} yPosition
 */
const getTabletPositionFrom2000 = (yPosition) => {
  if (yPosition <= 3600) {
    return 20;
  }
  if (yPosition >= 4600) {
    return 0;
  }
  return 20 - (yPosition - 3600) / 50;
}
const getTabletPositionFrom1920 = (yPosition) => {
  if (yPosition <= 3000) {
    return 30;
  }
  if (yPosition >= 3600) {
    return 0;
  }
  return 30 - (yPosition - 3000) / 20;
};
const getTabletPositionFrom1440 = (yPosition) => {
  if (yPosition <= 2700) {
    return 20;
  }
  if (yPosition >= 3300) {
    return 0;
  }
  return 30 - (yPosition - 2700) / 20;
};
const getTabletPositionFrom1024 = (yPosition) => {
  if (yPosition <= 2500) {
    return 20;
  }
  if (yPosition >= 3300) {
    return 0;
  }
  return 20 - (yPosition - 2500) / 40;
};
const getTabletPositionFrom768 = (yPosition) => {
  if (yPosition <= 2400) {
    return 20;
  }
  if (yPosition >= 3200) {
    return 0;
  }
  return 20 - (yPosition - 2400) / 40;
};
const getTabletPositionFrom425 = (yPosition) => {
  if (yPosition <= 3800) {
    return 20;
  }
  if (yPosition >= 4800) {
    return 0;
  }
  return 20 - (yPosition - 3800) / 50;
};
const getTabletPositionFrom320 = (yPosition) => {
  if (yPosition <= 3800) {
    return 20;
  }
  if (yPosition >= 4800) {
    return 0;
  }
  return 20 - (yPosition - 3800) / 50;
};

/**
 * * TO COMPUTE THE POSITION MOVEMENT OF THE IPHONE
 * @param {INT} yPosition
 */
const getIphonePositionFrom2000 = (yPosition) => {
  if (yPosition <= 4000) {
    return 20;
  }
  if (yPosition >= 5000) {
    return 0;
  }
  return 20 - (yPosition - 4000) / 50;
}
const getIphonePositionFrom1920 = (yPosition) => {
  if (yPosition <= 3500) {
    return 30;
  }
  if (yPosition >= 4100) {
    return 0;
  }
  return 30 - (yPosition - 3500) / 20;
};
const getIphonePositionFrom1440 = (yPosition) => {
  if (yPosition <= 2900) {
    return 40;
  }
  if (yPosition >= 3500) {
    return 10;
  }
  return 40 - (yPosition - 2900) / 20;
};
const getIphonePositionFrom1024 = (yPosition) => {
  if (yPosition <= 2800) {
    return 20;
  }
  if (yPosition >= 3600) {
    return 0;
  }
  return 20 - (yPosition - 2800) / 40;
};

const getIphonePositionFrom768 = (yPosition) => {
  if (yPosition <= 2800) {
    return 20;
  }
  if (yPosition >= 3600) {
    return 0;
  }
  return 20 - (yPosition - 2800) / 40;
};
const getIphonePositionFrom425 = (yPosition) => {
  if (yPosition <= 4100) {
    return 20;
  }
  if (yPosition >= 5100) {
    return 0;
  }
  return 20 - (yPosition - 4100) / 50;
};
const getIphonePositionFrom320 = (yPosition) => {
  if (yPosition <= 4100) {
    return 20;
  }
  if (yPosition >= 5100) {
    return 0;
  }
  return 20 - (yPosition - 4100) / 50;
};

/**
 * * TO COMPUTE THE POSITION MOVEMENT OF THE LAPTOP
 * @param {INT} yPosition
 */
const getLaptopPositionFrom2000 = (yPosition) => {
  if (yPosition <= 4400) {
    return 20;
  }
  if (yPosition >= 5400) {
    return 0;
  }
  return 20 - (yPosition - 4400) / 50;
}
const getLaptopPositionFrom1920 = (yPosition) => {
  if (yPosition <= 3800) {
    return 25;
  }
  if (yPosition >= 4400) {
    return -5;
  }
  return 25 - (yPosition - 3800) / 20;
};
const getLaptopPositionFrom1440 = (yPosition) => {
  if (yPosition <= 3500) {
    return 20;
  }
  if (yPosition >= 4100) {
    return 0;
  }
  return 20 - (yPosition - 3500) / 30;
};
const getLaptopPositionFrom1024 = (yPosition) => {
  if (yPosition <= 3000) {
    return 20;
  }
  if (yPosition >= 3800) {
    return 0;
  }
  return 20 - (yPosition - 3000) / 40;
};
const getLaptopPositionFrom768 = (yPosition) => {
  if (yPosition <= 3500) {
    return 20;
  }
  if (yPosition >= 4100) {
    return 0;
  }
  return 20 - (yPosition - 3500) / 30;
};
const getLaptopPositionFrom425 = (yPosition) => {
  if (yPosition <= 4300) {
    return 20;
  }
  if (yPosition >= 5300) {
    return 0;
  }
  return 20 - (yPosition - 4300) / 50;
};
const getLaptopPositionFrom320 = (yPosition) => {
  if (yPosition <= 4400) {
    return 20;
  }
  if (yPosition >= 5300) {
    return 0;
  }
  return 20 - (yPosition - 4400) / 45;
};

export {
  selectTabletComputation,
  selectIphoneComputation,
  selectLaptopComputation
};
