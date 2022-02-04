const greenDot = document.querySelector('.green-dot');
const alertMessageList = document.querySelector('.alert-message-list');
const bell = document.getElementById('notification');

bell.addEventListener('click', (e)=> {
    const alertUl = alertMessageList.firstChild;

    if (alertMessageList.textContent === "") {
        greenDot.style.display = "none";

        alertMessageList.innerHTML = 
            `<ul>
                <li class="alert-message li-1">
                    <div class="alert-item">
                        <div class="green-bullet"></div>
                        You have 6 unread messages
                    </div>
                    <span id="x-1" class="x-sign alert-item">&times;</span>
                </li>
                <li class="alert-message li-2">
                    <div class="alert-item">
                        <div class="green-bullet"></div>
                        You have 3 new followers
                    </div>
                    <span id="x-2" class="x-sign alert-item">&times;</span>
                </li>
                <li class="alert-message li-3">
                    <div class="alert-item">
                        <div class="green-bullet"></div>
                        Your password expires in 7 days
                    </div>
                    <span id="x-3" class="x-sign alert-item">&times;</span>
                </li>
            </ul>`;
    } 
    else {
        console.log(e.target);
        if (e.target.parentElement === bell || e.target.id === "notification") {
            console.log();

            alertMessageList.innerHTML = "";
        }
    }

    let count = 0;
    if (e.target.className === "x-sign alert-item") {
        e.target.parentElement.style.display = "none";
        for (let i = 0; i < alertUl.children.length; i++) {
            if (alertUl.children[i].style.display === "none") {
                count += 1;
            }
        }
        if (count === 3) {
            alertUl.style.display = "none";
        }
    }
});




