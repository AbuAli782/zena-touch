// ===== Navigation Active Link =====
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ===== Search Functionality =====
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');

if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            console.log('البحث عن:', searchTerm);
            // يمكن إضافة وظيفة البحث هنا
        }
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
}

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Mobile Menu Toggle (Hamburger) =====
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // إغلاق القائمة عند النقر على رابط
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            navMenu.classList.remove('active');
        }
    });
}

// ===== Utility Functions =====
function formatPhoneNumber(phone) {
    return phone.replace(/(\d{4})(\d{4})(\d{2})/, '$1-$2-$3');
}

// ===== Page Load Animation =====
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// ===== Gallery Filter Functionality =====
document.addEventListener('DOMContentLoaded', function() {
    const galleryTabs = document.querySelectorAll('.gallery-tab');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (galleryTabs.length > 0 && galleryItems.length > 0) {
        galleryTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const filterValue = this.getAttribute('data-filter');

                // Update active tab
                galleryTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');

                // Filter gallery items
                galleryItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    
                    if (filterValue === 'all' || itemCategory === filterValue) {
                        item.classList.remove('hidden');
                        item.style.display = 'block';
                        // Trigger animation
                        setTimeout(() => {
                            item.style.opacity = '1';
                        }, 10);
                    } else {
                        item.classList.add('hidden');
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
});

// ===== Contact Form WhatsApp Submission =====
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            // Create WhatsApp message
            const whatsappMessage = `*طلب تواصل جديد من موقع زينة تاتش*%0A%0A` +
                `*الاسم:* ${name}%0A` +
                `*رقم الهاتف:* ${phone}%0A` +
                `${email ? `*البريد الإلكتروني:* ${email}%0A` : ''}` +
                `*نوع الخدمة:* ${service}%0A` +
                `*الرسالة:* ${message}`;
            
            // WhatsApp API URL (replace with your WhatsApp number)
            const whatsappUrl = `https://wa.me/966?text=${whatsappMessage}`;
            
            // Open WhatsApp
            window.open(whatsappUrl, '_blank');
            
            // Reset form
            contactForm.reset();
        });
    }
});
