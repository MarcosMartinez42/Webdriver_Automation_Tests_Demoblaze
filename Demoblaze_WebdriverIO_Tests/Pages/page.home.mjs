import { $ } from '@wdio/globals';
import Page from './page.mjs';

// Aquí definimos todos los elementos que necesitamos llamar en los tests
// También definimos funciones para poder reutilizarlas en caso de tener que escalar los tests

class HomePage extends Page {

    //Elementos comunes en home
    get product_card () {return $('//div[@class="card h-100"]');}
    get product_card_string () {return '//div[@class="card h-100"]'};
    get galaxys6 () {return $('//a[normalize-space()="Samsung galaxy s6"]');}
    get addtocart () {return $('//a[@class="btn btn-success btn-lg"]');}
    get cart () {return $('#cartur');}
    get nextpage () {return $('#next2');}

    //Elementos de flujo de compra
    get placeorder () {return $('//button[normalize-space()="Place Order"]');}
    get order_name () {return $('#name');}
    get order_country () {return $('#country');}
    get order_city () {return $('#city');}
    get order_cc () {return $('#card');}
    get order_month () {return $('#month');}
    get order_year () {return $('#year');}
    get order_purchase () {return $('//button[normalize-space()="Purchase"]');}
    get ok_btn () {return $('//button[normalize-space()="OK"]');}

    // Elementos de flujo de contacto
    get contact () {return $('//a[normalize-space()="Contact"]');}
    get contact_email () {return $('#recipient-email');}
    get contact_name () {return $('#recipient-name');}
    get contact_msg () {return $('#message-text');}
    get contact_send () {return $('//button[normalize-space()="Send message"]');}

    // Elementos de flujo de producto
    get monitors_btn () {return $('//a[4]');}
    get apple_monitor () {return $('//a[normalize-space()="Apple monitor 24"]');}
    get apple_monitor_img () {return $('//div[@class="item active"]//img');}

    // Métodos reutilizables

    async fill_order (name, country, city, cc, month, year) {
        await this.order_name.setValue(name);
        await this.order_country.setValue(country);
        await this.order_city.setValue(city);
        await this.order_cc.setValue(cc);
        await this.order_month.setValue(month);
        await this.order_year.setValue(year);
        await this.order_purchase.click();
    };
    
    async fill_contact (email, c_name, message) {
        await this.contact_email.setValue(email);
        await this.contact_name.setValue(c_name);
        await this.contact_msg.setValue(message);
        await this.contact_send.click();
    };

    open () {
        return super.open();
    };
};

export default new HomePage();