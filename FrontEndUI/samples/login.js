  async function validateAndLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const loginError = document.getElementById('loginError');

    let isValid = true;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailError.style.display = 'block';
      isValid = false;
    } else {
      emailError.style.display = 'none';
    }

    // Password validation
    if (password.trim() === '') {
      passwordError.style.display = 'block';
      isValid = false;
    } else {
      passwordError.style.display = 'none';
    }

    if (isValid) {
      // Call the API
      const apiUrl = 'https://localhost:44339/api/Signup/Login';
      const payload = {
        email: email,
        password: password
      };

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          // Redirect to dashboard.html if API call is successful
          window.location.href = '../web_template.html';
		  localStorage.setItem('email', email);
        } else {
          loginError.style.display = 'block';
        }
      } catch (error) {
        console.error('Error:', error);
        loginError.style.display = 'block';
      }
    }
  }
