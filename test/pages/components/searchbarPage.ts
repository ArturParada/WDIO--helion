class SearchBarPage{
    get searchInput(){
        return $('#inputSearch');
    }
    get searchIcon(){
        return $("//button[contains(text(),'Szukaj')]");
    }
    get suggetsPopUp(){
        return $("form#szukanie div.suggest-list");
    }
    get seeAllBooksBtn(){
        return $("li.wszystkie > p > a");
    }
    // get searchInputText(){
    //     return $("div.subpage-toolbar-right")
    // }
    get notFoundAlert(){
        return $("div.not-found");
    }
    async getNotFoundAlertText():Promise<string>{
        const alert:WebdriverIO.Element = await this.notFoundAlert;
        await alert.waitForDisplayed();
        return await alert.getText();

    }

    async clearSearchBar(){
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        await input.clearValue();
    }

    async clickSeeAllBooksBtn(){
        const btn:WebdriverIO.Element = await this.seeAllBooksBtn;
        
        await btn.waitForDisplayed();
        // await btn.scrollIntoView();
        // await browser.pause(4000)
        // const inputText:WebdriverIO.Element = await this.searchInputText;
        // await inputText.waitUntil(async function(){
        //     return (await this.getText()) === 'Szukaj'
        // })
        await btn.click();
        
        
        // await browser.debug();
    }
    async getInputValue():Promise<string>{
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        return await input.getValue();
    }

    async suggestPopUpIsVisible(){
        const popup:WebdriverIO.Element = await this.suggetsPopUp;
        await popup.waitForDisplayed;
    }
    async typeSearchPhrase(value:string) {
       const input:WebdriverIO.Element = await this.searchInput;
       await input.waitForDisplayed();
       await input.setValue(value);
       
       
   }
    async clickOnSearchButton(){
        const icon:WebdriverIO.Element =  await this.searchIcon;
        await icon.waitForDisplayed();
        icon.click();
    }
    async searchBarIsVisible(){
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
    
    }
}

export default new SearchBarPage();



