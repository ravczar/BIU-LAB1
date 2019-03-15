document.getElementById("previous_btn").addEventListener("click", function(){ 
    viewModel.prev();
    alertify.error('Kliknąłeś poprzedni!');
    //console.log('kliknałeś button prev');
    //console.log(document.getElementById('my_List').value);
});

document.getElementById("next_btn").addEventListener("click", function(){
    viewModel.next();
    alertify.success('Kliknąłeś następny!');
    //console.log('kliknałeś button next');
    //console.log(document.getElementById('my_List').value);
});

document.getElementById("my_List").addEventListener("click", function(){
    var basicValue ;
    var selectedValue = document.getElementById("my_List").value;
    
    if (basicValue != selectedValue ){
        viewModel.current( selectedValue );
    }
    basicValue = document.getElementById("my_List").value;
});


/* // Problem z czasem tworzenia elementu a odpalania skryptu z listenerem - generateTableHeader() z listOfPeople
document.getElementById("sort_Id").addEventListener("click", function(){
    viewModel.sort(comparator.byAge);
});
document.getElementById("sort_Gender").addEventListener("click", function(){
    viewModel.sort(comparator.byGender);
});
document.getElementById("sort_Name").addEventListener("click", function(){
    viewModel.sort(comparator.byName);
});
document.getElementById("sort_Surname").addEventListener("click", function(){
    viewModel.sort(comparator.bySurname);
});
document.getElementById("sort_Email").addEventListener("click", function(){
    viewModel.sort(comparator.bySurname);
});
document.getElementById("sort_Income").addEventListener("click", function(){
    viewModel.sort(comparator.byIncome);
});
document.getElementById("sort_Birthday").addEventListener("click", function(){
    viewModel.sort(comparator.byBirthday);
});
document.getElementById("sort_Age").addEventListener("click", function(){
    viewModel.sort(comparator.byAge);
}); */
