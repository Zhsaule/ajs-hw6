// TODO: write your code here
import { orderByProps, extractAttacks } from './user';

console.log('worked');

// Проверка результата HW1:
const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

const result = orderByProps(obj, ['name', 'level']);
console.log(result);

// Проверка результата HW2:
const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
      }
    ]
  };

const extractedAttacks = extractAttacks(character);
console.log(extractedAttacks);


