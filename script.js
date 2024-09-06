document.getElementById("languageSwitcher").addEventListener("change", function() {
    var language = this.value;

    // Defina o conteúdo para cada idioma
    var translations = {
        pt: {
            title: "Categorias",
            content: "Este é um exemplo de página que suporta múltiplos idiomas."
        },
        en: {
            title: "Categories",
            content: "This is an example of a page that supports multiple languages."
        },
        es: {
            title: "Categorias",
            content: "Este es un ejemplo de página que soporta múltiples idiomas."
        },
        no: {
            title: "Kategorier",
            content: "Dette er et eksempel på en side som støtter flere språk."
        }
    };

    // Atualiza o conteúdo da página de acordo com o idioma selecionado
    document.getElementById("title").innerText = translations[language].title;
    document.getElementById("content").innerText = translations[language].content;
});


document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelector('.carousel-images');
    const dots = document.querySelectorAll('.dot');
    let index = 0;
    const totalImages = dots.length;

    function showSlide(n) {
        index = (n + totalImages) % totalImages;
        images.style.transform = `translateX(${-index * 100}%)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        showSlide(index + 1);
    }

    setInterval(nextSlide, 3000); // Troca de imagem a cada 3 segundos
});