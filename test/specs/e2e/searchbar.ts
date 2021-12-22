import GlobalPage from "../../pages/GlobalPage"
import {helionHomeUrl, searchPageUrl} from "../../config/pagesUrl"
import SearchbarPage from "../../pages/components/searchbarPage";
import { searchPhrase, searchResultTitle } from "../../config/data";
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
})