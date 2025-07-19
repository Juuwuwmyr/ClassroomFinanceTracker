document.addEventListener('DOMContentLoaded', function () {
    // Initialize the application
    initApp();
});


function initApp() {
    // Initialize all components
    initModals();
    initForms();
    loadData();
    loadFines();
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
        populateViolations();
        populateStudents();
        populatePaymentCategories();
        
        // Load students table if on students page
        if (window.location.pathname.includes('students.html')) {
            loadStudentsTable();
        }
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

        link.addEventListener('click', function (e) {
            // Add locked class to sidebar to keep it expanded until navigation
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) sidebar.classList.add('locked');
            // Proceed with navigation
            window.location.href = href;
        });
    });
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
async function submitFineForm(form) {
    const formData = new FormData(form);

    try {
        const res = await fetch('http://localhost:5118/add-fine', {
            method: 'POST',
            body: formData
        });

        const result = await res.json();

        if (result.success) {
            alert('Fine submitted successfully!');
            form.reset();
            document.getElementById('fineModal').style.display = 'none';
            // reload fines after adding
            loadFines();
        } else {
            alert('Error: ' + result.message);
        }
    } catch (err) {
        console.error(err);
        alert('Error submitting fine: ' + err.message);
    }
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

//Sidebar Toggle
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const mainContent = document.querySelector('.main-content');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
}); 


// Get modal and buttons
const modal = document.getElementById("myModal");
const btn = document.getElementById("botToggle");
const closeBtn = document.querySelector(".close");


btn.onclick = () => {
  modal.style.display = "block";
};


closeBtn.onclick = () => {
  modal.style.display = "none";
};


window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};





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

function populateStudents() {
    fetch('http://localhost:5118/get-students')
        .then(res => res.json())
        .then(data => {
            const studentSelect = document.getElementById('student');
            if (studentSelect && studentSelect.tagName === 'SELECT') {
                studentSelect.innerHTML = '<option value="">Select Student</option>';
                data.forEach(student => {
                    const option = document.createElement('option');
                    option.value = student.student_id;
                    option.textContent = `${student.first_name} ${student.last_name}`;
                    studentSelect.appendChild(option);
                });
            }
        })
        .catch(err => {
            console.error(err);
            const studentSelect = document.getElementById('student');
            if (studentSelect && studentSelect.tagName === 'SELECT') {
                studentSelect.innerHTML = '<option value="">Unable to load students</option>';
            }
            alert("Error loading students: " + err.message);
        });
}

// Load Students Table
async function loadStudentsTable() {
    const tbody = document.getElementById('student');
    if (!tbody) {
        console.error('Student table body not found');
        return;
    }
    
    console.log('Loading students table...');
    tbody.innerHTML = '<tr><td colspan="5">Loading students...</td></tr>';
    
    try {
        console.log('Fetching students from API...');
        const res = await fetch('http://localhost:5118/get-students');
        
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const students = await res.json();
        console.log('Students data received:', students);

        if (students.error) throw new Error(students.error);

        tbody.innerHTML = '';
        if (students.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5">No students found.</td></tr>';
        } else {
            students.forEach(student => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${student.student_id || 'N/A'}</td>
                    <td>${(student.first_name || '')} ${(student.last_name || '')}</td>
                    <td>${student.grade_level || 'N/A'}</td>
                    <td>${student.section || 'N/A'}</td>
                    <td>
                        <button class="btn-icon" title="Edit" onclick="editStudent('${student.student_id}')">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-icon danger" title="Delete" onclick="deleteStudent('${student.student_id}')">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }
    } catch (err) {
        console.error('Error loading students:', err);
        tbody.innerHTML = '<tr><td colspan="5">Error loading students. Check console for details.</td></tr>';
        alert("Error loading students: " + err.message);
    }
}


function populateViolations() {
    fetch('http://localhost:5118/get-violations')
        .then(res => res.json())
        .then(data => {
            const violationSelect = document.getElementById('violation');
            data.forEach(violation => {
                const option = document.createElement('option');
                option.value = violation.violation_id;
                option.textContent = violation.vname;
                violationSelect.appendChild(option);
            });
        });
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

document.getElementById('openFineModalBtn').addEventListener('click', () => {
    document.getElementById('fineModal').style.display = 'block';
});// Populate Select Options
async function populateSelects() {
    const studentSelect = document.getElementById('student');
    const violationSelect = document.getElementById('violation');

    // Load students
   try {
    const studentsRes = await fetch('http://localhost:5118/get-students');
    const students = await studentsRes.json();

    if (students.error) throw new Error(students.error);

    studentSelect.innerHTML = '<option value="">Select Student</option>';
    students.forEach(student => {
        const opt = document.createElement('option');
        opt.value = student.student_id; // ✅ use ID as value
        opt.textContent = `${student.first_name} ${student.last_name}`; // ✅ FIXED
        studentSelect.appendChild(opt);
    });
} catch (err) {
    console.error(err);
    studentSelect.innerHTML = '<option value="">Unable to load students</option>';
    alert("Error loading students: " + err.message);
}

    // Load violations
    try {
        const violationsRes = await fetch('http://localhost:5118/get-violations');
        const violations = await violationsRes.json();

        if (violations.error) throw new Error(violations.error);

        violationSelect.innerHTML = '<option value="">Select Violation</option>';
        violations.forEach(violation => {
            const opt = document.createElement('option');
            opt.value = violation.violation_id; // ✅ use ID as value
            opt.textContent = violation.vname;
            violationSelect.appendChild(opt);
        });
    } catch (err) {
        console.error(err);
        violationSelect.innerHTML = '<option value="">Unable to load violations</option>';
        alert("Error loading violations: " + err.message);
    }
}

const fineModal = document.getElementById('fineModal');
document.getElementById('openFineModalBtn').addEventListener('click', () => fineModal.style.display = 'flex');
document.getElementById('closeFineModalBtn').addEventListener('click', () => fineModal.style.display = 'none');
document.getElementById('cancelFineBtn').addEventListener('click', () => fineModal.style.display = 'none');


// Student management functions
function editStudent(studentId) {
    alert(`Edit student with ID: ${studentId}`);
    // TODO: Implement edit student modal/form
}

function deleteStudent(studentId) {
    if (confirm(`Are you sure you want to delete student with ID: ${studentId}?`)) {
        alert(`Delete student with ID: ${studentId}`);
        // TODO: Implement delete student API call
        // After successful deletion, reload the table
        loadStudentsTable();
    }
}

// Load Fines Table
async function loadFines() {
    const tbody = document.getElementById('finesTableBody');
    tbody.innerHTML = '<tr><td colspan="7">Loading fines...</td></tr>';
    try {
        const res = await fetch('http://localhost:5118/get-fines');
        const fines = await res.json();

        if (fines.error) throw new Error(fines.error);

        tbody.innerHTML = '';
        if (fines.length === 0) {
            tbody.innerHTML = '<tr><td colspan="7">No fines found.</td></tr>';
        } else {
            fines.forEach(fine => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${fine.date_issued}</td>
                    <td>${fine.student_name}</td>
                    <td>${fine.name}</td>
                    <td>₱${parseFloat(fine.amount).toFixed(2)}</td>
                    <td>${fine.due_date}</td>
                    <td><span class="status-badge ${fine.status.toLowerCase()}">${fine.status}</span></td>
                    <td>
                        <button class="btn-icon" title="View"><i class="fas fa-eye"></i></button>
                        ${fine.status === 'Pending' ? `<button class="btn-icon primary" title="Mark as Paid"><i class="fas fa-check"></i></button>` : ''}
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }
    } catch (err) {
        console.error(err);
        tbody.innerHTML = '<tr><td colspan="7">Error loading fines.</td></tr>';
        alert("Error loading fines: " + err.message);
    }
}