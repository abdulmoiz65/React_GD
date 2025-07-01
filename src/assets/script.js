   // Remove Preloader after page load
   window.onload = function() {
    setTimeout(function() {
        document.getElementById('loader').classList.add('hidden');
    }, 2000);
};


       
// JS 
document.addEventListener("DOMContentLoaded", function () {
    // Handle department selection - Only one can be checked at a time & auto-check nested
    document.querySelectorAll('.parent-checkbox').forEach(parent => {
    parent.addEventListener('change', function () {
        let nestedPrograms = this.closest('li').querySelector('.nested');
    
        // Uncheck & close all other departments before selecting this one
        document.querySelectorAll('.parent-checkbox').forEach(otherParent => {
            if (otherParent !== this) {
                otherParent.checked = false;
                let otherNested = otherParent.closest('li').querySelector('.nested');
                if (otherNested) {
                    otherNested.style.display = 'none';
                    otherNested.querySelectorAll('input[type="checkbox"]').forEach(child => {
                        child.checked = false;
                    });
                }
            }
        });
    
        // Show/Hide Programs & Auto-Check Nested Children
        if (nestedPrograms) {
            nestedPrograms.style.display = this.checked ? 'block' : 'none';
            nestedPrograms.querySelectorAll('input[type="checkbox"]').forEach(child => {
                child.checked = this.checked;
            });
    
            // Make sure all semesters are shown when department is checked
            nestedPrograms.querySelectorAll('.nested').forEach(semesterList => {
                semesterList.style.display = this.checked ? 'block' : 'none';
                semesterList.querySelectorAll('input[type="checkbox"]').forEach(subChild => {
                    subChild.checked = this.checked;
                });
            });
        }
    });
    });
    
    // Handle program selection - Auto-check/uncheck semesters & ensure they are visible
    document.querySelectorAll('.child-checkbox').forEach(child => {
    child.addEventListener('change', function () {
        let nestedSemesters = this.closest('li').querySelector('.nested');
        if (nestedSemesters) {
            nestedSemesters.style.display = this.checked ? 'block' : 'none';
            nestedSemesters.querySelectorAll('input[type="checkbox"]').forEach(subChild => {
                subChild.checked = this.checked;
            });
        }
    });
    });
    
    document.querySelectorAll('.sub-child-checkbox').forEach(subChild => {
        subChild.addEventListener('change', function () {
            let programCheckbox = this.closest('.nested').previousElementSibling.querySelector('.child-checkbox');
            if (programCheckbox) {
                let allSemestersUnchecked = Array.from(this.closest('.nested').querySelectorAll('.sub-child-checkbox'))
                    .every(cb => !cb.checked);
                programCheckbox.checked = !allSemestersUnchecked;
            }
    
            // Ensure department remains checked if at least one program or semester is checked
            let departmentCheckbox = this.closest('ul').closest('li').querySelector('.parent-checkbox');
            if (departmentCheckbox) {
                let anyChecked = this.closest('ul').querySelectorAll('input[type="checkbox"]:checked').length > 0;
                departmentCheckbox.checked = anyChecked;
            }
        });
    });
    
    
    // Toggle visibility for nested elements on icon click - Programs & Semesters both work now!
    document.querySelectorAll('.toggle-icon').forEach(icon => {
    icon.addEventListener('click', function (e) {
        let nested = this.closest('li').querySelector('.nested');
    
        // Check if the clicked icon is for a program or semester
        let parentCheckbox = this.closest('li').querySelector('input[type="checkbox"]');
    
        if (nested) {
            // If the parent is checked, just toggle its visibility
            if (parentCheckbox && parentCheckbox.checked) {
                nested.style.display = (nested.style.display === 'block') ? 'none' : 'block';
            } else {
                // If the parent is NOT checked, show semesters temporarily (without checking them)
                nested.style.display = (nested.style.display === 'block') ? 'none' : 'block';
            }
        }
    
        e.stopPropagation(); // Prevent Bootstrap dropdown from closing
    });
    });
    
    // Prevent Bootstrap from closing dropdown when clicking inside
    document.querySelector('.dropdown-menu').addEventListener('click', function (event) {
    event.stopPropagation();
    });
    });
    
    // JS 