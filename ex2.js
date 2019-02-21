let imgList = ["images/cage1.png", "images/cage2.jpg", "images/cage3.jpg", "images/cage4.jpg", "images/cage5.png"];
let i = 0;

function imgNext()
{

let image1=document.getElementById('image1');

i = (i + 1) % 5;

image1.src = imgList[i];

}

function imgPrev()
{

let image1=document.getElementById('image1');

i--;

if(i < 0)
{
  i = 4;
}

image1.src = imgList[i];

}
