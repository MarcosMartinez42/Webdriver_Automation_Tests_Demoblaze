import { browser, expect } from '@wdio/globals';
import HomePage from '../Pages/page.home.mjs';
import { scrapPagina } from '../Pages/helpers.js';
import fs from 'fs';

describe('Parte_1', () => {
    it('Scrapear_y_crear_archivo_de_texto', async () => {
        const productos = [];
        await HomePage.open('/');
        await HomePage.product_card.waitForDisplayed();
        await scrapPagina(productos);
        await HomePage.nextpage.click();
        await browser.pause(2000);
        await HomePage.product_card.waitForDisplayed();
        await scrapPagina(productos);
        const datos_scrap = productos.map(p => `${p.titulo}\n${p.precio}\n${p.link}\n`).join('\n');
        fs.writeFileSync('datos de productos.txt', datos_scrap);
    });
});