// Dynamically adjust alignment on window resize
window.addEventListener('resize', function() {
    alignCenter();
  });
  
  function alignCenter() {
    const bodyHeight = document.body.clientHeight;
    const windowHeight = window.innerHeight;
    const marginTop = (windowHeight - bodyHeight) / 2;
    document.body.style.marginTop = marginTop + 'px';
  }
  
  // Initial alignment on page load
  alignCenter();

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

  