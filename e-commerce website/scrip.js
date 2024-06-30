// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
    cursorFollower.style.transform = 'scale(0.5)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
    cursorFollower.style.transform = 'scale(1)';
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Scroll animations
const scrollElements = document.querySelectorAll('.scroll-animation');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add('scrolled');
};

const hideScrollElement = (element) => {
    element.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Skill bar animation
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Certifications
const certifications = [
    "Database Foundations (Oracle)",
    "Red Hat Enterprise Linux Automation with Ansible (RH294)",
    "Red Hat System Administration I (RH124)",
    "Google Cloud Certified Generative AI",
    "CCNAv7: Introduction to Networks (Cisco)",
    "CCNAv7: Enterprise Networking, Security, and Automation (Cisco)",
    "Switching, Routing, and Wireless Essentials (Cisco)"
];

const certGrid = document.getElementById('cert-grid');

certifications.forEach(cert => {
    const certItem = document.createElement('div');
    certItem.classList.add('cert-item', 'scroll-animation');
    certItem.textContent = cert;
    certGrid.appendChild(certItem);
});

// Typing animation for hero subtitle
const subtitleElement = document.querySelector('.subtitle');
const subtitleText = subtitleElement.textContent;
subtitleElement.textContent = '';

function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        subtitleElement.innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';
        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
        }, 100);
    } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
    }
}

// Start the typing animation
typeWriter(subtitleText, 0, function() {
    subtitleElement.classList.add('end-cursor');
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('#hero');
    hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

// Initialize animations on page load
window.addEventListener('load', () => {
    handleScrollAnimation();
    animateSkillBars();
});

// Project hover effect
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.project-overlay').style.opacity = '1';
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('.project-overlay').style.opacity = '0';
    });
});

// Add 3D tilt effect to project cards
VanillaTilt.init(document.querySelectorAll(".project-card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
});

// Animate on scroll library initialization
AOS.init({
    duration: 1000,
    once: true,
    mirror: false
});