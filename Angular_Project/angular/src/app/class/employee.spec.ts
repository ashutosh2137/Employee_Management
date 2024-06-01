import { Employee } from './employee';

describe('Employee', () => {
  it('should create an instance', () => {
    const employee = new Employee(1, 'John', 'Doe', 'john.doe@example.com');
    expect(employee).toBeTruthy();
  });
});
