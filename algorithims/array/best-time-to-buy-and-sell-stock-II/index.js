/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
  var minPrice = Number.MAX_VALUE;
  var profit = 0;

  for (let index = 0; index < prices.length; index++) {
    const element = prices[index];
    if (element < minPrice) {
      minPrice = element;
    }
    if (element > minPrice) {
      profit += element - minPrice;
      minPrice =
        prices[index + 1] > minPrice ? prices[index] : Number.MAX_VALUE;
    }
  }
  return profit;
};
