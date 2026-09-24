import { Customer } from '../customer.entity';

test('deve criar um cliente', () => {
  const customer = Customer.create({
    name: 'John Doe',
    cpf: '45735327062',
  });

  expect(customer.name).toBe('John Doe');
  expect(customer.cpf.value).toBe('45735327062');
});
