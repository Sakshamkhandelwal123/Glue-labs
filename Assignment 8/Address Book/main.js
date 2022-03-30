document.getElementById("filterInput").addEventListener("keyup", () => {
    let filterValue = document.getElementById("filterInput").value.toUpperCase();
    let ul = document.getElementById("names");
    let li = ul.querySelectorAll("li.collection-item");
    let hl = document.querySelectorAll('li.collection-header');
    li.forEach(item =>{
        let a = item.getElementsByTagName('a')[0];
        item.style.display = a.innerText.toUpperCase().startsWith(filterValue) ? 'block' : 'none';
    });
    hl.forEach(item => {
        let temp = item.getElementsByTagName('h5')[0];
        item.style.display = temp.innerText.toUpperCase().startsWith(filterValue) ? 'block' : 'none';
    });
});