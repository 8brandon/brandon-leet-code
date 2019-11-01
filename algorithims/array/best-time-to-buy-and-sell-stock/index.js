/**
 * @param {number[]} prices
 * @return {number}
 */
/**Solution 1 I did with the reduce function.
 * 
 * It was approved but quite slow, only faster than 5% of JS solutions.
 * 
 */

var maxProfit = function(prices) {
  return prices.reduce((acc, cValue, cIndex, arr)=> {
    const possibleWinnerArray = prices.slice(cIndex + 1)
    const winner = Math.max(...possibleWinnerArray)
    if(winner && winner - cValue > acc){
      return winner - cValue
    }
    else{
      return acc
    }
  }, 0)
};

/**
 * Better solution shown below.
 * We initialize 2 values, 
 * 1 for min price which is the highest number possible in JS
 * and a maxProfit of 0
 * 
 * then we run a for loop on the array, first we check if the current value being iterated is smaller than
 * min price. Of course the first will iteration will almost always return true, unless the first element in
 * the array is also Number.MAX_VALUE
 * 
 * Then we check if the difference between the current element and the min price is greater than maxProfit
 * Of course this will be impossible on the first iteration since they are always going to be the same.
 * 
 * 
 */

var maxProfit = function(prices){
  var minPrice = Number.MAX_VALUE
  var maxProfit = 0 

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
          minPrice = prices[i]     
    }
    if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice      
    }
  }
  return maxProfit
}