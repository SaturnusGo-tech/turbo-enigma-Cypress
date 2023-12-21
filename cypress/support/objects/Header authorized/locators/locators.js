// locators.js

const Locators = {
    Header: 'flex h-[39px] items-center gap-x-5 border-[color:var(--color-primary)] bg-[color:var(--color-header-top-bg)] px-5 text-sm text-[color:var(--color-header-top-text)] xl:px-12 relative z-[21] print:hidden'
};

const EnabledHeaderItems = [
    { locator: '//*[@id="app"]/div/div[2]/nav/div/div[2]/a[1]', type: 'xpath' },
    { locator: '/catalog', type: 'href' },
    { locator: '/account/profile', type: 'href' },
    { locator: '/account/orders', type: 'href' },
    { locator: '/cart', type: 'href' },
];

export { Locators, EnabledHeaderItems };
