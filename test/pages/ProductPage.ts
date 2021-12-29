import waitForDisplayed from "../../node_modules/webdriverio/build/commands/element/waitForDisplayed";


class ProductPage{
    get productTitle(){
        return $("div.title-group > h1 >span[itemprop = 'name']")
    }
    get addToCartBtn(){
        return $("a#addToBasket_vwdtnp_w")
    }
    get productPrice(){
        return $("ins#cena_w")
    }
    async getProductPrice():Promise<string>{
        const price:WebdriverIO.Element = await this.productPrice;
        await price.waitForDisplayed();
        return price.getText();
    }
async getProductTitleValue():Promise<string>{
    const title:WebdriverIO.Element = await this.productTitle;
    await title.waitForDisplayed();
    return await title.getText();
}

    async productTitleIsVisible(){
        const title:WebdriverIO.Element = await this.productTitle;
        await title.waitForDisplayed();
    }
    async addToCartBtnIsVisible(){
        const btn:WebdriverIO.Element = await this.addToCartBtn;
        await btn.waitForDisplayed();
    
    }
    async clickOnAddToCartBtn(){
        const btn:WebdriverIO.Element = await this.addToCartBtn;
        await btn.waitForDisplayed();
        await btn.click();
    }
}
export default new ProductPage();