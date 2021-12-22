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

    async clickSeeAllBooksBtn(){
        const btn:WebdriverIO.Element = await this.seeAllBooksBtn;
        await btn.waitForDisplayed();
        await btn.scrollIntoView();
        await btn.click();
       
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



