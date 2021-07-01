const selectButton = document.querySelectorAll('.button-check');
const selectContainer = document.querySelectorAll('.container-check');

function activeTab(index) {
    selectContainer[index].classList.toggle('active');
}

selectButton.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        activeTab(index);
    })
})

const selectBtnSuggest = document.querySelectorAll('#js-suggest')
const selectContainerSuggest = document.querySelectorAll('.container-suggest')

function activeSuggest(index) {
    selectContainerSuggest[index].classList.toggle('active');
}

selectBtnSuggest.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        activeSuggest(index);
    })
})