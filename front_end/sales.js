function getSales() {
    $.get('/get_sales', function (products) {
        const forSaleDisplay = document.getElementById('forSale');
        const soldDisplay = document.getElementById('sold');
        const forSale = products['for_sale'];
        const sold = products['sold'];
        for (const product of forSale) {
             forSaleDisplay.innerHTML +=
                 '<table>' +
                 '<tr>' +
                 '<td><img src="/' + product['product_image'] + '" width="300" height="300"></td>' +
                 '<td>Name: ' + product['product_name'] + '<br>' +
                 'Description: ' + product['product_description'] + '<br>' +
                 'Price: ' + product['product_price'] + '</td>' +
                 '</tr>' +
                 '</table>';
        }
        for (const product of sold) {
            soldDisplay.innerHTML +=
                '<table>' +
                '<tr>' +
                '<td><img src="/' + product['product_image'] + '" width="300" height="300"></td>' +
                '<td>Name: ' + product['product_name'] + '<br>' +
                'Description: ' + product['product_description'] + '<br>' +
                'Price: ' + product['product_price'] + '</td>' +
                '</tr>' +
                '</table>';
        }
    })
}