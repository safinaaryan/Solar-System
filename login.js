function login(event) {
  event.preventDefault(); // Prevent form from submitting by default

  // Get elements
  const emailInput = document.getElementById('login-email');
  const passwordInput = document.getElementById('login-password');

  const emailError = document.getElementById('login-email-error');
  const passwordError = document.getElementById('login-password-error');

  // Reset error messages
  emailError.textContent = '';
  passwordError.textContent = '';

  let isValid = true;

  // Email validation
  const emailValue = emailInput.value.trim();
  if (emailValue === '') {
    emailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!validateEmail(emailValue)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Password validation
  const passwordValue = passwordInput.value.trim();
  if (passwordValue === '') {
    passwordError.textContent = 'Password is required.';
    isValid = false;
  } else if (passwordValue.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    isValid = false;
  }

  // If valid, you can proceed with form submission or API call here
  if (isValid) {
    alert('Login successful!'); // For demonstration only
 }

  return false; // Prevent default submission for now
}

// Helper function to validate email using regex
function validateEmail(email) {
  // Simple email regex pattern
  return re.test(email.toLowerCase());
}
