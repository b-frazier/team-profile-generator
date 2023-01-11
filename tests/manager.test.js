const Manager = require('../lib/manager.js');
const manObj = new Manager('Katie', 5, 'email@gmail.com', 12);

test('returns role as Manager', () => {
    expect(manObj.getRole()).toBe('Manager');
});