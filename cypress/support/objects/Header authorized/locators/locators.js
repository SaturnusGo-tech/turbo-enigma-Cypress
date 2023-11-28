// locators.js

const Locators = {
    Header: '//*[@id="app"]/div/div[1]'
};

const EnabledHeaderItems = [
    { locator: '//*[@id="app"]/div/div[2]/nav/div/div[2]/a[1]', type: 'xpath' },
    { locator: '/catalog', type: 'href' },
    { locator: '/account/profile', type: 'href' },
    { locator: '/account/orders', type: 'href' },
    { locator: '/cart', type: 'href' },
];

export { Locators, EnabledHeaderItems };
