// script.js 

function solve() { 
	let password = 
		document.getElementById('password').value; 
	let repassword = 
		document.getElementById('repassword').value; 
	let mobile = 
		document.getElementById('mobile').value; 
	let mail = 
		document.getElementById('email').value; 
	let flag = 1; 
	let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

	if (!emailRegex.test(mail)) { 
		flag = 0; 
		pass.innerText = 
			'Please enter a valid email address.'; 
		setTimeout(() => { 
			pass.innerText = ""; 
		}, 3000); 
	} 

	if (password !== repassword) { 
		flag = 0; 
		pass.innerText = 
			"Passwords do not match. Please re-enter."; 
		setTimeout(() => { 
			pass.innerText = ""; 
		}, 3000); 
	} 

	let passwordRegex = 
		/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$/; 

	if (!passwordRegex.test(password)) { 
		flag = 0; 
		pass.innerText = 
			'Password must be at least 8 characters'+ 
			' long and include at least one number,'+ 
			' one alphabet, and one symbol.'; 
		setTimeout(() => { 
			pass.innerText = ""; 
		}, 3000); 
	} 
	if (flag) 
		alert("Form submitted"); 
}

// JavaScript code for making AJAX requests
fetch('/api/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle the data received from the backend
        console.log(data);
    })
    .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    });
