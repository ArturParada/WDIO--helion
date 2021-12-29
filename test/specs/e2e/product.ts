import { alertMessage, deletedProductMessage, searchPhrase } from "../../config/data";
import { cartUrl, helionHomeUrl, searchProductUrl } from "../../config/pagesUrl"
import CartPage from "../../pages/CartPage";
import SearchbarPage from "../../pages/components/SearchBarPage";
import ProductPage from "../../pages/ProductPage";
import SearchResultPage from "../../pages/SearchResultPage";

describe("e2E-Products",async() => {
    let productTitle:string = "";
    let price:string = ""
    before(()=>{
        browser.url(helionHomeUrl);
    })
    it("Should type search phrase and click search icon", async()=>{
        await SearchbarPage.typeSearchPhrase(searchPhrase);
        await SearchbarPage.clickOnSearchButton();
        await expect(browser).toHaveUrl(searchProductUrl);
    })
    it("Should click on firs book",async () => {
        await SearchResultPage.clickOnFirstBookItem();
        await ProductPage.productTitleIsVisible();
        await ProductPage.addToCartBtnIsVisible();
        productTitle = await ProductPage.getProductTitleValue();
        price = await ProductPage.getProductPrice()
    })
    it("Should click on add to cart button", async()=>{
        await ProductPage.clickOnAddToCartBtn();
        await expect(browser).toHaveUrlContaining(cartUrl);
        await expect(await CartPage.getSuccesAlertValue()).toContain(productTitle)
        await expect(await CartPage.getTotalPriceValue()).toContain(price)
    })
    it("should deleted product from card",async () => {
        await CartPage.clickOnCheckbox();
        await CartPage.clickOnDeleteSelectedLabel();
        //@ts-ignore
        await expect(await browser.getAlertText()).toContain(alertMessage);
        await CartPage.acceptDeleteAlert();
        await expect(await CartPage.getDeletedAlertMessageValue()).toContain(deletedProductMessage);
    })
})