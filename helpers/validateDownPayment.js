function housePriceIsNumber(isNumber) {
  if (Number.isInteger(isNumber) === true) {
    // console.log(
    //   `För ett hus som kostar ${huspris.toLocaleString()}kr, blir handpening ${(
    //     huspris * 0.2
    //   ).toLocaleString()}kr (20%).`
    // );
    return true

  } else {
    throw "Var vänlig försök igen och ange hus priset som ett nummer.";
  }
}

module.exports = housePriceIsNumber;