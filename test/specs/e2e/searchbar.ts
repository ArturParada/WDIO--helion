import GlobalPage from "../../pages/GlobalPage"
import {helionHomeUrl} from "../../config/pagesUrl"

describe("E2E -SearcgBar",async() =>{
    it("Should oen helion page end verify url and visible tezt", async()=>{
        await GlobalPage.openPage(helionHomeUrl, helionHomeUrl)
    })
})