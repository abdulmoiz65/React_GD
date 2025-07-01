import { useEffect } from 'react';

function useScript() {
  useEffect(() => {
    // ✅ Remove Preloader
    setTimeout(() => {
      const loader = document.getElementById('loader');
      if (loader) loader.classList.add('hidden');
    }, 2000);

    // ✅ Department Checkbox logic
    const parentCheckboxes = document.querySelectorAll('.parent-checkbox');
    parentCheckboxes.forEach(parent => {
      parent.addEventListener('change', function () {
        const nested = this.closest('li').querySelector('.nested');

        parentCheckboxes.forEach(other => {
          if (other !== this) {
            other.checked = false;
            const otherNested = other.closest('li').querySelector('.nested');
            if (otherNested) {
              otherNested.style.display = 'none';
              otherNested.querySelectorAll('input[type="checkbox"]').forEach(c => (c.checked = false));
            }
          }
        });

        if (nested) {
          nested.style.display = this.checked ? 'block' : 'none';
          nested.querySelectorAll('input[type="checkbox"]').forEach(c => (c.checked = this.checked));
          nested.querySelectorAll('.nested').forEach(sub => {
            sub.style.display = this.checked ? 'block' : 'none';
            sub.querySelectorAll('input[type="checkbox"]').forEach(subChild => (subChild.checked = this.checked));
          });
        }
      });
    });

    // ✅ Program checkbox logic
    document.querySelectorAll('.child-checkbox').forEach(child => {
      child.addEventListener('change', function () {
        const nested = this.closest('li').querySelector('.nested');
        if (nested) {
          nested.style.display = this.checked ? 'block' : 'none';
          nested.querySelectorAll('input[type="checkbox"]').forEach(sc => (sc.checked = this.checked));
        }
      });
    });

    // ✅ Semester checkbox logic
    document.querySelectorAll('.sub-child-checkbox').forEach(subChild => {
      subChild.addEventListener('change', function () {
        const programCheckbox = this.closest('.nested').previousElementSibling?.querySelector('.child-checkbox');
        if (programCheckbox) {
          const allUnchecked = Array.from(
            this.closest('.nested').querySelectorAll('.sub-child-checkbox')
          ).every(cb => !cb.checked);
          programCheckbox.checked = !allUnchecked;
        }

        const deptCheckbox = this.closest('ul')?.closest('li')?.querySelector('.parent-checkbox');
        if (deptCheckbox) {
          const anyChecked = this.closest('ul').querySelectorAll('input[type="checkbox"]:checked').length > 0;
          deptCheckbox.checked = anyChecked;
        }
      });
    });

    // ✅ Toggle icon
    document.querySelectorAll('.toggle-icon').forEach(icon => {
      icon.addEventListener('click', function (e) {
        const nested = this.closest('li').querySelector('.nested');
        const parentCheckbox = this.closest('li').querySelector('input[type="checkbox"]');
        if (nested) {
          nested.style.display = nested.style.display === 'block' ? 'none' : 'block';
        }
        e.stopPropagation();
      });
    });

    // ✅ Prevent dropdown auto-close
    const dropdown = document.querySelector('.dropdown-menu');
    if (dropdown) {
      dropdown.addEventListener('click', e => e.stopPropagation());
    }

    // ✅ CLEANUP: remove all listeners on unmount
    return () => {
      parentCheckboxes.forEach(p =>
        p.replaceWith(p.cloneNode(true))
      );
    };
  }, []);
}

export default useScript;
