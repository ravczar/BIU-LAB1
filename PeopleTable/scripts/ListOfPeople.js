function ListOfPeople(){
    var people =[];
    var self = this;
    self.addPerson = function(json){
        people.push(new Person(json));
    }
    
    self.toTable = function(){
        var table = '<table>';
        //table += generateTableHeader();
        generateTableHeader();
        for(var i =0;i<people.length;i++){
            table+=people[i].toTableRow();
        }
        table+='</table>';
        return table;
    }

    self.clear = function () {
        people=[];
    }
    
    var generateTableHeader= function(){
            return '<tr>'
                    +'<th id="sort_Id"><button id="sort_Id" onclick="viewModel.sort(comparator.byId)"> Id </button></th>'
                    +'<th id="sort_Gender"><button id="sort_Gender" onclick="viewModel.sort(comparator.byGender)"> Gender </button></th>' 
                    +'<th id="sort_Name"><button onclick="viewModel.sort(comparator.byName)"> Name </button></th>' 
                    +'<th id="sort_Surname"><button onclick="viewModel.sort(comparator.bySurname)"> Surname </button></th>'
                    +'<th id="sort_Email"><button onclick="viewModel.sort(comparator.byEmail)"> Email </button></th>' 
                    +'<th id="sort_Income"><button onclick="viewModel.sort(comparator.byIncome)"> Income </button></th>' 
                    +'<th id="sort_Birthday"><button onclick="viewModel.sort(comparator.byBirthday)"> Birthday </button></th>' 
                    +'<th id="sort_Age"><button onclick="viewModel.sort(comparator.byAge)"> Age </button></th>'
                +'</tr>';
    } 

  /*  var generateTableHeader= function(){
        return '<tr>'
        + createElement("th", {"id":"sort_Id"}, "Id")
        + createElement("th", {"id":"sort_Gender"}, "Gender")
        + createElement("th", {"id":"sort_Name"}, "Name")
        + createElement("th", {"id":"sort_Surname"}, "Surname")
        + createElement("th", {"id":"sort_Email"}, "Email")
        + createElement("th", {"id":"sort_Income"}, "Income")
        + createElement("th", {"id":"sort_Birthday"}, "Birthday")
        + createElement("th", {"id":"sort_Age"}, "Age")
        +'</tr>';
    } */

    function createElement(element, attribute, inner) {
        if (typeof(element) === "undefined") {
          return false;
        }
        if (typeof(inner) === "undefined") {
          inner = "";
        }
        var el = document.createElement(element);
        if (typeof(attribute) === 'object') {
          for (var key in attribute) {
            el.setAttribute(key, attribute[key]);
          }
        }
        if (!Array.isArray(inner)) {
          inner = [inner];
        }
        for (var k = 0; k < inner.length; k++) {
          if (inner[k].tagName) {
            el.appendChild(inner[k]);
          } else {
            el.appendChild(document.createTextNode(inner[k]));
          }
        }
        return el;
      }



}