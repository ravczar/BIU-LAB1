
var viewModel = new PeopleTableViewModel ({
    pageSize: document.getElementById('my_List').value,
    count: data.length,
    context: document.getElementById('table')
});

var comparator = new Comparators();

function init(){
    viewModel.next();
}
















