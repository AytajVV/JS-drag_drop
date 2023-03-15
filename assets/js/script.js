let upload = document.getElementById("upload");
let inputClick = document.getElementById("inputClick");
let table = document.querySelector(".table");
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

            //Name
            let tdName = document.createElement("td");
            tdName.innerText = element.name;

            //Image
            let tdImage = document.createElement("td");
            let img = document.createElement("img");
            img.setAttribute("src", e.target.result);
            img.classList.add("imgStyle");
            tdImage.append(img);

            //Size
            let tdSize = document.createElement("td");
            tdSize.innerText = element.size;

            //Settings
            let tdSettings = document.createElement("td");
            let icon = document.createElement("i");
            //<i class="fa-solid fa-xmark"></i>
            icon.classList.add("fa-solid", "fa-mark");

            tr.append(tdName, tdImage, tdSize, tdSettings);

            table.lastElementChild.append(tr);

        }
        reader.readAsDataURL(element);
    });
}