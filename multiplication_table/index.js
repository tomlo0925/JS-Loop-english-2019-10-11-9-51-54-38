for(var i = 1; i <= 9; i++) {
  let log = [];
  for (var j = 1; j <= i; j++) {
    log.push(`${i}*${j}=${i*j}`)
  }

  console.log(log.join(' '));
}