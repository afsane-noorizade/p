var $table = [];

function add(){

    var $FirstName = document.getElementById("FirstName").value;
    var $LastName = document.getElementById("LastName").value;

    //بررسی پر بودن اینپوت ها
    if($FirstName == ""){
        alert("Please, Fill First Name");
    }
    if($LastName == ""){
        alert("Please, Fill Last Name");
    }

    //درصورت پر بودن تمامی اینپوت ها، الگوریتم اضافه شدن ، اجرا میشود
    if($FirstName != "" && $LastName != ""){
        var $row = [$FirstName, $LastName];
        $table.push($row);

        var $result = '';
        for(var i = 0; i < $table.length ; i++){
            $result = $result +
                `<tr><td>` + (i + 1) +`</td><td>` 
                + $table[i][0] + 
                `</td><td>`
                +$table[i][1] + 
                `</td><td>
                <button type="button">Delete</button>
                <button type="button">Update</button>
                </td></tr>`;
        }
        document.getElementById("myTbody").innerHTML = $result;
    }
   
}
function Update(){
    var $FirstName =$(this).parents("tr").find("input[firstname=edit-name]");
   
    var $lastName =$(this).parents("tr").find("input[lastname=edit-name]");
   


}

