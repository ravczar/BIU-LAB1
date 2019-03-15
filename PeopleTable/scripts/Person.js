function Person(json){
    var self = this;
    self.id = json.id;
    self.gender = json.gender;
    self.name  = json.firstName;
    self.surname = json.lastName;
    self.email = json.email;
    self.income = json.income;
    self.birthday = json.birthday;
    self.age = json.age;

    self.toTableRow = function(){
        return '<tr><td>'
            +self.id
            +'</td><td>'
            +self.gender
            +'</td><td>'
            +self.name
            +'</td><td>'
            +self.surname
            +'</td><td>'
            +self.email
            +'</td><td>'
            +self.income
            +'</td><td>'
            +self.birthday
            +'</td><td>'
            +self.age
            +'</td></tr>'
    }
    
    self.fullName = function(){
        return sum(self.name, self.surname);
    }
    
    var sum = function(a,b){
        return a+ " "+b;
    }
    
}