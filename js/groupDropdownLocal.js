var url = new URL(window.location.href);
var queryString = url.href.split('?')[1];
var params = new URLSearchParams(queryString);
var valueURL = params.get('congviec');
var tinhURL = decodeURIComponent(params.get('tinh'));

var isDropdownVisible = false;
var selectedLi = null;
const searchInput = document.getElementById('searchInput');
let searchTerm = '';
var selectedValueLocal = 'Đà Nẵng';
const dropdownContainer = document.getElementById('dropdown-list');
const options = [
    { value: 'Đà Nẵng' },
    { value: 'Hà Nội' },
    { value: 'Hồ Chí Minh' },
];

function toggleDropdown() {
    var dropdownMenu = document.querySelector('.dropdown-menu')
    if (isDropdownVisible) {
        dropdownMenu.style.display = 'none'
        isDropdownVisible = false
    } else {
        dropdownMenu.style.display = 'flex'
        isDropdownVisible = true
    }
}

function renderOptions() {
    dropdownContainer.innerHTML = '';
    const filteredOptions = options.filter(
        (option) =>
            option.value.toLowerCase().includes(searchTerm.toLowerCase())
    );
    filteredOptions.forEach((option) => {
        const optionElement = document.createElement('li');
        optionElement.className = 'dropdown-menu__item';
        optionElement.innerText = option.value;
        optionElement.addEventListener('click', () => selectItem(optionElement));
        dropdownContainer.appendChild(optionElement);
    });
}

searchInput.addEventListener('input', (event) => {
    searchTerm = event.target.value
    renderOptions();
})

renderOptions()

var defaultSelect = document.querySelector('.city')
defaultSelect.innerText = tinhURL !== 'null' ? tinhURL : 'Đà Nẵng'

var spanActive = document.createElement('span')
spanActive.classList.add('material-symbols-outlined')
spanActive.innerText = 'check'

var dropdownItemActice = document.querySelectorAll('.dropdown-menu__item')
if (defaultSelect.innerText) {
    dropdownItemActice.forEach(
        (element) =>
            {
                const data = element.firstChild.textContent.trim() === defaultSelect.innerText
                if(data){
                    element.appendChild(spanActive)
                    selectedLi = element
                }
            }
    )
}

function selectItem(item) {
    if (selectedLi) {
        var spanSelected = selectedLi.querySelector('.material-symbols-outlined');
        if (spanSelected) {
            selectedLi.removeChild(spanSelected);
        }
    }
    selectedLi = item
    selectedLi.appendChild(spanActive)
    var selectedValue = item.firstChild.textContent.trim();
    selectedValueLocal = selectedValue;
    var dropdownToggle = document.querySelector('.city')
    dropdownToggle.innerText = selectedValue;
    toggleDropdown();
}

function clickOutside(event) {
    var inside = document.getElementById('gr-search')
    if (!inside.contains(event.target)) {
        isDropdownVisible = true;
        toggleDropdown();
    }
}

document.addEventListener('click', clickOutside)
var inputGRElement = document.getElementById("gr-input")
inputGRElement.value = valueURL !== 'null' ? valueURL : ''
document.getElementById("gr-form").addEventListener("submit", function (event) {
    event.preventDefault()
    var inputValue = inputGRElement.value
    var url = "/pages/job-content.html?congviec=" + encodeURIComponent(inputValue) + "&tinh=" + encodeURIComponent(selectedValueLocal);
    window.location.href = url;
})