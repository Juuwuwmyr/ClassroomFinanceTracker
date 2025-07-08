document.addEventListener('DOMContentLoaded', function () {
    // Initialize the application
    initApp();
});

document.addEventListener('DOMContentLoaded', function () {
    // Add 'collapsed' class after a short delay to avoid jump-cut on navigation
    const sidebar = document.getElementById('sidebar');
    setTimeout(() => {
        sidebar.classList.add('collapsed');
    }, 300); // Adjust delay if needed
});


function initApp() {
    // Initialize all components
    initModals();
    initForms();
    loadData();

    // Set up event listeners
    setupEventListeners();
    setupPageNavigation();
}

function initModals() {
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            this.closest('.modal').style.display = 'none';
        });
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    });
}

function initForms() {
    const fineForm = document.getElementById('fineForm');
    if (fineForm) {
        fineForm.addEventListener('submit', function (e) {
            e.preventDefault();
            submitFineForm(this);
        });
    }

    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function (e) {
            e.preventDefault();
            submitPaymentForm(this);
        });
    }
}

function loadData() {
    setTimeout(() => {
        populateStudentDropdowns();
        populateViolationDropdown();
        populatePaymentCategories();
    }, 500);
}

function setupEventListeners() {
    const viewAllBtn = document.querySelector('.btn.view-all');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function () {
            alert('View all transactions functionality would go here');
        });
    }

    const periodSelector = document.querySelector('.period-selector');
    if (periodSelector) {
        periodSelector.addEventListener('change', function () {
            updateChartData(this.value);
        });
    }
}

function setupPageNavigation() {
    const currentPath = window.location.pathname;
    document.querySelectorAll('.main-nav li').forEach(li => li.classList.remove('active'));

    document.querySelectorAll('.main-nav a').forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.includes(href)) {
            link.parentElement.classList.add('active');
        }

        link.addEventListener('click', function () {
            window.location.href = href;
        });
    });
}

function populateStudentDropdowns() {
    const students = [
        { id: 1, name: 'Juan Dela Cruz' },
        { id: 2, name: 'Maria Santos' },
        { id: 3, name: 'Pedro Reyes' },
        { id: 4, name: 'Ana Lopez' },
        { id: 5, name: 'Luis Garcia' }
    ];

    const studentSelects = [
        document.getElementById('student'),
        document.getElementById('paymentStudent')
    ];

    studentSelects.forEach(select => {
        if (select) {
            students.forEach(student => {
                const option = document.createElement('option');
                option.value = student.id;
                option.textContent = student.name;
                select.appendChild(option);
            });
        }
    });
}

function populateViolationDropdown() {
    const violations = [
        { id: 1, name: 'Late Homework', fee: 50 },
        { id: 2, name: 'Uniform Violation', fee: 100 },
        { id: 3, name: 'Classroom Misconduct', fee: 150 },
        { id: 4, name: 'Late Project Submission', fee: 200 }
    ];

    const violationSelect = document.getElementById('violation');
    if (violationSelect) {
        violations.forEach(violation => {
            const option = document.createElement('option');
            option.value = violation.id;
            option.textContent = `${violation.name} (₱${violation.fee})`;
            violationSelect.appendChild(option);
        });
    }
}

function populatePaymentCategories() {
    const categories = [
        { id: 1, name: 'Fine Payment' },
        { id: 2, name: 'Class Funds' },
        { id: 3, name: 'Project Contribution' },
        { id: 4, name: 'Event Fee' },
        { id: 5, name: 'Other' }
    ];

    const categorySelect = document.getElementById('paymentCategory');
    if (categorySelect) {
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.id;
            option.textContent = category.name;
            categorySelect.appendChild(option);
        });
    }
}

function submitFineForm(form) {
    const formData = new FormData(form);
    const fineData = Object.fromEntries(formData.entries());

    console.log('Submitting fine:', fineData);
    alert('Fine submitted successfully! (In a real app, this would be saved to the database)');

    form.reset();
    document.getElementById('fineModal').style.display = 'none';
}

function submitPaymentForm(form) {
    const formData = new FormData(form);
    const paymentData = Object.fromEntries(formData.entries());

    console.log('Submitting payment:', paymentData);
    alert('Payment submitted successfully! (In a real app, this would be saved to the database)');

    form.reset();
    document.getElementById('paymentModal').style.display = 'none';
}

function updateChartData(period) {
    console.log('Updating charts for period:', period);
}
// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'light';

document.documentElement.setAttribute('data-theme', currentTheme);

if (currentTheme === 'dark') {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Sidebar Toggle
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const mainContent = document.querySelector('.main-content');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Collapse sidebar on desktop (optional)
function handleSidebar() {
    if (window.innerWidth > 1024) {
        sidebar.classList.remove('active');
        sidebar.classList.add('collapsed');
    } else {
        sidebar.classList.remove('collapsed');
    }
}

window.addEventListener('resize', handleSidebar);
handleSidebar();

// Sample Chart Data
function initCharts() {
    // Income Chart
    const incomeCtx = document.getElementById('incomeChart').getContext('2d');
    const incomeChart = new Chart(incomeCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Income',
                data: [1200, 1900, 1500, 2000, 1800, 2200, 2500],
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                borderColor: 'rgba(79, 70, 229, 1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
    
    // Category Chart
    const categoryCtx = document.getElementById('categoryChart').getContext('2d');
    const categoryChart = new Chart(categoryCtx, {
        type: 'doughnut',
        data: {
            labels: ['Class Funds', 'Fines', 'Projects', 'Events', 'Others'],
            datasets: [{
                data: [45, 25, 15, 10, 5],
                backgroundColor: [
                    'rgba(79, 70, 229, 0.8)',
                    'rgba(99, 102, 241, 0.8)',
                    'rgba(129, 140, 248, 0.8)',
                    'rgba(165, 180, 252, 0.8)',
                    'rgba(199, 210, 254, 0.8)'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        padding: 20
                    }
                }
            }
        }
    });
}


document.addEventListener('DOMContentLoaded', initCharts);

