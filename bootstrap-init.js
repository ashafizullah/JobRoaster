// This file initializes Bootstrap components
import * as bootstrap from 'bootstrap';

/**
 * Initialize all Bootstrap components on a page
 */
export function initBootstrapComponents() {
  // Initialize all dropdowns
  const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
  dropdownElementList.forEach(dropdownToggle => {
    new bootstrap.Dropdown(dropdownToggle);
  });
  
  // Initialize all tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
  
  // Initialize all popovers
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  popoverTriggerList.forEach(popoverTriggerEl => {
    new bootstrap.Popover(popoverTriggerEl);
  });
}

export default bootstrap;