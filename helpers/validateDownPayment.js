function housePriceIsNumber(number) {
  if (Number.isInteger(number)) {
    return `För ett hus som kostar ${number.toLocaleString()} kr, blir handpeningen ${(number * 0.2).toLocaleString()} kr (20%).`
  } else {
    throw "Var vänlig försök igen och ange huspriset som ett nummer.";
  }
}

module.exports = housePriceIsNumber;