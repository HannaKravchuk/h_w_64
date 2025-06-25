document.addEventListener('DOMContentLoaded', () => {
  const result = document.getElementById('result');

  document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      email: form.email.value,
      password: form.password.value,
    };

    try {
      const res = await fetch('/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      result.textContent = json.message || 'Registered successfully';
    } catch (err) {
      result.textContent = 'Registration error';
    }
  });

  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      email: form.email.value,
      password: form.password.value,
    };

    try {
      const res = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      result.textContent = json.message || 'Logged in successfully';
    } catch (err) {
      result.textContent = 'Login error';
    }
  });

  document.getElementById('logoutBtn').addEventListener('click', async () => {
    try {
      const res = await fetch('/auth/logout');
      const json = await res.json();
      result.textContent = json.message || 'Logged out';
    } catch (err) {
      result.textContent = 'Logout error';
    }
  });

  document.getElementById('protectedBtn').addEventListener('click', async () => {
    try {
      const res = await fetch('/protected');
      const json = await res.json();
      result.textContent = JSON.stringify(json, null, 2);
    } catch (err) {
      result.textContent = 'Access error';
    }
  });
});
