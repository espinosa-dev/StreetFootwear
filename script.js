const navbarMenu = document.querySelector(".navbar .links");
const menuBtn = document.querySelector(".menu-btn");
const hideMenuBtn = document.querySelector(".navbar .links .close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");
const loginLink = document.getElementById("login-link");
const signupLink = document.getElementById("signup-link");

signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    formPopup.classList.add("show-signup");
});

loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    formPopup.classList.remove("show-signup");
});

menuBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});


hideMenuBtn.addEventListener("click", () => {
    navbarMenu.classList.remove("show-menu");
});


showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

hidePopupBtn.addEventListener("click", () => {
    document.body.classList.remove("show-popup");
});

// Product filter (Made by espinosadev)

function filterProducts(checkbox) {
    const products = document.querySelectorAll('.product');
    const todosCheckbox = document.getElementById('todos');

    // Verificar si "Todos" está marcado
    if (todosCheckbox.checked) {
        products.forEach(product => {
            product.style.display = 'block'; // Mostrar todos los productos
        });
        return; // Salir de la función si "Todos" está marcado
    }

    // Obtener todas las casillas de verificación
    const checkedCategories = Array.from(document.querySelectorAll('.sidebar input[type="checkbox"]:not(#todos)'))
        .filter(input => input.checked)
        .map(input => input.id); // Obtener las categorías marcadas

    // Filtrar productos según las categorías seleccionadas
    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        product.style.display = (checkedCategories.includes(productCategory)) ? 'block' : 'none';
    });

    // Si no hay categorías seleccionadas, mostrar todos los productos
    if (checkedCategories.length === 0) {
        products.forEach(product => {
            product.style.display = 'block'; // Mostrar todos los productos
        });
    }
}
// Mostrar el botón al hacer scroll hacia abajo
window.onscroll = function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 300) { 
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
};
// Función para volver arriba
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}