const Intern = require('../lib/intern.js');
const intObj = new Intern('Jada', 10, 'jdraine@gmail.com', 'ISU');

test('returns school', () => {
    expect(intObj.getSchool()).toBe('ISU');
})
