function calculateIntrest() {
  let principle = parseFloat(document.getElementById("principle").value);
  let intrestRatePercent = parseFloat(
    document.getElementById("intrestRate").value
  );
  let intrestRateFixed =
    parseFloat(document.getElementById("intrestRate").value) / 100;
  let time = parseFloat(document.getElementById("time").value);

  let total = principle * (1 + intrestRateFixed * time);
  let intrest = total - principle;

  document.querySelector("#response").innerHTML =
    "With a beginning principal of $" +
    principle +
    " and with a growth rate of " +
    intrestRatePercent +
    "% for " +
    time +
    " years, your total intrest will be $" +
    intrest.toFixed(2) +
    " with a grand total of $" +
    total.toFixed(2) +
    ".";
}
