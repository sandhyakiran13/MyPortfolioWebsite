// JavaScript to make navigation links fixed and highlight the active section link
window.addEventListener('scroll', function () {
    const headerContainer = document.querySelector('.header-container');
    const navLinks = document.querySelector('.navbar-nav');
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.navbar-nav a');

    // Toggle transparent class based on scroll position
    if (window.scrollY > 50) {
        headerContainer.classList.add('transparent');
    } else {
        headerContainer.classList.remove('transparent');
    }

    // Highlight the active link when scrolling through sections
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});

// Chart.js code
var ctx = document.getElementById('rcLevelChart').getContext('2d');
var rcLevelChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['BOY', 'MOY', 'EOY'], // Updated labels
        datasets: [
            {
                label: 'Average RC Level',
                data: [3.1, 2.8, 3.9], // Updated data for average RC level
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                barPercentage: 1, // Reduce bar width
                categoryPercentage: 0.5 // Adjust category width to keep spacing
            },
            {
                label: 'Target RC Level',
                data: [4.5, 5, 5.5], // Updated data for target RC level
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                barPercentage: 1, // Reduce bar width
                categoryPercentage: 0.5 // Adjust category width to keep spacing
            }
        ]
    },
    options: {
        plugins: {
            datalabels: {
                anchor: 'center', // Center the labels
                align: 'center', // Center the labels
                formatter: function(value) {
                    return value > 0 ? value.toFixed(1) : ''; // Only show values greater than 0
                }
            },
            legend: {
                position: 'bottom' // Move labels to the bottom
            }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: '% of Students' // Updated y-axis title
                },
                min: 0,
                max: 6,
                ticks: {
                    stepSize: 0.5
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Exams'
                },
                grid: {
                    display: false // Remove origin value
                }
            }
        }
    },
    plugins: [ChartDataLabels]
});

var ctx2 = document.getElementById('studentGrowthChart').getContext('2d');
var studentGrowthChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: [''],
        datasets: [
            {
                label: 'Stagnant',
                data: [14], // Updated data for Stagnant Students in percentage
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                barPercentage: 0.25 // Reduce bar width
            },
            {
                label: 'Expected Growth',
                data: [25], // Updated data for Expected Growth Students in percentage
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                barPercentage: 0.25 // Reduce bar width
            },
            {
                label: 'Exceeded Expectation',
                data: [61], // Updated data for Exceeded Expectation Students in percentage
                backgroundColor: 'rgba(0, 235, 0, 0.2)',
              borderColor: 'rgba(0, 235, 0, 1)',
                borderWidth: 1,
                barPercentage: 0.25 // Reduce bar width
            }
        ]
    },
    options: {
        plugins: {
            datalabels: {
                anchor: 'center', // Center the labels
                align: 'center', // Center the labels
                formatter: function(value) {
                    return value > 0 ? value.toFixed(0) + '%' : ''; // Only show values greater than 0, no decimals
                }
            },
            legend: {
                position: 'bottom' // Move labels to the bottom
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        const datasetLabel = tooltipItem.dataset.label || '';
                        const value = tooltipItem.raw;
                        const studentCount = Math.round(value * 28 / 100); // Calculate the number of students
                        return `${datasetLabel}: ${studentCount} students`; // No decimals
                    }
                }
            }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: '% of Students' // Updated y-axis title
                },
                min: 0,
                max: 100, // Set max to 100 for percentage values
                ticks: {
                    stepSize: 10 // Adjust step size for percentage values
                },
                stacked: true // Enable stacking
            },
            x: {
                title: {
                    display: true,
                    text: 'Types'
                },
                grid: {
                    display: false // Remove origin value
                },
                stacked: true // Enable stacking
            }
        }
    },
    plugins: [ChartDataLabels]
});

// Chart.js code for Math
var ctxMath = document.getElementById('myChartMath').getContext('2d');
var myChartMath = new Chart(ctxMath, {
    type: 'bar',
    data: {
        labels: [''],
        datasets: [
            {
                label: 'N/A',
                data: [0],
                backgroundColor: 'rgba(100, 100, 100, 0.2)',
                borderColor: 'rgba(100, 100, 100, 1)',
                borderWidth: 1,
                barPercentage: 0.25
            },
            {
                label: 'Learning Loss',
                data: [6],
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                borderColor: 'rgba(255, 0, 0, 1)',
                borderWidth: 1,
                barPercentage: 0.25
            },
            {
                label: 'Stagnant',
                data: [13],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                barPercentage: 0.25
            },
            {
                label: 'Expected Growth',
                data: [35],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                barPercentage: 0.25
            },
            {
                label: 'Exceeded Expectation',
                data: [45],
                backgroundColor: 'rgba(0, 235, 0, 0.2)',
                borderColor: 'rgba(0, 235, 0, 1)',
                borderWidth: 1,
                barPercentage: 0.25
            }
        ]
    },
    options: {
        plugins: {
            datalabels: {
                anchor: 'center',
                align: 'center',
                formatter: function(value) {
                    return value > 0 ? value.toFixed(0) + '%' : '';
                }
            },
            legend: {
                position: 'bottom'
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        const datasetLabel = tooltipItem.dataset.label || '';
                        const value = tooltipItem.raw;
                        const studentCount = Math.round(value * 31 / 100);
                        return `${datasetLabel}: ${studentCount} students`;
                    }
                }
            }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: '% of Students'
                },
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 10
                },
                stacked: true
            },
            x: {
                title: {
                    display: true,
                    text: 'Types'
                },
                grid: {
                    display: false
                },
                stacked: true
            }
        }
    },
    plugins: [ChartDataLabels]
});

// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to check if an element is fully out of viewport
function isOutOfViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom < 0 ||
        rect.top > (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to animate charts
let rcChartInView = false;
let studentChartInView = false;

function animateCharts() {
    const rcChartElement = document.getElementById('rcLevelChart');
    const studentChartElement = document.getElementById('studentGrowthChart');

    if (isInViewport(rcChartElement)) {
        if (!rcChartInView) {
            rcLevelChart.destroy();
            rcLevelChart = new Chart(ctx, rcLevelChart.config);
            rcChartInView = true;
        }
    } else if (isOutOfViewport(rcChartElement)) {
        rcChartInView = false;
    }

    if (isInViewport(studentChartElement)) {
        if (!studentChartInView) {
            studentGrowthChart.destroy();
            studentGrowthChart = new Chart(ctx2, studentGrowthChart.config);
            studentChartInView = true;
        }
    } else if (isOutOfViewport(studentChartElement)) {
        studentChartInView = false;
    }
}

// Add scroll event listener
window.addEventListener('scroll', animateCharts);

// Function to toggle Read More
function toggleReadMore(id) {
    const cardBody = document.querySelector(`#read-more-link-${id}`).closest('.card-body');
    const moreText = document.getElementById(`more-text-${id}`);
    const readMoreLink = document.getElementById(`read-more-link-${id}`);
    if (moreText.style.display === 'none') {
        moreText.style.display = 'inline';
        readMoreLink.textContent = 'Read Less';
        cardBody.classList.add('expanded');
    } else {
        moreText.style.display = 'none';
        readMoreLink.textContent = 'Read More';
        cardBody.classList.remove('expanded');
    }
}

function toggleReadMore(id) {
    const moreText = document.getElementById('more-text-' + id);
    const readMoreLink = document.getElementById('read-more-link-' + id);
    if (moreText.style.display === 'none') {
        moreText.style.display = 'inline';
        readMoreLink.textContent = 'Read Less';
    } else {
        moreText.style.display = 'none';
        readMoreLink.textContent = 'Read More';
    }
}

document.querySelectorAll('.academic-progress').forEach(progress => {
    let percentage = progress.getAttribute('data-percentage');
    let color = progress.getAttribute('data-color');
    let circle = progress.querySelector('.academic-bar');
    let offset = 251 - (percentage / 100) * 251;
    
    circle.style.strokeDashoffset = offset;
    circle.style.stroke = color;
});
