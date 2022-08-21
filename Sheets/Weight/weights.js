var WeightConstants = {
    POUNDS_PER_KILO: 2.20462,
    POUNDS_PER_STONE:14
  };
  
  // Convert Kilos to pounds
  function KgToPounds(kilos) {
    return kilos * WeightConstants.POUNDS_PER_KILO;
  }
  
  // Convert Pounds to StonePounds
  function PoundsToFormattedStonePounds(pounds) {
    var stones = parseInt(pounds/WeightConstants.POUNDS_PER_STONE);
    var poundsRemaining = pounds - (stones * 14);
    return stones + "st " + poundsRemaining.round(1) + "lb ";
  }
  
  function KgToStonePounds(kilos) {
    var pounds = KgToPounds(kilos);
    return PoundsToStonePounds(pounds);
  }
  
  function StonePoundsToFormattedStonePounds(stones, fractionalPounds) {
    totalPounds = StonePoundsToPounds(stones, fractionalPounds);
     return PoundsToFormattedStonePounds(totalPounds);
  }
  
  // Convert stones/pounds as separate values to pounds
  function StonePoundsToPounds(stones, fractionalPounds) {
    return (WeightConstants.POUNDS_PER_STONE * stones) + fractionalPounds;
  }
  
  function StonePoundToKilos(stones, fractionalPounds) {
   return  (StonePoundsToPounds(stones, fractionalPounds) / WeightConstants.POUNDS_PER_KILO).round(2);
  }
  
  function DoIt() {
    return 22
  }
  
  //https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
  Number.prototype.round = function(places) {
    return +(Math.round(this + "e+" + places)  + "e-" + places);
  }
  