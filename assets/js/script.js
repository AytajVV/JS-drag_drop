let upload = document.getElementById("upload");
let inputClick = document.getElementById("inputClick");
let table = document.querySelector(".table");
let btn = document.querySelector(".btn");
let area = document.querySelector(".item");


upload.addEventListener("click", function () {
    inputClick.click();
});


inputClick.onchange = function (e) {
    Upload(e.target.files);

}


area.ondragover = function (e) {
    e.preventDefault();
}
area.ondrop = function (e) {
    e.preventDefault();
    console.log(e.dataTransfer.files);
    Upload(e.dataTransfer.files);
}

//main func
function Upload(files) {
    Array.from(files).forEach(element => {
        let reader = new FileReader();
        reader.onloadend = function (e) {
            //console.log(e.target.result);

            let tr = document.createElement("tr");

            //number
            let tdNum = document.createElement("td");
            let spanNum = document.createElement("span");
            let x = table.rows.length;
            spanNum.innerText=x;
            tdNum.append(spanNum);

            //unique
            let tdUnique = document.createElement("td");
            let spanUni = document.createElement("span");
            const uuid = crypto.randomUUID();
            //console.log(uuid);
            spanUni.innerText=uuid;
            tdUnique.append(spanUni);

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
            icon.classList.add("fa-solid", "fa-trash-can");
            icon.style.cursor = "pointer";

            

            tdSettings.append(icon);



            tr.append(tdNum, tdUnique, tdName, tdImage, tdSize, tdSettings);
            // icon.onclick=()=>{
                
            //     for (let i = 0; i < table.rows.length; i++) {
            //         table.rows[i].innerText="";
            //     }
            
            // }

            table.lastElementChild.append(tr);
            table.classList.remove("d-none");
            btn.classList.remove("d-none");
            inputClick.value = "";


        }
        reader.readAsDataURL(element);



    });
}


