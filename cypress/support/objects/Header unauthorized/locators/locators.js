// locators.js

const Locators = {
    Header: '//*[@id="app"]/div/div[1]'
};

const DisabledHeaderItems = [
    { locator: '//*[@id="app"]/div/div[2]/nav/div[2]/div[1]/div/div[1]/div[1]/button', type: 'xpath' },
    { locator: '/catalog', type: 'href' },
    { locator: '/company/info', type: 'href' },
    { locator: '/account/orders', type: 'href' },
    { locator: '/cart', type: 'href' },
    { locator: '/about-us', type: 'href' },
];

export { Locators, DisabledHeaderItems };
