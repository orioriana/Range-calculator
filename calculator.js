// Slider 1

var rangeSlider1 = document.getElementById("rs-range-line-1"),
    rangeBullet1 = document.getElementById("rs-bullet-1"),
    label1 = document.getElementById("rs-label-1");

rangeSlider1.addEventListener("input", showSliderValue1, false);


function showSliderValue1() {
  if(rangeSlider1.value == 3000){
    label1.innerHTML = '3K';
  } else{
    label1.innerHTML = rangeSlider1.value;
  }
  var bulletPosition = (rangeSlider1.value /rangeSlider1.max);
  rangeBullet1.style.left = (bulletPosition * 385) + "px";
  UpdateValues();
}


// Slider 2

var rangeSlider2 = document.getElementById("rs-range-line-2"),
    rangeBullet2 = document.getElementById("rs-bullet-2"),
    label2 = document.getElementById("rs-label-2");

rangeSlider2.addEventListener("input", showSliderValue2, false);


function showSliderValue2() {
  label2.innerHTML = rangeSlider2.value;
  var bulletPosition = (rangeSlider2.value /rangeSlider2.max);
  rangeBullet2.style.left = (bulletPosition * 375) + "px";
  UpdateValues();
}


// Slider 3

var rangeSlider3 = document.getElementById("rs-range-line-3"),
    rangeBullet3 = document.getElementById("rs-bullet-3"),
    label3 = document.getElementById("rs-label-3");


rangeSlider3.addEventListener("input", showSliderValue3, false);


function showSliderValue3() {
  label3.innerHTML = rangeSlider3.value;
  var bulletPosition = (rangeSlider3.value /rangeSlider3.max);
  rangeBullet3.style.left = (bulletPosition * 375) + "px";
  UpdateValues();
}

var R1,
    R2,
    R3,
    R4;

function UpdateValues(){
    R2 = Math.round((rangeSlider1.value * (rangeSlider2.value /100)*0.12)*12);
    R1 = Math.floor((R2*3));
    R3 = (R2*(rangeSlider3.value*12));
    R4 = ((R2*2)*(rangeSlider3.value*12));
    document.getElementById("R1").innerHTML = R1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " friends";
    document.getElementById("R2").innerHTML = R2;
    document.getElementById("R3").innerHTML = "€" +R3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("R4").innerHTML = "€" + R4.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}




