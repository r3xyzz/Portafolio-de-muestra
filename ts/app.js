"use strict";
// app.ts
// Datos de ejemplo para habilidades
const skillsData = [
    { id: 1, name: "TypeScript", icon: "fab fa-js-square", level: 85 },
    { id: 2, name: "HTML5", icon: "fab fa-html5", level: 95 },
    { id: 3, name: "CSS3", icon: "fab fa-css3-alt", level: 90 },
    { id: 4, name: "React", icon: "fab fa-react", level: 80 },
    { id: 5, name: "Node.js", icon: "fab fa-node-js", level: 70 },
    { id: 6, name: "Git", icon: "fab fa-git-alt", level: 85 },
    { id: 7, name: "Diseño UI/UX", icon: "fas fa-palette", level: 75 },
    { id: 8, name: "Bases de Datos", icon: "fas fa-database", level: 65 }
];
// Datos de ejemplo para proyectos
const projectsData = [
    {
        id: 1,
        title: "E-commerce Moderno",
        description: "Plataforma de comercio electrónico con carrito de compras y sistema de pagos.",
        category: "web",
        tags: ["TypeScript", "React", "Node.js", "MongoDB"],
        demoUrl: "#",
        codeUrl: "#"
    },
    {
        id: 2,
        title: "App de Tareas",
        description: "Aplicación para gestión de tareas con recordatorios y categorías.",
        category: "app",
        tags: ["TypeScript", "React Native", "Firebase"],
        demoUrl: "#",
        codeUrl: "#"
    },
    {
        id: 3,
        title: "Portafolio Personal",
        description: "Sitio web personal para mostrar proyectos y habilidades.",
        category: "web",
        tags: ["TypeScript", "HTML", "CSS"],
        demoUrl: "#",
        codeUrl: "#"
    },
    {
        id: 4,
        title: "Diseño Sistema",
        description: "Sistema de diseño para aplicaciones web con componentes reutilizables.",
        category: "design",
        tags: ["Figma", "UI/UX", "Prototipado"],
        demoUrl: "#",
        codeUrl: "#"
    },
    {
        id: 5,
        title: "API REST",
        description: "API para gestión de usuarios con autenticación JWT y documentación Swagger.",
        category: "web",
        tags: ["Node.js", "Express", "MongoDB", "JWT"],
        demoUrl: "#",
        codeUrl: "#"
    },
    {
        id: 6,
        title: "App del Clima",
        description: "Aplicación del clima con pronóstico por hora y ubicación automática.",
        category: "app",
        tags: ["React", "API", "CSS"],
        demoUrl: "#",
        codeUrl: "#"
    }
];
// Clase principal de la aplicación
class PortfolioApp {
    constructor() {
        this.currentFilter = "all";
        this.skillsContainer = document.getElementById('skillsContainer');
        this.projectsContainer = document.getElementById('projectsContainer');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.menuToggle = document.getElementById('menuToggle');
        this.navLinks = document.getElementById('navLinks');
        this.contactForm = document.getElementById('contactForm');
        this.formMessage = document.getElementById('formMessage');
        this.init();
    }
    // Inicializar la aplicación
    init() {
        // Configurar año actual en el footer
        this.setCurrentYear();
        // Fondo topográfico dinámico via SVG inline
        this.setTopoBackground();
        // Configurar animación de números
        this.setupCounterAnimation();
        // Configurar animación de escritura
        this.setupTypingEffect();
        // Cargar habilidades
        this.renderSkills();
        // Cargar proyectos
        this.renderProjects();
        // Configurar filtros de proyectos
        this.setupProjectFilters();
        // Configurar menú móvil
        this.setupMobileMenu();
        // Configurar formulario de contacto
        this.setupContactForm();
        // Configurar enlaces de navegación suave
        this.setupSmoothScrolling();
        // Configurar descarga de CV
        this.setupDownloadCV();
    }
    // Establecer año actual en el footer
    setCurrentYear() {
        const yearElement = document.getElementById('currentYear');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear().toString();
        }
    }
    // Establecer fondo topográfico generado en tiempo de ejecución
    setTopoBackground() {
        const svg = `<svg width="240" height="240" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#a8b5cc" stroke-width="1.1" opacity="0.32"><path d="M-30 90c60-40 120-40 180 0s120 40 180 0 120-40 180 0"/><path d="M0 150c70-30 140-30 210 0s140 30 210 0 140-30 210 0"/><path d="M-20 210c80-35 160-35 240 0s160 35 240 0 160-35 240 0"/><path d="M10 40c50-25 100-25 150 0s100 25 150 0 100-25 150 0"/></g></svg>`;
        const encoded = encodeURIComponent(svg);
        const root = document.documentElement;
        const bgColor = getComputedStyle(root).getPropertyValue('--light-color').trim() || '#f8f9fa';
        document.body.style.backgroundColor = bgColor;
        document.body.style.backgroundImage = `url("data:image/svg+xml,${encoded}")`;
        document.body.style.backgroundSize = '220px auto';
        document.body.style.backgroundRepeat = 'repeat';
        document.body.style.backgroundAttachment = 'fixed';
    }
    // Configurar animación de contadores
    setupCounterAnimation() {
        const projectsCount = document.getElementById('projectsCount');
        const experienceYears = document.getElementById('experienceYears');
        const clientsCount = document.getElementById('clientsCount');
        this.animateCounter(projectsCount, 0, 12, 2000);
        this.animateCounter(experienceYears, 0, 3, 2000);
        this.animateCounter(clientsCount, 0, 8, 2000);
    }
    // Animación de contador
    animateCounter(element, start, end, duration) {
        if (!element)
            return;
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp)
                startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = Math.floor(progress * (end - start) + start);
            element.textContent = currentValue.toString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    // Configurar efecto de escritura
    setupTypingEffect() {
        const typedTextElement = document.getElementById('typed-text');
        if (!typedTextElement)
            return;
        const texts = ["Desarrollador Frontend", "Diseñador UI/UX", "Creador de Soluciones"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const type = () => {
            const currentText = texts[textIndex];
            if (isDeleting) {
                // Eliminar caracter
                typedTextElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            }
            else {
                // Agregar caracter
                typedTextElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            // Determinar si hemos terminado de escribir o eliminar
            if (!isDeleting && charIndex === currentText.length) {
                // Esperar antes de empezar a eliminar
                isDeleting = true;
                setTimeout(type, 1500);
            }
            else if (isDeleting && charIndex === 0) {
                // Cambiar al siguiente texto
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500);
            }
            else {
                // Continuar escribiendo o eliminando
                const speed = isDeleting ? 50 : 100;
                setTimeout(type, speed);
            }
        };
        // Iniciar el efecto
        setTimeout(type, 1000);
    }
    // Renderizar habilidades
    renderSkills() {
        if (!this.skillsContainer)
            return;
        this.skillsContainer.innerHTML = '';
        skillsData.forEach(skill => {
            var _a;
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card';
            skillCard.innerHTML = `
                <div class="skill-icon">
                    <i class="${skill.icon}"></i>
                </div>
                <h3 class="skill-name">${skill.name}</h3>
                <div class="skill-level">
                    <div class="skill-progress" style="width: ${skill.level}%"></div>
                </div>
            `;
            (_a = this.skillsContainer) === null || _a === void 0 ? void 0 : _a.appendChild(skillCard);
        });
    }
    // Renderizar proyectos
    renderProjects() {
        if (!this.projectsContainer)
            return;
        // Filtrar proyectos según la categoría seleccionada
        const filteredProjects = this.currentFilter === 'all'
            ? projectsData
            : projectsData.filter(project => project.category === this.currentFilter);
        this.projectsContainer.innerHTML = '';
        filteredProjects.forEach(project => {
            var _a;
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.dataset.category = project.category;
            // Icono según la categoría
            let categoryIcon = 'fas fa-globe';
            if (project.category === 'app')
                categoryIcon = 'fas fa-mobile-alt';
            if (project.category === 'design')
                categoryIcon = 'fas fa-palette';
            projectCard.innerHTML = `
                <div class="project-image">
                    <i class="${categoryIcon}"></i>
                </div>
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${project.demoUrl ? `<a href="${project.demoUrl}" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
                        ${project.codeUrl ? `<a href="${project.codeUrl}" class="project-link" target="_blank"><i class="fab fa-github"></i> Código</a>` : ''}
                    </div>
                </div>
            `;
            (_a = this.projectsContainer) === null || _a === void 0 ? void 0 : _a.appendChild(projectCard);
        });
    }
    // Configurar filtros de proyectos
    setupProjectFilters() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remover clase active de todos los botones
                this.filterButtons.forEach(btn => btn.classList.remove('active'));
                // Agregar clase active al botón clickeado
                button.classList.add('active');
                // Actualizar filtro actual
                this.currentFilter = button.getAttribute('data-filter') || 'all';
                // Renderizar proyectos con el nuevo filtro
                this.renderProjects();
            });
        });
    }
    // Configurar menú móvil
    setupMobileMenu() {
        if (!this.menuToggle || !this.navLinks)
            return;
        this.menuToggle.addEventListener('click', () => {
            var _a;
            if (this.navLinks) {
                this.navLinks.classList.toggle('active');
            }
            // Cambiar icono del menú
            const icon = (_a = this.menuToggle) === null || _a === void 0 ? void 0 : _a.querySelector('i');
            if (icon && this.navLinks) {
                if (this.navLinks.classList.contains('active')) {
                    icon.className = 'fas fa-times';
                }
                else {
                    icon.className = 'fas fa-bars';
                }
            }
        });
        // Cerrar menú al hacer clic en un enlace
        const navLinksElements = this.navLinks.querySelectorAll('a');
        navLinksElements.forEach(link => {
            link.addEventListener('click', () => {
                var _a;
                if (this.navLinks) {
                    this.navLinks.classList.remove('active');
                }
                const icon = (_a = this.menuToggle) === null || _a === void 0 ? void 0 : _a.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-bars';
                }
            });
        });
    }
    // Configurar formulario de contacto
    setupContactForm() {
        if (!this.contactForm || !this.formMessage)
            return;
        this.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Obtener valores del formulario
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');
            if (!nameInput || !emailInput || !subjectInput || !messageInput)
                return;
            const name = nameInput.value;
            const email = emailInput.value;
            const subject = subjectInput.value;
            const message = messageInput.value;
            // Validación simple
            if (!name || !email || !subject || !message) {
                this.showFormMessage('Por favor, completa todos los campos.', 'error');
                return;
            }
            // Simular envío del formulario
            this.showFormMessage('Enviando mensaje...', 'info');
            // Simulación de envío exitoso después de 2 segundos
            setTimeout(() => {
                this.showFormMessage('¡Mensaje enviado con éxito! Te contactaré pronto.', 'success');
                if (this.contactForm) {
                    this.contactForm.reset();
                }
            }, 2000);
        });
    }
    // Mostrar mensaje del formulario
    showFormMessage(text, type) {
        if (!this.formMessage)
            return;
        this.formMessage.textContent = text;
        this.formMessage.className = '';
        switch (type) {
            case 'success':
                this.formMessage.style.color = 'var(--success-color)';
                break;
            case 'error':
                this.formMessage.style.color = '#dc3545';
                break;
            case 'info':
                this.formMessage.style.color = 'var(--primary-color)';
                break;
        }
    }
    // Configurar navegación suave
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                if (!targetId || targetId === '#')
                    return;
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    // Configurar descarga de CV
    setupDownloadCV() {
        const downloadBtn = document.getElementById('downloadCV');
        if (!downloadBtn)
            return;
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Crear un CV de ejemplo en formato Blob
            const cvContent = `
                CV - [Tu Nombre]
                
                DESARROLLADOR WEB
                
                PERFIL PROFESIONAL
                Desarrollador web con experiencia en TypeScript, React y Node.js.
                Apasionado por crear soluciones digitales innovadoras y eficientes.
                
                EXPERIENCIA
                - Desarrollador Frontend en Empresa XYZ (2021 - Presente)
                - Desarrollador Full Stack en Empresa ABC (2019 - 2021)
                
                EDUCACIÓN
                - Ingeniería en Informática, Universidad Ejemplo (2015 - 2019)
                
                HABILIDADES
                - TypeScript, JavaScript
                - React, Node.js
                - HTML5, CSS3
                - Git, MongoDB
                - UI/UX Design
                
                CONTACTO
                Email: tu.email@ejemplo.com
                Teléfono: +123 456 7890
                Portafolio: www.tuportafolio.com
            `;
            const blob = new Blob([cvContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            // Crear enlace de descarga
            const a = document.createElement('a');
            a.href = url;
            a.download = 'CV-[Tu-Nombre].txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            // Mostrar mensaje de confirmación
            alert('CV descargado con éxito. Recuerda personalizar este archivo con tu información real.');
        });
    }
}
// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});
