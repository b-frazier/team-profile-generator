const Intern = require('../lib/intern.js');
const intObj = new Intern('Jada', 10, 'jdraine@gmail.com', 'ISU');

test('returns school', () => {
    expect(intObj.getSchool()).toBe('ISU');
});

test('returns Intern as role', () => {
    expect(intObj.getRole()).toBe('Intern');
});
