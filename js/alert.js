const alert = document.getElementById('alert');
alert.innerHTML = `
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have unread messages</p>
        <p class="alert-banner-close">&times;</p>
    </div>
`;
alert.addEventListener('click', (e)=> {
    if (e.target.className === "alert-banner-close") {
        alert.style.display = "none";
    };
});

