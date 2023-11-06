import { faker } from '@faker-js/faker';

import { AccountMovement } from './account-movement.model';

export const generateAccountMovement = (): AccountMovement => ({
  id: faker.string.uuid(),
  date: faker.date.past(),
  amount: Number(faker.finance.amount({ min: -1000000, max: 1000000 })),
  description: faker.finance.transactionDescription(),
});

export const generateManyAccountMovements = (quantity: number): AccountMovement[] => {
    let accountMovements: AccountMovement[] = [];
    for (let index = 0; index < quantity; index++) {
        accountMovements.push(generateAccountMovement())
    }
    return accountMovements;
}
