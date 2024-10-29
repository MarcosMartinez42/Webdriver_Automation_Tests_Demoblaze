import { browser, expect } from '@wdio/globals';
import HomePage from '../Pages/page.home.mjs';

// Para esta segunda parte, voy a automatizar tres pruebas básicas sobre esta web:
// 1) Realizar la compra de un producto
// 2) Enviar un mensaje al staff, mediante el form de contacto
// 3) Entrar a los detalles de un producto en específico y asegurar que se muestre su imagen

describe ('Parte_2', ()=> {
    it('1_Compra', async () => {
        await HomePage.open('/');
        await HomePage.galaxys6.click();
        await HomePage.addtocart.click();
        await HomePage.cart.click();
        await HomePage.placeorder.click();
        await HomePage.fill_order('Jorge Carlos','Andorra','Barcelona','12345678','January','2025');
        await expect (HomePage.ok_btn).toBeExisting();
    });
    it('2_Enviar_mensaje', async () => {
        await HomePage.open('/');
        await HomePage.contact.click();
        await HomePage.fill_contact('jorgecarlos@jorgecarlos.com','Jorge Carlos','Espero su contacto, muchas gracias!');     
    });
    it('3_Buscar_monitor', async () => {
        await HomePage.open('/');
        await HomePage.monitors_btn.click();
        await HomePage.apple_monitor.click();
        await expect (HomePage.apple_monitor_img).toBeExisting();
    });
});