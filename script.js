// Función para mostrar la hora en vivo con formato mejorado
function updateClock() {
    const now = new Date();
    const options = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
    };
    const timeString = now.toLocaleTimeString('es-ES', options);
    document.getElementById('clock').textContent = `Hora actual: ${timeString}`;
}

// Actualizar la hora cada segundo
setInterval(updateClock, 1000);
updateClock(); // Llamada inicial

// Función para cargar artículos dinámicamente con diseño mejorado
function loadArticles() {
    const articlesContainer = document.getElementById('articles-container');
    const articles = [
        { 
            title: 'El impacto de la tecnología en el trabajo', 
            description: 'La digitalización está cambiando la manera en que trabajamos y nos relacionamos en el mundo laboral.',
            category: 'Tecnología',
            time: 'Hace 4 horas'
        },
        { 
            title: 'La educación post-pandemia', 
            description: 'Cómo las nuevas tecnologías y el aprendizaje en línea están transformando la educación.',
            category: 'Educación',
            time: 'Ayer'
        },
        { 
            title: 'El futuro de la energía renovable', 
            description: 'Las inversiones en energías renovables están liderando el camino hacia un futuro más sostenible.',
            category: 'Medio Ambiente',
            time: 'Hace 2 días'
        }
    ];

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'col-md-6 col-lg-4 mb-4';
        articleElement.innerHTML = `
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <span class="badge bg-secondary mb-2">${article.category}</span>
                    <h4 class="card-title">${article.title}</h4>
                    <p class="card-text">${article.description}</p>
                </div>
                <div class="card-footer bg-transparent">
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted"><i class="fas fa-clock me-1"></i> ${article.time}</small>
                        <a href="#" class="btn btn-sm btn-outline-primary">Leer más</a>
                    </div>
                </div>
            </div>
        `;
        articlesContainer.appendChild(articleElement);
    });

    // Actualizar el contador de artículos
    document.getElementById('article-count').textContent = `Total de artículos: ${articles.length}`;
}

// Función para agregar un nuevo artículo con diseño mejorado
document.getElementById('article-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('article-title').value;
    const description = document.getElementById('article-description').value;
    
    if (title && description) {
        const articlesContainer = document.getElementById('articles-container');
        const articleElement = document.createElement('div');
        articleElement.className = 'col-md-6 col-lg-4 mb-4';
        articleElement.innerHTML = `
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <span class="badge bg-info mb-2">Nuevo</span>
                    <h4 class="card-title">${title}</h4>
                    <p class="card-text">${description}</p>
                </div>
                <div class="card-footer bg-transparent">
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted"><i class="fas fa-clock me-1"></i> Ahora</small>
                        <a href="#" class="btn btn-sm btn-outline-primary">Leer más</a>
                    </div>
                </div>
            </div>
        `;
        articlesContainer.prepend(articleElement);
        
        // Limpiar formulario
        document.getElementById('article-title').value = '';
        document.getElementById('article-description').value = '';
        
        // Actualizar el contador de artículos
        const currentCount = parseInt(document.getElementById('article-count').textContent.split(': ')[1]);
        document.getElementById('article-count').textContent = `Total de artículos: ${currentCount + 1}`;
        
        // Mostrar notificación de éxito
        const toast = document.createElement('div');
        toast.className = 'position-fixed bottom-0 end-0 p-3';
        toast.style.zIndex = '11';
        toast.innerHTML = `
            <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header bg-success text-white">
                    <strong class="me-auto">Éxito</strong>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    Artículo publicado correctamente.
                </div>
            </div>
        `;
        document.body.appendChild(toast);
        
        // Eliminar la notificación después de 3 segundos
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
});

// Formulario de contacto (mejorado)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('contact-name').value;
    const message = document.getElementById('contact-message').value;

    if (name && message) {
        // Cerrar el modal si está abierto
        const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
        if (modal) modal.hide();
        
        // Mostrar notificación de éxito
        const toast = document.createElement('div');
        toast.className = 'position-fixed bottom-0 end-0 p-3';
        toast.style.zIndex = '11';
        toast.innerHTML = `
            <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header bg-success text-white">
                    <strong class="me-auto">Mensaje enviado</strong>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    Gracias por contactarnos, ${name}! Hemos recibido tu mensaje.
                </div>
            </div>
        `;
        document.body.appendChild(toast);
        
        // Eliminar la notificación después de 5 segundos
        setTimeout(() => {
            toast.remove();
        }, 5000);
        
        // Limpiar formulario
        document.getElementById('contact-name').value = '';
        document.getElementById('contact-message').value = '';
    }
});

// Inicializar cargando artículos
window.onload = function() {
    loadArticles();
    
    // Inicializar tooltips de Bootstrap
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
};