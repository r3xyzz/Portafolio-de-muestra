// app.ts

// Definición de interfaces TypeScript
interface Skill {
    id: number;
    name: string;
    icon: string;
    level: number;
}

interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    tags: string[];
    demoUrl?: string;
    codeUrl?: string;
    images?: string[];
}

// Datos de ejemplo para habilidades
const skillsData: Skill[] = [
    { id: 1, name: "TypeScript", icon: "fab fa-js-square", level: 85 },
    { id: 2, name: "HTML5", icon: "fab fa-html5", level: 95 },
    { id: 3, name: "CSS3", icon: "fab fa-css3-alt", level: 90 },
    { id: 4, name: "React", icon: "fab fa-react", level: 80 },
    { id: 5, name: "Node.js", icon: "fab fa-node-js", level: 70 },
    { id: 6, name: "Git", icon: "fab fa-git-alt", level: 85 },
    { id: 7, name: "Diseño UI/UX", icon: "fas fa-palette", level: 75 },
    { id: 8, name: "Bases de Datos", icon: "fas fa-database", level: 65 }
];

// Proyectos reales
const projectsData: Project[] = [
    { 
        id: 1, 
        title: "Mascota Feliz · Vista Trabajador", 
        description: "Aplicación móvil para veterinarios: gestión de citas, atención y seguimiento de mascotas.", 
        category: "app",
        tags: ["Mobile", "UI/UX", "Veterinaria"],
        codeUrl: "https://github.com/r3xyzz/VISTA-TRABAJADOR-Prototipo-Mascota-Feliz",
        images: [
            "demo/mascota.png",
            "demo/mascota_2.png",
            "demo/mascota_3.png",
            "demo/mascota_4.png",
            "demo/mascota_5.png",
            "demo/mascota_6.png",
            "demo/mascota_7.png"
        ]
    },
    { 
        id: 2, 
        title: "Mascota Feliz · Vista Cliente", 
        description: "Prototipo web para clientes: reservas y seguimiento de mascotas.", 
        category: "web",
        tags: ["Front-end", "UX", "Veterinaria"],
        codeUrl: "https://github.com/r3xyzz/-VISTA-CLIENTE-Prototipo-Mascota-Feliz",
        images: [
            "demo/mascota_cli.png",
            "demo/mascota_cli_2.png",
            "demo/mascota_cli_3.png",
            "demo/mascota_cli_4.png",
            "demo/mascota_cli_5.png",
            "demo/mascota_cli_6.png"
        ]
    },
    { 
        id: 3, 
        title: "Habitly · Gestión de Hábitos", 
        description: "Aplicación móvil para creación y seguimiento de hábitos diarios.", 
        category: "app",
        tags: ["Mobile", "Hábitos", "UI"],
        codeUrl: "https://github.com/r3xyzz/Proyecto-app-movil-Et-Ara"
    },
    { 
        id: 4, 
        title: "Módulo de Contabilidad Digital", 
        description: "Módulo integrable para contabilidad y gestión financiera empresarial, conectado a bases de datos locales de clientes.", 
        category: "web",
        tags: ["Contabilidad", "Integración", "DB local"],
        codeUrl: "https://github.com/r3xyzz/modulo-8-contabilidad"
    },
    { 
        id: 5, 
        title: "Arma tu Tarrito · Cotizador 3D", 
        description: "Cotización y modelado 3D para personalizar tarros y empaques.", 
        category: "web",
        tags: ["3D", "Cotizador", "UI"],
        codeUrl: "https://github.com/r3xyzz/arma-tu-tarrito",
        images: [
            "demo/tarrito.png",
            "demo/tarrito_2.png"
        ]
    },
    { 
        id: 6, 
        title: "Transformación Digital", 
        description: "Portal de transformación digital para gestión de iniciativas, con conexión a bases de datos locales corporativas.", 
        category: "web",
        tags: ["Transformación", "Gestión", "DB local"],
        codeUrl: "https://github.com/r3xyzz/PROYECTO-TRANSFORMACION-DIGITAL-COMISION/tree/DEVfelipe"
    },
    { 
        id: 7, 
        title: "Portal de Reciclaje", 
        description: "Sitio informativo de reciclaje de plásticos y sostenibilidad.", 
        category: "web",
        tags: ["Reciclaje", "Sostenibilidad", "Web"],
        codeUrl: "https://github.com/r3xyzz/Pedro-Carrasco-COMISION"
    },
    {
        id: 8,
        title: "Sistema-de-Gestion-ET",
        description: "Proyecto en PHP puro (vanilla) + MySQL (XAMPP) + CMD para gestionar el inventario de materiales de una empresa constructora.",
        category: "web",
        tags: ["PHP", "MySQL", "Inventario"],
        codeUrl: "https://github.com/r3xyzz/Prototipo-Sistema-de-Gestion-ET.git",
        images: [
            "demo/vistaConstructora 1.png",
            "demo/vistaConstructora 2.png",
            "demo/vistaConstructora 3.png",
            "demo/vistaConstructora 4.png",
            "demo/vistaConstructora 5.png",
            "demo/vistaConstructora 6.png",
            "demo/vistaConstructora 7.png"
        ]
    }
];

// Clase principal de la aplicación
class PortfolioApp {
    private skillsContainer: HTMLElement | null;
    private projectsContainer: HTMLElement | null;
    private filterButtons: NodeListOf<Element>;
    private menuToggle: HTMLElement | null;
    private navLinks: HTMLElement | null;
    private contactForm: HTMLFormElement | null;
    private formMessage: HTMLElement | null;
    private currentFilter: string = 'all';

    constructor() {
        this.skillsContainer = document.getElementById('skillsContainer');
        this.projectsContainer = document.getElementById('projectsContainer');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.menuToggle = document.getElementById('menuToggle');
        this.navLinks = document.getElementById('navLinks');
        this.contactForm = document.getElementById('contactForm') as HTMLFormElement | null;
        this.formMessage = document.getElementById('formMessage');
        
        this.init();
    }

    // Inicializar la aplicación
    init(): void {
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
    private setCurrentYear(): void {
        const yearElement = document.getElementById('currentYear');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear().toString();
        }
    }

    // Establecer fondo topográfico generado en tiempo de ejecución
    private setTopoBackground(): void {
        // Patrón topográfico seamless (ondas continuas) en gris con líneas negras suaves
        const svg = `<svg width="240" height="120" viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#000" stroke-width="1.1" opacity="0.28" stroke-linecap="round"><path d="M0 30 C40 10 80 50 120 30 C160 10 200 50 240 30"/><path d="M0 60 C40 40 80 80 120 60 C160 40 200 80 240 60"/><path d="M0 90 C40 70 80 110 120 90 C160 70 200 110 240 90"/></g></svg>`;
        const encoded = encodeURIComponent(svg);
        const root = document.documentElement;
        const bgColor = '#e5e5e5';
        document.body.style.backgroundColor = bgColor;
        document.body.style.backgroundImage = `url("data:image/svg+xml,${encoded}")`;
        document.body.style.backgroundSize = '200px auto';
        document.body.style.backgroundRepeat = 'repeat';
        document.body.style.backgroundAttachment = 'fixed';
    }

    // Configurar animación de contadores
    private setupCounterAnimation(): void {
        const projectsCount = document.getElementById('projectsCount');
        const experienceYears = document.getElementById('experienceYears');
        const clientsCount = document.getElementById('clientsCount');
        
        this.animateCounter(projectsCount, 0, 12, 2000);
        this.animateCounter(experienceYears, 0, 3, 2000);
        this.animateCounter(clientsCount, 0, 8, 2000);
    }

    // Animación de contador
    private animateCounter(element: HTMLElement | null, start: number, end: number, duration: number): void {
        if (!element) return;
        
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
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
    private setupTypingEffect(): void {
        const typedTextElement = document.getElementById('typed-text');
        if (!typedTextElement) return;
        
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
            } else {
                // Agregar caracter
                typedTextElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            // Determinar si hemos terminado de escribir o eliminar
            if (!isDeleting && charIndex === currentText.length) {
                // Esperar antes de empezar a eliminar
                isDeleting = true;
                setTimeout(type, 1500);
            } else if (isDeleting && charIndex === 0) {
                // Cambiar al siguiente texto
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500);
            } else {
                // Continuar escribiendo o eliminando
                const speed = isDeleting ? 50 : 100;
                setTimeout(type, speed);
            }
        };
        
        // Iniciar el efecto
        setTimeout(type, 1000);
    }

    // Renderizar habilidades
    private renderSkills(): void {
        if (!this.skillsContainer) return;
        
        this.skillsContainer.innerHTML = '';
        
        skillsData.forEach(skill => {
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
            
            this.skillsContainer?.appendChild(skillCard);
        });
    }

    // Renderizar proyectos
    private renderProjects(): void {
        if (!this.projectsContainer) return;
        
        // Filtrar proyectos según la categoría seleccionada
        const filteredProjects = this.currentFilter === 'all' 
            ? projectsData 
            : projectsData.filter(project => project.category === this.currentFilter);
        
        this.projectsContainer.innerHTML = '';
        
        filteredProjects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.dataset.category = project.category;
            
            // Icono según la categoría
            let categoryIcon = 'fas fa-globe';
            if (project.category === 'app') categoryIcon = 'fas fa-mobile-alt';
            if (project.category === 'design') categoryIcon = 'fas fa-palette';
            
            // Crear sección de imagen (siempre icono de categoría)
            const imageSection = `
                <div class="project-image">
                    <i class="${categoryIcon}"></i>
                </div>
            `;
            
            // Crear datos del carrusel como atributo data si tiene imágenes
            const carouselData = project.images && project.images.length > 0 
                ? `data-carousel='${JSON.stringify(project.images)}'` 
                : '';
            
            projectCard.innerHTML = `
                ${imageSection}
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${project.images && project.images.length > 0 ? `<button class="project-link demo-btn" ${carouselData}><i class="fas fa-play-circle"></i> Demo</button>` : ''}
                        ${project.codeUrl ? `<a href="${project.codeUrl}" class="project-link" target="_blank"><i class="fab fa-github"></i> Código</a>` : ''}
                    </div>
                </div>
            `;
            
            this.projectsContainer?.appendChild(projectCard);
        });
        
        // Configurar botones Demo después de renderizar
        this.setupDemoButtons();
    }

    // Configurar botones Demo con modal
    private setupDemoButtons(): void {
        const demoButtons = document.querySelectorAll('.demo-btn');
        
        demoButtons.forEach(button => {
            button.addEventListener('click', () => {
                const imagesJson = button.getAttribute('data-carousel');
                if (imagesJson) {
                    try {
                        const images = JSON.parse(imagesJson);
                        this.openDemoModal(images);
                    } catch (e) {
                        console.error('Error parsing carousel images:', e);
                    }
                }
            });
        });
    }

    // Abrir modal con carrusel de imágenes
    private openDemoModal(images: string[]): void {
        // Crear modal
        const modal = document.createElement('div');
        modal.className = 'demo-modal';
        modal.innerHTML = `
            <div class="demo-modal-content">
                <button class="modal-close"><i class="fas fa-times"></i></button>
                <div class="carousel-container" id="modal-carousel">
                    ${images.map((img, idx) => `
                        <div class="carousel-slide ${idx === 0 ? 'active' : ''}">
                            <img src="${encodeURI(img)}" alt="Demo - ${idx + 1}" onerror="this.onerror=null; this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22><rect width=%22400%22 height=%22300%22 fill=%22%23f1f3f5%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2216%22 fill=%22%23666%22>Imagen no disponible</text></svg>';" />
                        </div>
                    `).join('')}
                </div>
                <div class="carousel-controls">
                    ${images.map((_, idx) => `
                        <button class="carousel-dot ${idx === 0 ? 'active' : ''}" data-slide="${idx}" title="Foto ${idx + 1}"></button>
                    `).join('')}
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Configurar carrusel del modal
        const container = modal.querySelector('.carousel-container') as HTMLElement;
        const slides = modal.querySelectorAll('.carousel-slide');
        const dots = modal.querySelectorAll('.carousel-dot');
        let currentSlide = 0;
        let autoplayInterval: any;
        
        const goToSlide = (slideIndex: number) => {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            currentSlide = slideIndex % slides.length;
            (slides[currentSlide] as HTMLElement).classList.add('active');
            (dots[currentSlide] as HTMLElement).classList.add('active');
        };
        
        // Click en los puntos
        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                clearInterval(autoplayInterval);
                goToSlide(idx);
                startAutoplay();
            });
        });
        
        // Autoplay cada 3 segundos
        const startAutoplay = () => {
            autoplayInterval = setInterval(() => {
                goToSlide(currentSlide + 1);
            }, 3000);
        };
        
        // Cerrar modal
        const closeBtn = modal.querySelector('.modal-close') as HTMLElement;
        closeBtn.addEventListener('click', () => {
            clearInterval(autoplayInterval);
            modal.remove();
        });
        
        // Cerrar al hacer click fuera del contenido
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                clearInterval(autoplayInterval);
                modal.remove();
            }
        });
        
        // Cerrar con tecla Escape
        const escapeHandler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                clearInterval(autoplayInterval);
                modal.remove();
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);
        
        // Iniciar autoplay
        startAutoplay();
    }

    // Configurar filtros de proyectos
    private setupProjectFilters(): void {
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
    private setupMobileMenu(): void {
        if (!this.menuToggle || !this.navLinks) return;
        
        this.menuToggle.addEventListener('click', () => {
            if (this.navLinks) {
                this.navLinks.classList.toggle('active');
            }
            
            // Cambiar icono del menú
            const icon = this.menuToggle?.querySelector('i');
            if (icon && this.navLinks) {
                if (this.navLinks.classList.contains('active')) {
                    icon.className = 'fas fa-times';
                } else {
                    icon.className = 'fas fa-bars';
                }
            }
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinksElements = this.navLinks.querySelectorAll('a');
        navLinksElements.forEach(link => {
            link.addEventListener('click', () => {
                if (this.navLinks) {
                    this.navLinks.classList.remove('active');
                }
                const icon = this.menuToggle?.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-bars';
                }
            });
        });
    }

    // Configurar formulario de contacto
    private setupContactForm(): void {
        if (!this.contactForm || !this.formMessage) return;
        
        this.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Obtener valores del formulario
            const nameInput = document.getElementById('name') as HTMLInputElement | null;
            const emailInput = document.getElementById('email') as HTMLInputElement | null;
            const subjectInput = document.getElementById('subject') as HTMLInputElement | null;
            const messageInput = document.getElementById('message') as HTMLTextAreaElement | null;
            
            if (!nameInput || !emailInput || !subjectInput || !messageInput) return;
            
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
    private showFormMessage(text: string, type: 'success' | 'error' | 'info'): void {
        if (!this.formMessage) return;
        
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
    private setupSmoothScrolling(): void {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = anchor.getAttribute('href');
                if (!targetId || targetId === '#') return;
                
                const targetElement = document.querySelector(targetId) as HTMLElement | null;
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
    private setupDownloadCV(): void {
        const downloadBtn = document.getElementById('downloadCV');
        if (!downloadBtn) return;
        
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