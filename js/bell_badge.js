const greenDot = document.querySelector('.green-dot');
const bell = document.getElementById('notification');

bell.addEventListener('click', ()=> {
    bell.insertAdjacentHTML(
        'afterbegin',
        `<ul>
            <li class="alert-message">
                <div class="alert-item">
                    <div class="green-bullet"></div>
                    You have 6 unread messages
                </div>
                <span class="x-sign alert-item">&times;</span>
            </li>
            <li class="alert-message">
                <div class="alert-item">
                    <div class="green-bullet"></div>
                    You have 3 new followers
                </div>
                <span class="x-sign alert-item">&times;</span>
            </li>
            <li class="alert-message">
                <div class="alert-item">
                    <div class="green-bullet"></div>
                    Your password expires in 7 days
                </div>
                <span class="x-sign alert-item">&times;</span>
            </li>
         </ul>`
    );
});




