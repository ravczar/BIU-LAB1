function PeopleTableViewModel (config) {
    var self = this;
    self.people = new ListOfPeople();
    self.currentPage = 0;
    self.pageSize = config.pageSize;
    self.context = config.context;
    self.previousChoice;

    // funkcja pomocnicza
    var getData = function (begin, end){  
        if(end > data.length){
            end = data.length;
        }
        if (begin < 0){
            begin = 0;
        }
        for (var i = begin; i < end; i ++){
            self.people.addPerson(data[i]);
        }

    }

    var updateCurrentPageSize = function(idOfTheList){
        self.pageSize = document.getElementById(idOfTheList).value;
        //console.log("Rozmiar strony widziany w obiekcie viewModel: >" + self.pageSize);
    }
    self.next = function (){
        updateCurrentPageSize('my_List');
        //console.log("previousChoice: " + self.previousChoice);
        if (self.previousChoice === false) {
            self.currentPage ++;
          }

        self.people.clear(); 
        var begin = (self.currentPage) * self.pageSize;
        var end = (self.currentPage + 1) * self.pageSize;
        getData(begin, end);
        self.currentPage++;
        self.context.innerHTML=self.people.toTable();
        self.previousChoice = true;
        //console.log("OBECNA STRONA: " + self.currentPage)
    }
    self.prev = function (){
        updateCurrentPageSize('my_List');
        //console.log("Rozmiar strony widziany wklasie: >" + self.pageSize);
        //console.log("previousChoice: " + self.previousChoice);
        if (self.previousChoice) { 
            self.currentPage --;
          }

        self.people.clear();
        if (self.currentPage-1 >= 0){
            self.currentPage--;
        }    
        var begin = (self.currentPage) * self.pageSize;
        var end = (self.currentPage + 1) * self.pageSize;
        getData(begin, end);
        self.context.innerHTML=self.people.toTable();
        self.previousChoice = false;
        //console.log("OBECNA STRONA: " + self.currentPage)
    }

    self.current = function( selectedValue ){
        self.people.clear(); 
        self.pageSize = selectedValue;
        var begin = 0;
        var end =  self.pageSize;
        getData(begin, end);
        self.context.innerHTML=self.people.toTable();
    }
    self.sort = function (comparer){
        data.sort(comparer);
        self.currentPage=0;
        self.next();
    }
}