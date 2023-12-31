$(document).ready(function () {
    loadDataTable();
})

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": { url: '/admin/product/getall' },
        "columns": [
            //{ data: 'title' },
            //{ data: 'isbn' },
            //{ data: 'price' },
            //{ data: 'author' },
            //{ data: 'category.name' }
            { data: 'title', "width": "25%" },
            { data: 'isbn', "width": "15%" },
            { data: 'listPrice', "width": "10%" },
            { data: 'author', "width": "20%" },
            { data: 'category.name', "width": "15%" }
        ]
    });
}

//{ data: 'title', "width": "25%" },
//{ data: 'isbn', "width": "15%" },
//{ data: 'listPrice', "width": "10%" },
//{ data: 'author', "width": "20%" },
//{ data: 'category.name', "width": "15%" }
