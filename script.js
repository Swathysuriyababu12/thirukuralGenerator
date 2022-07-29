function urll(value) {
  params = "https://api-thirukkural.vercel.app/api?num=" + value;
  var param = params.toString();
  return param;
}

//var apiurl = "https://api-thirukkural.vercel.app/api?num=2";

function getInfo() {
  var url = "https://api-thirukkural.vercel.app/api";
  var num = Math.random() * 100;
  var final = Math.round(num);
  fetch(urll(final))
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("header1").innerHTML = data.line1;
      document.getElementById("header2").innerHTML = data.line2;
    })
    .catch((err) => console.log(err));
}
