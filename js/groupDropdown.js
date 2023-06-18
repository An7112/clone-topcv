var isDropdownVisible = false;
var selectedLi = null;
const searchInput = document.getElementById('searchInput');
let searchTerm = '';
const dropdownContainer = document.getElementById('dropdown-list');
const options = [
    { value: 'Đà Nẵng'},
    { value: 'Hà Nội'},
    { value: 'Hồ Chí Minh'},
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
if (!defaultSelect.innerText) {
    defaultSelect.innerText = 'Đà Nẵng'
}

var dropdownItemActice = document.querySelector('.dropdown-menu__item')
if (defaultSelect.innerText) {
    var spanActive = document.createElement('span')
    spanActive.classList.add('material-symbols-outlined')
    spanActive.innerText = 'check'
    dropdownItemActice.appendChild(spanActive)
    selectedLi = dropdownItemActice
}

function selectItem(item) {
    var spanActive = document.createElement('span')
    spanActive.classList.add('material-symbols-outlined')
    spanActive.innerText = 'check'

    if(selectedLi){
        var spanSelected = selectedLi.querySelector('.material-symbols-outlined');
        if (spanSelected) {
            selectedLi.removeChild(spanSelected);
        }
    }
    selectedLi = item
    selectedLi.appendChild(spanActive)
    var selectedValue = item.firstChild.textContent.trim();
    var dropdownToggle = document.querySelector('.city')
    dropdownToggle.innerText = selectedValue;
    toggleDropdown();
}