document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
});

function initApp() {
    // Initialize all components
    initModals();
    initForms();
    loadData();
    
    // Set up event listeners
    setupEventListeners();
}

function initModals() {
    // Close modals when clicking the close button
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // Close modals when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    });
}

function initForms() {
    // Fine form submission
    const fineForm = document.getElementById('fineForm');
    if (fineForm) {
        fineForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitFineForm(this);
        });
    }
    
    // Payment form submission
    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitPaymentForm(this);
        });
    }
}

function loadData() {
    // Simulate loading data from API
    setTimeout(() => {
        populateStudentDropdowns();
        populateViolationDropdown();
        populatePaymentCategories();
    }, 500);
}

function setupEventListeners() {
    // View all transactions button
    const viewAllBtn = document.querySelector('.btn.view-all');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function() {
            alert('View all transactions functionality would go here');
        });
    }
    
    // Period selector change
    const periodSelector = document.querySelector('.period-selector');
    if (periodSelector) {
        periodSelector.addEventListener('change', function() {
            updateChartData(this.value);
        });
    }
}

function populateStudentDropdowns() {
    // Simulated student data
    const students = [
        { id: 1, name: 'Juan Dela Cruz' },
        { id: 2, name: 'Maria Santos' },
        { id: 3, name: 'Pedro Reyes' },
        { id: 4, name: 'Ana Lopez' },
        { id: 5, name: 'Luis Garcia' }
    ];
    
    // Populate both student dropdowns
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
    // Simulated violation data
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
    // Simulated category data
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
    // In a real app, this would send data to the server
    const formData = new FormData(form);
    const fineData = Object.fromEntries(formData.entries());
    
    console.log('Submitting fine:', fineData);
    alert('Fine submitted successfully! (In a real app, this would be saved to the database)');
    
    // Reset form and close modal
    form.reset();
    document.getElementById('fineModal').style.display = 'none';
}

function submitPaymentForm(form) {
    // In a real app, this would send data to the server
    const formData = new FormData(form);
    const paymentData = Object.fromEntries(formData.entries());
    
    console.log('Submitting payment:', paymentData);
    alert('Payment submitted successfully! (In a real app, this would be saved to the database)');
    
    // Reset form and close modal
    form.reset();
    document.getElementById('paymentModal').style.display = 'none';
}

function updateChartData(period) {
    // In a real app, this would fetch new data from the server
    console.log('Updating charts for period:', period);
    // This would trigger a redraw of the charts with new data
}
