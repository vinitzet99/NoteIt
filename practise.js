console.log("this is included")
let noteobj = [];
let titleobj=[];
showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function (e) {
    let text = document.getElementById("textarea");
    let title=document.getElementById("title");
    let heading=localStorage.getItem("heading");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteobj = [];
    }
    else {
        titleobj=JSON.parse(heading)
        noteobj = JSON.parse(notes)
    }
    titleobj.push(title.value)
    noteobj.push(text.value);
    localStorage.setItem("heading",JSON.stringify(titleobj));
    localStorage.setItem("notes", JSON.stringify(noteobj));
    text = "";
    titile="";
    showNotes();
});
function showNotes() {
    let notes = localStorage.getItem("notes");
    let heading=localStorage.getItem("heading");
    if (notes == null) {
        noteobj = []
    }
    else {
        noteobj = JSON.parse(notes);
        titleobj=JSON.parse(heading);
    }

    let html = "";
    noteobj.forEach(function (element, index) {
        html += `<div class="card mx-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${titleobj[index]}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>        
        </div>
    </div>`

    });
    let notesElm = document.getElementById("notes");
    if (noteobj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}
function deleteNotes(id)
{
    let notes=localStorage.getItem("notes");
    noteobj=JSON.parse(notes);
    noteobj.splice(id,1);
    localStorage.setItem("notes",JSON.stringify(noteobj));
    let heading=localStorage.getItem("heading");
    titleobj=JSON.parse(heading);
    console.log(id,titleobj[id]);
    titleobj.splice(id,1)
    localStorage.setItem("heading", JSON.stringify(titleobj));   
    showNotes();
}