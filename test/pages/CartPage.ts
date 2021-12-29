class CartPage{
    get succesAlert(){
        return $("div.successbox > p");
    }
    get totalPrice(){
        return $("h3#cart-edit-summary");
    }
    get checkbox(){
        return $("form#formularz tr th.checkbox");
    }
    get deleteSelectedLabel(){
        return $("div#usun a");
    }
    get deletedAlertMessage(){
        return $("div.infobox > p");
    }
    async getDeletedAlertMessageValue(){
        const alert:WebdriverIO.Element = await this.deletedAlertMessage;
        await alert.waitForDisplayed()
        return alert.getText();
    }
    async acceptDeleteAlert (){
        //@ts-ignore
        await browser.acceptAlert();
    }
    async clickOnDeleteSelectedLabel(){
        const label:WebdriverIO.Element = await this.deleteSelectedLabel;
        await label.waitForDisplayed();
        await label.scrollIntoView();
        await label.click();
    }
    async clickOnCheckbox(){
        const checkbox:WebdriverIO.Element = await this.checkbox;
        await checkbox.waitForDisplayed();
        await checkbox.scrollIntoView();
        await checkbox.click();
    }
    async getTotalPriceValue(){
        const price:WebdriverIO.Element = await this.totalPrice;
        await price.waitForDisplayed();
        return price.getText()
    }
    async getSuccesAlertValue():Promise<string>{
        const alert:WebdriverIO.Element = await this.succesAlert;
        await alert.waitForDisplayed();
        return await alert.getText();
    }
}
export default new CartPage();