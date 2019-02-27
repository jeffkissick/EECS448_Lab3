//Access the tag:
function doEverythingfunction()
{
    let bodyBg = document.getElementById("bg");
    let paraWords = document.getElementById("words");
    let colorTagRedb = document.getElementById("redb");
    let colorTagBlueb = document.getElementById("blueb");
    let colorTagGreenb = document.getElementById("greenb");
    let wTag = document.getElementById("w");
    let colorTagRedg = document.getElementById("redg");
    let colorTagGreeng = document.getElementById("greeng");
    let colorTagBlueg = document.getElementById("blueg");

    let redBrdr = colorTagRedb.value;
    let greenBrdr = colorTagGreenb.value;
    let blueBrdr = colorTagBlueb.value;
    let wBrdr = wTag.value;
    let redGnd = colorTagRedg.value;
    let greenGnd = colorTagGreeng.value;
    let blueGnd = colorTagBlueg.value;
    
    paraWords.style.borderColor = `rgb(${redBrdr},${greenBrdr},${blueBrdr})`;
    paraWords.style.borderWidth = `${wBrdr}px`;
    bodyBg.style.backgroundColor = `rgb(${redGnd},${greenGnd},${blueGnd})`;
}