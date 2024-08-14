$(document).ready(function() {
    // URL de la API
    const apiUrl = "https://fakestoreapi.com/products";

    // Función para obtener los productos de la API
    function fetchProducts() {
        $.get(apiUrl, function(products) {
            let productHtml = '';
            
            // Iterar sobre cada producto y crear el HTML para cada uno
            products.forEach(product => {
                // Limitar la descripción a 200 caracteres
                let truncatedDescription = product.description.length > 100 ? 
                    product.description.substring(0, 100) + '...' : product.description;
                
                // Limitar el título a 80 caracteres
                let truncatedTitle = product.title.length > 25 ? 
                    product.title.substring(0, 25) + '...' : product.title;

                productHtml += `
                    <div class="col-md-4">
                        <div class="card mb-4">
                            <img src="${product.image}" class="card-img-top img-card-custom" alt="${product.title}">
                            <div class="card-body">
                                <div class="title-container"><h5 class="card-title">${truncatedTitle}</h5></div>
                                <h6 class="card-subtitle mb-2 text-muted">$${product.price}</h6>
                                <p class="card-text">${truncatedDescription}</p>
                                <p class="card-text"><small class="text-muted">Category: ${product.category}</small></p>
                            </div>
                        </div>
                    </div>
                `;
            });

            // Insertar el HTML generado en el contenedor de productos
            $('#product-list').html(productHtml);
        });
    }

    // Llamar a la función para obtener los productos al cargar la página
    fetchProducts();
});
