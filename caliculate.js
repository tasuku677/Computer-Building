// ここからJavaScriptを記述してください。
// fetch("https://api.recursionist.io/builder/computers");
config = {
    url:"https://api.recursionist.io/builder/computers",
    cpuUrl: "https://api.recursionist.io/builder/computer?type=cpu",
    gpuUrl: "https://api.recursionist.io/builder/computer?type=gpu",
    ramUrl: "https://api.recursionist.io/builder/computer?type=ram",
    
};
let parent = document.getElementById("parent");


function getModel(partsType){
    let brand = document.getElementById(partsType+"Brand");
    let partsUrl = config.url + "?type=" + partsType;
    let modelSet = new Set();
    fetch(partsUrl).then(response=>response.json()).then(function(allParts){
        for(eachPart of allParts){
            if(brand.value == eachPart.Brand){modelSet.add(eachPart.Model);}
        }
        let model = document.getElementById(partsType + "Model");
        model.innerHTML = `<option selected>Open this select menu</option>`;
        for(const item of modelSet.keys()){
            model.innerHTML += `<option value="${item}">${item}</option>`;
        }
        console.log(model);
    })
}
function getBench(partsType, model, ){
    fetch(cpuUrl).then(response=>response.json()).then(function(allParts){
        for(let cpu of allParts){
            if(cpuModel.value == cpu.Model) {
                cpuBenchmark = cpu.Benchmark;
            }
        }
        return 0;
    })
}

//CPUBrandを選択したときに、Modelのセレクト候補を追加する実装
let cpuBrand = document.getElementById("cpuBrand");
let cpuModel = document.getElementById("cpuModel");
let cpuUrl = config.url + "?type=cpu";
cpuBrand.addEventListener("change", function(){
    getModel("cpu");
})
// cpuBrand.addEventListener("change", function(){
//     let cpuModelSet = new Set();
//     fetch(cpuUrl).then(response=>response.json()).then(function(data){
//         for(let cpu of data){
//             if(cpuBrand.value == cpu.Brand){cpuModelSet.add(cpu.Model);}
//         }
//         cpuModel.innerHTML = `<option selected value="">Open this select menu</option>`;
//         for (const item of cpuModelSet.keys()) {
//             cpuModel.innerHTML += `<option value="${item}">${item}</option>`;
//         }
//     })
// })
let cpuBenchmark = 0;
cpuModel.addEventListener("change", function(){
    fetch(cpuUrl).then(response=>response.json()).then(function(data){
        for(let cpu of data){
            if(cpuModel.value == cpu.Model) {
                cpuBenchmark = cpu.Benchmark;
            }
        }
    })
})

//GPUBrandを選択したときに、Modelのセレクト候補を追加する実装
let gpuBrand = document.getElementById("gpuBrand");
let gpuModel = document.getElementById("gpuModel");
let gpuUrl = config.url + "?type=gpu";
gpuBrand.addEventListener("change", function(){
    getModel("gpu");
    // let gpuModelSet = new Set();
    // fetch(gpuUrl).then(response=>response.json()).then(function(data){
    //     for(let gpu of data){
    //         if(gpuBrand.value == gpu.Brand){gpuModelSet.add(gpu.Model);}
    //     }
    //     gpuModel.innerHTML = `<option selected value="">Open this select menu</option>`;
    //     for(const item of gpuModelSet.keys()){
    //         gpuModel.innerHTML += `<option value="${item}">${item}</option>`; 
    //     }
    // })
})

let gpuBenchmark = 0;
gpuModel.addEventListener("change", function(){
    fetch(gpuUrl).then(response=>response.json()).then(function(data){
        for(let gpu of data){
            if(gpuModel.value == gpu.Model) {
                gpuBenchmark = gpu.Benchmark;
            }
        }
    })
})


//RAMBrandを選択したときに、Modelのセレクト候補を追加する実装
let ramCount = document.getElementById("ramCount");
let ramBrand = document.getElementById("ramBrand");
ramCount.addEventListener("change", function(){
    ramBrand.value = "";
})
let ramModel = document.getElementById("ramModel");
let ramUrl = config.url + "?type=ram";
ramBrand.addEventListener("change", function(){
    // getModel("ram", config.ramUrl);
    let ramModelSet = new Set();
    fetch(ramUrl).then(response=>response.json()).then(function(data){
        for(ram of data){
            if(ramBrand.value == ram.Brand && ram.Model.includes(ramCount.value)){ramModelSet.add(ram.Model);}
        }
        ramModel.innerHTML = `<option selected value="">Open this select menu</option>`;
        for(let item of ramModelSet.keys()){
            ramModel.innerHTML += `<option value="${item}">${item}</option>`; 
        }
    })
})
let ramBenchmark = 0;
ramModel.addEventListener("change", function(){
    fetch(ramUrl).then(response=>response.json()).then(function(data){
        for(let ram of data){
            if(ramModel.value == ram.Model) {
                ramBenchmark = ram.Benchmark;
            }
        }
    })
})


//HDD or SSD ? を選択したときに、StorageサイズとBrandのセレクト候補を追加する実装
let storageType = document.getElementById("storageType");
let storageSize = document.getElementById("storageSize");
let storageBrand = document.getElementById("storageBrand");
storageType.addEventListener("change", function(){
    if(storageType.value == "ssd"){
        storageSize.innerHTML = `
            <option selected value="">Open this select menu</option>
            <option value="58GB">58GB</option>
            <option value="118GB">118GB</option>
            <option value="128GB">128GB</option>
            <option value="250GB">250GB</option>
            <option value="256GB">256GB</option>
            <option value="280GB">280GB</option>
            <option value="400GB">400GB</option>
            <option value="480GB">480GB</option>
            <option value="500GB">500GB</option>
            <option value="512GB">512GB</option>
            <option value="800GB">800GB</option>
            <option value="960GB">960GB</option>
            <option value="1TB">1TB</option>
            <option value="2TB">2TB</option>
            <option value="4TB">4TB</option>        
        `;
    }
    else if(storageType.value == "hdd"){
        storageSize.innerHTML = `
            <option selected value="">Open this select menu</option>
            <option value="250GB">250GB</option>
            <option value="300GB">300GB</option>
            <option value="450GB">450GB</option>
            <option value="500GB">500GB</option>
            <option value="1TB">1TB</option>
            <option value="1.5TB">1.5TB</option>
            <option value="2TB">2TB</option>
            <option value="3TB">3TB</option>
            <option value="4TB">4TB</option>
            <option value="5TB">5TB</option>
            <option value="6TB">6TB</option>
            <option value="8TB">8TB</option>
            <option value="10TB">10TB</option>
            <option value="12TB">12TB</option>
        `;
    }

    let storageUrl = config.url + "?type=" + `${storageType.value}`;
    fetch(storageUrl).then(response=>response.json()).then(function(data){
        let storageBrandSet = new Set();
        for(storage of data){
            storageBrandSet.add(storage.Brand);
        }
        storageBrand.innerHTML = `<option selected value="">Open this select menu</option>`;
        for(let item of storageBrandSet.keys()){
            storageBrand.innerHTML += `<option value="${item}">${item}</option>`;
        }
    })
})
storageSize.addEventListener("change", function(){
    storageBrand.value = "";
})
//StorageのBrandを選択したとき、StorageのModelの選択しを追加する
let storageModel = document.getElementById("storageModel");
storageBrand.addEventListener("change", function(){
    let storageUrl = config.url + "?type=" + `${storageType.value}`;
    // getModel("storage", storageUrl);
    let storageModelSet = new Set();
    fetch(storageUrl).then(response=>response.json()).then(function(data){
        for(let storage of data){
            if(storageBrand.value == storage.Brand && storage.Model.includes(storageSize.value)) storageModelSet.add(storage.Model);
        }
        storageModel.innerHTML = `<option selected value="">Open this select menu</option>`;
        for(let item of storageModelSet.keys()){
            storageModel.innerHTML += `<option value="${item}">${item}</option>`;
        }
    })
})
let storageBenchmark = 0;
storageModel.addEventListener("change", function(){
    let storageUrl = config.url + "?type=" + `${storageType.value}`;
    fetch(storageUrl).then(response=>response.json()).then(function(data){
        for(let storage of data){
            if(storageModel.value == storage.Model) {
                storageBenchmark = storage.Benchmark;
            }
        }
    })
})


let addButton = document.getElementById("addButton");
addButton.addEventListener("click", function(){
    if(cpuModel.value && gpuModel.value && ramModel.value && storageModel.value){
        let result = document.createElement("div");
        result.classList.add("bg-info", "text-white", "my-3");
        result.append(showPartsInfo("CPU", cpuBrand.value, cpuModel.value));
        result.append(showPartsInfo("GPU", gpuBrand.value, gpuModel.value));
        result.append(showPartsInfo("RAM", ramBrand.value, ramModel.value));
        result.append(showPartsInfo("Storage", storageBrand.value, storageModel.value, storageType.value, storageSize.value));
        let gamingScore = cpuBenchmark * 0.25 + gpuBenchmark * 0.6 + ramBenchmark * 0.125 + storageBenchmark * 0.025;
        let workScore = cpuBenchmark * 0.6 + gpuBenchmark * 0.25 + ramBenchmark * 0.1 + storageBenchmark * 0.05;
        let scroeContainer = document.createElement("div");
        scroeContainer.classList.add("d-flex", "justify-content-end");
        scroeContainer.append(showScore("Gaming", parseInt(gamingScore)));
        scroeContainer.append(showScore("Work", parseInt(workScore)));
        result.append(scroeContainer);
        parent.append(result);
    }
    else{
        alert("Fill in the blanks");
    }
    
})

function showPartsInfo(partsType, brandName, modelName, storageType="", storageSize=""){
    let ele = document.createElement("div");
    ele.classList.add("justify-content-start");
    if(partsType == "Storage"){
        ele.innerHTML = `
            <h1>${partsType}</h1>
            <h5>Disk : ${storageType.toUpperCase()}</h5>
            <h5>Disk : ${storageSize}</h5>
            <h5>Brand : ${brandName}</h5>
            <h5>Model : ${modelName}</h5>
        `;
    }
    else{
        ele.innerHTML = `
            <h1>${partsType}</h1>
            <h5>Brand : ${brandName}</h5>
            <h5>Model : ${modelName}</h5>
        `;
    }
    return ele;
}

function showScore(evaluateType, score){
    let ele = document.createElement("div");
    ele.classList.add("mx-3");
    ele.innerHTML = `<h3>${evaluateType} : ${score} %</h3>`;
    return ele;
}




// function getModel(partsType){
//     let brand = document.getElementById(partsType+"Brand");
//     let partsUrl = config.url + "?type=" + partsType;
//     let modelSet = new Set();
//     fetch(partsUrl).then(response=>response.json()).then(function(data){
//         for(parts of data){
//             if(brand.value == parts.Brand){modelSet.add(parts.Model);}
//         }
//         let model = document.getElementById(partsType + "Model");
//         model.innerHTML = `<option selected>Open this select menu</option>`;
//         for(const item of modelSet.keys()){
//             model.innerHTML += `<option value="${item}">${item}</option>`;
//         }
//         console.log(model);
//     })
// }

// let gpuurl2 = config.url + "?type=ssd";
// let gpuBrandSet2 = new Set();
// //BrandをセレクトしたときにModel情報を
// fetch(gpuurl2).then(response=>response.json()).then(function(data){
//     for(info of data){
//         // console.log(info.Brand);
//         gpuBrandSet2.add(info.Brand);
//     }
//     for (const item of gpuBrandSet2.keys()) {
//         console.log(item);
//     }
// })
