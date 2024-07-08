const { expect } = require("@playwright/test");
const testData = require("../Fixtures/Login.fixture.json");

exports.DashboardPage = class Dashboard{
    constructor(page){
        this.page = page;
        this.addBtn = '//*[@id="root"]/div/div[2]/div/div[2]/div/div[2]/div/div[4]/div/button/div/div/div';
        this.createPost = '//*[@id="root"]/div/div[2]/div/div/div/div/div[2]/div/div/div[1]/div[3]/div/div/div/div[2]/div/div[1]/div';
        this.post = '//*[@id="root"]/div/div[2]/div/div/div/div/div[2]/div/div/div[2]/div[2]/div/div[2]';
        this.textArea = '//*[@id="root"]/div/div[2]/div/div/div/div/div[2]/div/div/div[2]/div[1]/div/div[1]/div/div/div/div[2]/div/div/div[1]/div/div';
    }

    a
}