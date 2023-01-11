const Employee = require('../lib/employee.js');

test('returns an employee object', () => {
    const empObj = new Employee('Bianca', 22, 'bianca.frazier90@gmail.com')

    expect(empObj.name).toEqual(expect.any(String));
});


