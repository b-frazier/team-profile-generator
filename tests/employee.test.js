const Employee = require('../lib/employee.js');

test('employee class exists', () => {
    expect(Employee).toBeDefined();
})

test('returns an employee object', () => {
    const empObj = new Employee('Bianca', 22, 'bianca.frazier90@gmail.com')

    expect(empObj.name).toEqual(expect.any(String));
    expect(empObj.id).toEqual(expect.any(Number));
    expect(empObj.email).toEqual(expect.any(String));
});

test('getId function exists', () => {
    expect(Employee.getId).toBeDefined();
})



