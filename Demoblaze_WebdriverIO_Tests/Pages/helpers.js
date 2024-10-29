import { $$ } from '@wdio/globals';
import HomePage from './page.home.mjs';

// Aquí definimos la función para hacerle scrap a la web
// Preferí ponerla aparte de la parte 1 para que el código estuviera mejor ordenado

export async function scrapPagina (productos){
    const tarjetas_prod = await $$(HomePage.product_card_string);

    for (let producto of tarjetas_prod) {
            const titulo = await producto.$('.card-title a').getText();
            const precio = await producto.$('h5').getText();
            const link = await producto.$('.card-title a').getAttribute('href');

        productos.push({
                titulo,
                precio,
                link: `https://www.demoblaze.com/${link}`,
        });
    };
};