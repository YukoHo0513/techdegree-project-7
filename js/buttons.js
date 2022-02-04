const saveButton = document.getElementById('save');
const cancelButton = document.getElementById('cancel');
const timezone = document.getElementById('timezone');
const checkEmail = document.getElementById('check-email');
const checkProfile = document.getElementById('check-profile');

getTimezone();
getEmailCheck();
getProfileCheck();

// Timezone 
function setSavedTimezone() {
    localStorage.setItem('selectedTimezone', timezone.value);
    return timezone.value;
}
function getTimezone() {
    const timezoneInStorage = localStorage.getItem('selectedTimezone');
    if (timezoneInStorage) {
        timezone.value = timezoneInStorage;
    }   
}

// Email
function setSavedEmail() {
    localStorage.setItem('selectedEmail', checkEmail.checked);
}
function getEmailCheck() {
    const emailInStorage = localStorage.getItem('selectedEmail');
    if (emailInStorage === "true") {
        checkEmail.checked = "checked";
    } else if (emailInStorage === "false") {
        checkEmail.checked = "";
    }   
}

// Profile
function setSavedProfile() {
    localStorage.setItem('selectedProfile', checkProfile.checked);
}
function getProfileCheck() {
    const profileInStorage = localStorage.getItem('selectedProfile');
    if (profileInStorage === "true") {
        checkProfile.checked = "checked";
    } else if (profileInStorage === "false") {
        checkProfile.checked = "";
    }
}

saveButton.addEventListener('click', (e)=> {
    e.preventDefault();
    setSavedTimezone();
    setSavedEmail();
    setSavedProfile();
});

cancelButton.addEventListener('click', ()=> {
    timezone.value = "timezone";
    checkEmail.checked = false;
    checkProfile.checked = false;
    localStorage.clear();
});