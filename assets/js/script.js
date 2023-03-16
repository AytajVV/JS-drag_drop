let upload = document.getElementById("upload");
let inputClick = document.getElementById("inputClick");
let table = document.querySelector(".table");
let btn = document.querySelector(".btn");
let area = document.querySelector(".item");
let tbody = document.getElementById("tbody");

let newArr1=[];
let arr1 = [];
upload.addEventListener("click", function () {
    inputClick.click();
});


inputClick.onchange = function (e) {
    Upload(e.target.files);
    RemoveAll();

}
area.ondrop = function (e) {
    e.preventDefault();
    console.log(e.dataTransfer.files);
    Upload(e.dataTransfer.files);
    RemoveAll();
}


area.ondragover = function (e) {
    e.preventDefault();
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
            tdNum.classList.add("indexer");
            spanNum.innerText = table.rows.length;
            tdNum.append(spanNum);
            arr1.push(tdNum.innerText);

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
            tbody.append(tr);
            
            let newIcons = document.querySelectorAll(".fa-trash-can");
            
            console.log(arr1.length);
            
            newIcons.forEach(btn=>{
                btn.addEventListener("click",function (e) {
                    btn.parentNode.parentNode.remove();
                    newArr1.pop(tr);
                    if(tbody.innerHTML==""){
                        let tableHead = document.getElementById("aytac");
                        tableHead.style.display="none";
                        let btn = document.querySelector(".btn");
                        btn.style.display="none";
                    }
                    // spanNum.innerText = newArr.length;
                    let newArr = document.querySelectorAll(".indexer")
                    for(i=0;i<newArr.length;i++){
                        newArr[i].innerText = arr1[i];
                    }
                        arr1.pop();
                })
            })



            table.lastElementChild.append(tr);
            table.classList.remove("d-none");
            btn.classList.remove("d-none");
            inputClick.value = "";

            


        }
        reader.readAsDataURL(element);



    });
}


let removeAll = document.querySelector(".btn-danger");
function RemoveAll(){
    removeAll.addEventListener("click", function (){
        let tableHead = document.getElementById("aytac");
        tableHead.style.display="none";
        tbody.innerHTML="";
        removeAll.classList.add("d-none");
    })
}
        