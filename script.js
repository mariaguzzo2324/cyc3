// ===== FUNCIONALIDADES JAVASCRIPT =====

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== EFECTO FADE-IN AL CARGAR LA PÁGINA =====
    const container = document.querySelector('.container');
    
    // Función para activar el efecto fade-in
    function activateFadeIn() {
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Activar fade-in al cargar
    activateFadeIn();
    
         // ===== EFECTOS DE HOVER MEJORADOS =====
     const skillItems = document.querySelectorAll('.skill-item');
     const favoriteItems = document.querySelectorAll('.favorite-item');
     
     // Efecto de hover para habilidades (sin iconos)
     skillItems.forEach(item => {
         item.addEventListener('mouseenter', function() {
             this.style.transform = 'translateY(-4px) scale(1.02)';
         });
         
         item.addEventListener('mouseleave', function() {
             this.style.transform = 'translateY(0) scale(1)';
         });
     });
    
    // Efecto de hover para elementos favoritos
    favoriteItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(6px)';
            this.style.boxShadow = '0 4px 8px rgba(25, 118, 210, 0.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // ===== EFECTO DE CLICK EN LA FOTO DE PERFIL =====
    const profileImage = document.querySelector('.profile-image');
    
    if (profileImage) {
        profileImage.addEventListener('click', function() {
            // Efecto de pulso al hacer click
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.2s ease';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    }
    
    // ===== ANIMACIÓN DE ENTRADA ESCALONADA =====
    const sections = document.querySelectorAll('.skills-section, .favorites-section');
    
    function animateSections() {
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 300 + (index * 200)); // Animación escalonada
        });
    }
    
    // Activar animación de secciones después del fade-in principal
    setTimeout(animateSections, 800);
    
    // ===== EFECTO DE SCROLL SUAVE =====
    function smoothScroll() {
        const scrollElements = document.querySelectorAll('.profile-card');
        
        const elementInView = (el, dividend = 1) => {
            const elementTop = el.getBoundingClientRect().top;
            return (
                elementTop <=
                (window.innerHeight || document.documentElement.clientHeight) / dividend
            );
        };
        
        const displayScrollElement = (element) => {
            element.classList.add('scrolled');
        };
        
        const handleScrollAnimation = () => {
            scrollElements.forEach((el) => {
                if (elementInView(el, 1.25)) {
                    displayScrollElement(el);
                }
            });
        };
        
        window.addEventListener('scroll', () => {
            handleScrollAnimation();
        });
    }
    
    // Activar scroll suave
    smoothScroll();
    
    // ===== FUNCIÓN PARA CAMBIAR TEMA (OPCIONAL) =====
    function toggleTheme() {
        const body = document.body;
        const currentTheme = body.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    }
    
    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }
    
    // ===== EFECTO DE TYPING PARA EL NOMBRE (OPCIONAL) =====
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Aplicar efecto typing al nombre (descomenta si quieres usarlo)
    // const profileName = document.querySelector('.profile-name');
    // if (profileName) {
    //     const originalText = profileName.textContent;
    //     setTimeout(() => {
    //         typeWriter(profileName, originalText, 150);
    //     }, 1000);
    // }
    
    // ===== FUNCIÓN PARA MOSTRAR MENSAJE DE BIENVENIDA =====
    function showWelcomeMessage() {
        const welcomeDiv = document.createElement('div');
        welcomeDiv.className = 'welcome-message';
        welcomeDiv.innerHTML = `
            <div class="welcome-content">
                <span class="material-icons">👋</span>
                <p>¡Bienvenido a mi perfil!</p>
            </div>
        `;
        
        // Estilos para el mensaje de bienvenida
        welcomeDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(25, 118, 210, 0.9);
            color: white;
            padding: 12px 20px;
            border-radius: 25px;
            font-size: 14px;
            font-weight: 500;
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.5s ease;
            backdrop-filter: blur(10px);
        `;
        
        document.body.appendChild(welcomeDiv);
        
        // Mostrar mensaje
        setTimeout(() => {
            welcomeDiv.style.transform = 'translateX(0)';
        }, 1000);
        
        // Ocultar mensaje después de 3 segundos
        setTimeout(() => {
            welcomeDiv.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(welcomeDiv);
            }, 500);
        }, 4000);
    }
    
    // Mostrar mensaje de bienvenida
    setTimeout(showWelcomeMessage, 1500);
    
    // ===== CONSOLA DE AYUDA PARA DESARROLLADORES =====
    console.log(`
    🎨 Personal Profile Card - Guía de Modificación
    
    📝 PARA MODIFICAR EL CONTENIDO:
    
    1. FOTO DE PERFIL:
       - Cambia la URL en: <img src="TU_URL_AQUI">
       - Línea 25 en index.html
    
    2. INFORMACIÓN PERSONAL:
       - Nombre: Línea 32 en index.html
       - Apellido: Línea 33 en index.html
       - Edad: Línea 36 en index.html
       - Zona: Línea 37 en index.html
       - Carrera: Línea 38 en index.html
    
         3. HABILIDADES:
        - Modifica las líneas 48-58 en index.html
        - Cambia nombres en: <span class="skill-name">NUEVA_HABILIDAD</span>
    
    4. PELÍCULAS FAVORITAS:
       - Modifica las líneas 68-72 en index.html
    
    5. DISCOS FAVORITOS:
       - Modifica las líneas 82-86 en index.html
    
    🎯 ¡NO MODIFIQUES EL CSS O JS A MENOS QUE SEAS EXPERTO!
    `);
    
});

// ===== FUNCIONES ADICIONALES PARA FUTURAS MEJORAS =====

// Función para agregar efecto de partículas (opcional)
function addParticles() {
    // Código para partículas flotantes
    console.log('Función de partículas disponible para futuras mejoras');
}

// Función para agregar modo oscuro manual
function enableDarkMode() {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
}

// Función para agregar modo claro manual
function enableLightMode() {
    document.body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
} 