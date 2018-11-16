var numeri = 0;

for (var i = 1; i < 101; i++) {
  numeri++;
  if (((numeri % 3)==0) && ((numeri % 5)==0)) {
    document.writeln("fizz-buzz");
  }
  else {
    if ((numeri % 3) == 0) {
    document.writeln("buzz");
    }
    else {
      if ((numeri % 5) == 0) {
      document.writeln("fizz");
      }
      else {
      document.writeln(numeri);
      }
    }
  }
}
