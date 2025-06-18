var index = 1;
   function isValidUrl(url) {
  var pattern = /^(https?:\/\/)?(www\.)?[\w\-]+\.[a-z]{2,}(\/\S*)?$/;
}

function addBookmark(){
    var name = document.getElementById("siteNameInput").value;
    var url = document.getElementById("siteUrlInput").value;

    if( name === "" || name.trim().length < 3 || !isValidUrl(url)){
Swal.fire({
  html: `
    <div style="font-family: Arial, sans-serif; color: #000; min-height: 200px;">
     
      <div style="display: flex; justify-content: flex-start; gap: 10px; margin-bottom: 15px; margin-top: 30px;">
        <i class="fa-solid fa-circle" style="color:rgb(174, 66, 50); font-size: 20px;"></i>
        <i class="fa-solid fa-circle" style="color:rgb(242, 190, 21); font-size: 20px;"></i>
        <i class="fa-solid fa-circle" style="color:rgb(52, 174, 50); font-size: 20px;"></i>
      </div>

      <h3 style="margin-top: 10px; text-align: center;">
        Site Name or URL is not valid, Please follow the rules below:
      </h3>

      <div style="display: flex; align-items: center; gap: 10px; margin: 10px 0;">
       <i class="fa-solid fa-circle-arrow-right" style="color:rgb(174, 66, 50);"></i>
        <h5 style="margin: 0;">Site name must contain at least 3 characters</h5>
      </div>
      <div style="display: flex; align-items: center; gap: 10px;">
      <i class="fa-solid fa-circle-arrow-right"  style="color:rgb(174, 66, 50);"></i>
        <h5 style="margin: 0;">Site URL must be a valid one</h5>
      </div>
    </div>
  `,
  showCloseButton: true,
  showConfirmButton: false,
  background: '#fff',
  width: '500px'
  
});
return;
    }
    
     var table = document.getElementById("tBody");
      var row = table.insertRow();
      
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      
      cell1.innerText = index;
      cell2.innerText = name;

      var visitBtn = document.createElement("button");
      visitBtn.innerHTML = '<i class="fa-solid fa-eye px-2"></i> Visit';
    visitBtn.className = "btn";
    visitBtn.style.color ="white"
      visitBtn.style.backgroundColor ="#a2ba54";
     visitBtn.onclick = function(){
        let fixUrl = url;
        if(!fixUrl.startsWith("http://") && !fixUrl.startsWith("https://")){
           fixUrl = "https://" + fixUrl; 
        }
        window.open(fixUrl, "_blank");
     };
     cell3.appendChild(visitBtn);
    

     var deleteBtn = document.createElement ("button");
     deleteBtn.innerHTML =  '<i class="fa-solid fa-trash-can px-1"></i> Delete';
     deleteBtn.className = "btn btn-danger";
     deleteBtn.onclick = function(){
        row.remove();
     };
     cell4.appendChild (deleteBtn);
     index++;
     document.getElementById("siteNameInput").value = "";
document.getElementById("siteUrlInput").value = "";

}
 