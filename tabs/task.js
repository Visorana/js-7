let tabs = document.querySelectorAll('.tab')
let tabContents = document.querySelectorAll('.tab__content')

tabs.forEach.call(tabs, (tab) => {
    tab.addEventListener('click', () => {
        currIndex = [...tabs].findIndex(tab =>
            tab.classList.contains('tab_active'));
        tabs[currIndex].classList.remove('tab_active');
        tabContents[currIndex].classList.remove('tab__content_active')
        tab.classList.add('tab_active');
        tabContents[[...tabs].indexOf(tab)].classList.add('tab__content_active')
    })
})
