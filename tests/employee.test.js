const Employee = require('../lib/employee.js');
const empObj = new Employee('Bianca', 22, 'bianca.frazier90@gmail.com')

test('employee class exists', () => {
    expect(Employee).toBeDefined();
})

test('returns an employee object', () => {
    expect(empObj.name).toEqual(expect.any(String));
    expect(empObj.id).toEqual(expect.any(Number));
    expect(empObj.email).toEqual(expect.any(String));
});

test('getName method returns name', () => {
    expect(empObj.getName()).toEqual('Bianca')
});

test('getId method returns Id', () => {
    expect(empObj.getId()).toEqual(22)
});

test('getEmail method returns email', () => {
    expect(empObj.getEmail()).toEqual('bianca.frazier90@gmail.com')
});

test('getRole returns Employee', () => {
    expect(empObj.getRole()).toEqual('Employee')
})




