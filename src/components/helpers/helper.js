function choice(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// DECLARE FUNCTION THAT TAKES PARAMETER ARRAY
// CREATE RANDOMINDEX VARIABLE THAT HAS RANDOM NUMBER TO ARRAY LENGTH
// ¸RETURN ARRAY AT THE POSITION OF THAT NUMBER

export { choice };
