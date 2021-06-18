document.getElementById("add").addEventListener("click", function () {
  document.getElementById("total").innerHTML =
    +document.getElementById("total").innerHTML + 1;  //用innerHTML抓值
});
document.getElementById("minus").addEventListener("click", function () {
  document.getElementById("total").innerHTML =
    +document.getElementById("total").innerHTML -1;  //用innerHTML抓值
});
