class TestData {
    constructor(env) {
        if (env === 'qa') {
            this.email = 'test549854545@test.com';
            this.password = '1234567Test!';
        } else if (env === 'uat') {
            this.email = 'secondsomeschllast@test.com';
            this.password = '1234567Test!';
        } else if (env === 'demo') {
            this.email = 'johndoeuser@yopmail.com';
            this.password = 'Password_1';
        }
    }
}

export default TestData;

