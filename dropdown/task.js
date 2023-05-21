let dropDownValue = document.querySelector('.dropdown__value')
let dropDownLinks = document.querySelectorAll('.dropdown__link')
let dropDownList = document.querySelector('.dropdown__list')

dropDownValue.addEventListener('click', dropDown);

dropDownLinks.forEach.call(dropDownLinks, (dropDownLink) => {
    dropDownLink.addEventListener('click', (e) => {
        switchDropDownValue(e, dropDownLink)
    })
})

function dropDown() {
    dropDownList.classList.toggle('dropdown__list_active');
}

function switchDropDownValue(e, dropDownLink) {
    e.preventDefault();
    dropDownValue.textContent = dropDownLink.textContent;
    dropDownList.classList.remove('dropdown__list_active');
}