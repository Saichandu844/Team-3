$(document).ready(function() {
    // Login form validation
    $('#login-form').on('submit', function(event) {
      event.preventDefault();
      if (validateLoginForm()) {
        // Simulate successful validation
        showToast('Login form validated successfully!', 'success');
      }
    });
  
    // Registration form validation
    $('#register-form').on('submit', function(event) {
      event.preventDefault();
      if (validateRegistrationForm()) {
        // Simulate successful validation
        showToast('Registration form validated successfully!', 'success');
      }
    });
  
    // Request form validation
    $('#request-form').on('submit', function(event) {
      event.preventDefault();
      if (validateRequestForm()) {
        // Simulate successful validation
        showToast('Request form validated successfully!', 'success');
      }
    });
  });
  
  // Validate email format
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Validate password format
  function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  }
  
  // Validate login form
  function validateLoginForm() {
    const email = $('#login-email').val().trim();
    const password = $('#login-password').val();
  
    $('.form-control').removeClass('is-invalid');
    let isValid = true;
  
    if (!validateEmail(email)) {
      $('#login-email').addClass('is-invalid');
      showToast('Please enter a valid email address', 'danger');
      isValid = false;
    }
  
    if (!password) {
      $('#login-password').addClass('is-invalid');
      showToast('Please enter your password', 'danger');
      isValid = false;
    }
  
    return isValid;
  }
  
  // Validate registration form
  function validateRegistrationForm() {
    const name = $('#name').val().trim();
    const email = $('#reg-email').val().trim();
    const password = $('#reg-password').val();
    const confirmPassword = $('#confirm-password').val();
  
    $('.form-control').removeClass('is-invalid');
    let isValid = true;
  
    if (!name || name.length < 2) {
      $('#name').addClass('is-invalid');
      showToast('Please enter a valid name (at least 2 characters)', 'danger');
      isValid = false;
    }
  
    if (!validateEmail(email)) {
      $('#reg-email').addClass('is-invalid');
      showToast('Please enter a valid email address', 'danger');
      isValid = false;
    }
  
    if (!validatePassword(password)) {
      $('#reg-password').addClass('is-invalid');
      showToast('Password must be at least 8 characters with letters and numbers', 'danger');
      isValid = false;
    }
  
    if (password !== confirmPassword) {
      $('#confirm-password').addClass('is-invalid');
      showToast('Passwords do not match', 'danger');
      isValid = false;
    }
  
    return isValid;
  }
  
  // Validate request form
  function validateRequestForm() {
    const employeeName = $('#employee-name').val().trim();
    const employeeId = $('#employee-id').val().trim();
    const department = $('#department').val();
    const description = $('#request-description').val().trim();
    const priority = $('#request-priority').val();
  
    $('.form-control, .form-select').removeClass('is-invalid');
    let isValid = true;
  
    if (!employeeName || employeeName.length < 2) {
      $('#employee-name').addClass('is-invalid');
      showToast('Please enter a valid employee name', 'danger');
      isValid = false;
    }
  
    if (!employeeId) {
      $('#employee-id').addClass('is-invalid');
      showToast('Please enter your employee ID', 'danger');
      isValid = false;
    }
  
    if (!department) {
      $('#department').addClass('is-invalid');
      showToast('Please select your department', 'danger');
      isValid = false;
    }
  
    if (!description || description.length < 10) {
      $('#request-description').addClass('is-invalid');
      showToast('Please provide a detailed description (at least 10 characters)', 'danger');
      isValid = false;
    }
  
    if (!priority) {
      $('#request-priority').addClass('is-invalid');
      showToast('Please select request priority', 'danger');
      isValid = false;
    }
  
    return isValid;
  }
  
  // Toast notification function
  function showToast(message, type = 'info') {
    const existingToasts = $('.toast-notification');
    existingToasts.remove();
  
    const toast = $('<div>')
      .addClass(`toast-notification alert alert-${type} alert-dismissible fade show`)
      .css({
        position: 'fixed',
        top: '20px',
        right: '20px',
        'z-index': 9999,
        'max-width': '350px',
        'box-shadow': '0 4px 12px rgba(0,0,0,0.1)'
      })
      .html(`
        ${message}
        <button type="button" class="btn-close" onclick="$(this).parent().remove()"></button>
      `);
  
    $('body').append(toast);
  
    setTimeout(() => {
      if (toast.parent().length) {
        toast.remove();
      }
    }, 5000);
  }