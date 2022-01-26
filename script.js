const api = "https://thronesapi.com/api/v2/Characters";

async function fetchdata(){
    let data = await fetch(api).then((response)=>response.json());
    try{
        let container = document.querySelector(".container-fluid");

        for(var i in data){
            container.innerHTML += 
            `<div class="flex-container mt-3 ml-3">
                <div class="card">
                    <div class="card-title">
                        <h3>${data[i].title}</h3>
                        <div class="card-body">
                            <div class="row">
                                <div class="col" id="col-1">
                                    <img src="${data[i].imageUrl}" style="width:120px;height:160px"></img>
                                </div>
                                <div class="col" id="col-2">
                                    <p><b>First Name:</b> ${data[i].firstName}</p>
                                    <p><b>Last Name:</b> ${data[i].lastName}</p>
                                    <p><b>Full Name:</b> ${data[i].fullName}</p>
                                    <p><b>Family:</b> ${data[i].family}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        }
        
    }catch(error){
        console.log(error);
    }
}
fetchdata();
