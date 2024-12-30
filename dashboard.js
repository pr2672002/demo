const ctx = document.getElementById('wasteChart').getContext('2d');

const wasteChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Waste Collected (kg)',
      data: [100, 150, 200, 180, 160, 190],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Update statistics
document.getElementById('totalWasteCollected').textContent = '1000';
document.getElementById('lastCollectionDate').textContent = 'June 30, 2024';

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


  