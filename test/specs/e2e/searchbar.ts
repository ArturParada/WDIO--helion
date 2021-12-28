import GlobalPage from "../../pages/GlobalPage"
import {helionHomeUrl, notFoundUrl, searchPageUrl} from "../../config/pagesUrl"
import SearchbarPage from "../../pages/components/searchbarPage";
import { incorrectSearchPhrase, notFoundMessage, searchPhrase, searchResultTitle } from "../../config/data";
import searchbarPage from "../../pages/components/searchbarPage";
import SearchResultPage from "../../pages/SearchResultPage";

describe("E2E -SearcgBar",async() =>{
    it("Should open helion page end verify url and visible text", async()=>{
        await GlobalPage.openPage(helionHomeUrl, helionHomeUrl);
        await SearchbarPage.searchBarIsVisible();
    })
    it("Should click on search icon and verify url", async()=>{
        await SearchbarPage.clickOnSearchButton;
        await expect(browser).toHaveUrl(helionHomeUrl);
    })
    it("Should type search value and verify visible popup", async()=>{
        await SearchbarPage.typeSearchPhrase(searchPhrase);
        await SearchbarPage.suggestPopUpIsVisible()
        
    })
    it("Should click on see all book button", async()=>{
        await searchbarPage.clickSeeAllBooksBtn();
        await expect(browser).toHaveUrl(searchPageUrl);
    })
    it("Should verify visible correctly title and number of books",async()=>{
        const title:string = await SearchResultPage.getPageTitle();
        const numberOfBooks:number =await SearchResultPage.getNumberOfBooks()
        await expect(title).toContain(searchResultTitle);
        await expect(numberOfBooks).toEqual(20);
    })
    it("should clear input value", async ()=>{
        await SearchbarPage.clearSearchBar();
        await expect(await SearchbarPage.getInputValue()).toContain('');
    })
    it("should type incorect book name and verify alert",async ()=>{
        await SearchbarPage.typeSearchPhrase(incorrectSearchPhrase);
        await SearchbarPage.clickOnSearchButton();
        await expect(await SearchbarPage.getNotFoundAlertText()).toContain(notFoundMessage);
    })
    it("should clear input value and click on search icon" , async ()=>{
        await SearchbarPage.clearSearchBar();
        // await browser.pause(500);
        await SearchbarPage.clickOnSearchButton();
        await expect(browser).toHaveUrl(notFoundUrl);
        await expect(await SearchbarPage.getInputValue()).toContain(incorrectSearchPhrase);
    })
    
})