
  document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault()
    var row = document.createElement("tr");
    document.getElementById("myTable").appendChild(row);
    
    var data = [document.getElementById("fname").value, document.getElementById("lname").value,
     document.getElementById("address").value, document.getElementById("pincode").value, 
     document.querySelector('input[name="gender"]:checked').value, 
     document.querySelector('input[name="food1"]:checked') ? document.getElementById("food1").value : "" + " " + 
     document.querySelector('input[name="food2"]:checked') ? document.getElementById("food2").value : "" , 
     document.getElementById("state").value, document.getElementById("country").value]
    
    for(i = 0; i < data.length; i++){
      var cell = document.createElement("td");
      var cellText = document.createTextNode(data[i]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
  });
  