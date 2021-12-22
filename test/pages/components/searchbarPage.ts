class SearchBarPage{
    get searchInput(){
        return $('#inputSearch');
    }
    async searchBarIsVisible(){
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
    
    }
}




