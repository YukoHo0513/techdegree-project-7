const searchInput = document.getElementById('search-user');
const membersArr = ['victoria chambers', 'dale byrd', 'dawn wood', 'dan oliver'];
const searchUl = document.getElementById('search-ul');


searchInput.addEventListener('keyup', (e)=> {
    e.preventDefault();
    const typedChars = (e.target.value).toLowerCase();
    searchUl.textContent = "";
   
    for (i = 0; i < membersArr.length; i++) {
        if (membersArr[i].includes(typedChars)) {
            searchUl.style.display = "block";
            const membersContent = document.createTextNode(membersArr[i]);
            const membersLi = document.createElement('li');
            membersLi.className = "user-style";
            membersLi.appendChild(membersContent);
            searchUl.appendChild(membersLi);
            if (typedChars === membersArr[i]) {
                searchUl.style.display = "none";
            }
        } 
    }
    if (e.target.value === "") {
        searchUl.style.display = "none";
    }
});

searchUl.addEventListener('click', (e)=> {
    e.preventDefault();
    if (e.target.className === "user-style") {
       searchInput.value = e.target.textContent;
       searchUl.style.display = "none";
    }
});