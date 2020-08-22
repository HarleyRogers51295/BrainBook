//load a book
function loadBook(filename, displayName) {
    let currentBook = "";
    let url = "books/" + filename;

    //reset our UI
    document.getElementById("fileName").innerHTML = displayName;
    document.getElementById("searchStat").innerHTML = "";
    document.getElementById("keyword").value = "";
    
    //create a server request to load book
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200){
            currentBook = xhr.responseText;

            //remove line breaks and carriege retuens. 
            currentBook = currentBook.replace(/(?:\r\n|\r|\n)/g), '<br>';


            document.getElementById("fileContent").innerHTML = currentBook;

            var elmnt = document.getElementById("fileCOntent");
            elmnt.scrollTop = 0;
        }
    };
}