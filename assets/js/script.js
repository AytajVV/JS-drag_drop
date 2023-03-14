let upload = document.getElementById("upload");
let inputClick = document.getElementById("inputClick");
upload.addEventListener("click", function(){
    inputClick.click();
});
inputClick.onchange=function(e){
    //console.log(e.target.files);
    let arrayFile = e.target.files;
    Array.from(arrayFile).forEach(element => {
        let reader = new FileReader();
        reader.onloadend=function(e){
            //console.log(e.target.result);
            let tr = document.createElement("tr");
            let tdName = document.createElement("td");
            tdName.innerText = element.name;
            let tdImage = document.createElement("td");
            tdImage.innerText = element.
        }
        reader.readAsDataURL(element);
    });
}