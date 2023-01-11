const Engineer = require('../lib/engineer');
const engObj = new Engineer('Phoebe', 8, 'ppnasia99@gmailcom', 'b-frazier');

test('returns github', () => {
    expect(engObj.getGithub()).toEqual('b-frazier')
});

test('returns Engineer as role', () => {
    expect(engObj.getRole()).toEqual('Engineer')
});