```javascript
document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    // Função para animar a entrada dos itens
    function animateItems(items) {
        items.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.transition = 'all 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Animação inicial
    animateItems(menuItems);

    // Gerenciar navegação das categorias
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Atualizar botões ativos
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.getAttribute('data-category');
            const filteredItems = [];

            // Filtrar e animar itens
            menuItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                    filteredItems.push(item);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });

            // Animar itens filtrados
            setTimeout(() => {
                animateItems(filteredItems);
            }, 300);
        });
    });

    // Adicionar funcionalidade aos botões de pedido
    const orderButtons = document.querySelectorAll('.order-btn');
    orderButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Adicionar animação ao clicar
            this.classList.add('clicked');
            
            // Remover a classe após a animação
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 200);

            // Aqui você pode adicionar a lógica para adicionar ao carrinho
            const menuItem = this.closest('.menu-item');
            const itemName = menuItem.querySelector('h3').textContent;
            const itemPrice = menuItem.querySelector('.price').textContent;
            
            console.log(`Item adicionado: ${itemName} - ${itemPrice}`);
        });
    });

    // Efeito parallax no hero
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });

    // Navegação suave ao clicar nas categorias
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
```