
const act = () => {
  var wt = document.getElementById("weight").value;
  var ht = document.getElementById("height").value;
  if(wt && ht !=='')
  {
    document.querySelector("#digit").innerHTML = `Your BMI is : ${Math.round((wt * (3.28084 ** 2)) / (ht * ht))}`;
  }
  else{
    alert('Please Enter the Fields!');
  }
};

document.querySelector("#digit").style.fontSize = "2rem";
