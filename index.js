const sampleCart = ["a", "b", "a", "c", "c", "d", "d", "e"];
const calculateCart = (array) => {
  const costOfEachBook = 8;
  const trackingObject = {};
  array.forEach((item) => {
    trackingObject[item] = (trackingObject[item] || 0) + 1;
  });
  const numberOfUniqueItems = Object.keys(trackingObject).length;
  const numberOfBooks = array.length;

  function findPercentage(n) {
    switch (n) {
      case 1:
        return 0;
      case 2:
        return 5;
      case 3:
        return 10;
      case 4:
        return 20;
      default:
        return 25;
    }
  }
  const ultimateDiscountPercentage = findPercentage(numberOfUniqueItems);
  const discount =
    (numberOfBooks * costOfEachBook * ultimateDiscountPercentage) / 100;
  const result = numberOfBooks * costOfEachBook - discount;
  return result;
};

console.log(calculateCart(sampleCart));
