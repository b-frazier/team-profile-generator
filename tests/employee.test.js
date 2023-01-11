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

test('getName method returns name', () => {
    const empObj = new Employee('Bianca', 22, 'bianca.frazier90@gmail.com')

    expect(empObj.getName()).toEqual('Bianca')
});

test('getId method returns Id', () => {
    const empObj = new Employee('Bianca', 22, 'bianca.frazier90@gmail.com')

    expect(empObj.getId()).toEqual(22)
});

test('getEmail method returns email', () => {
    const empObj = new Employee('Bianca', 22, 'bianca.frazier90@gmail.com')

    expect(empObj.getEmail()).toEqual('bianca.frazier90@gmail.com')
});




