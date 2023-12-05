// HW6 Задание 1. for ... in
export function orderByProps(obj, order) {
  const orderedProps = [];
  const unorderedProps = [];

  for (const prop in obj) {
    if (order.includes(prop)) {
      orderedProps.push({ key: prop, value: obj[prop] });
    } else {
      unorderedProps.push({ key: prop, value: obj[prop] });
    }
  }

  orderedProps.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));
  unorderedProps.sort((a, b) => a.key.localeCompare(b.key));

  return orderedProps.concat(unorderedProps);
}

// Проверка результата:
const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

const result = orderByProps(obj, ['name', 'level']);
console.log(result);


// HW6 Задание 2. Destructuring
export function extractAttacks({ special }) {
  const extractedAttacks = [];

  for (const attack of special) {
    const { id, name, description = 'Описание недоступно', icon } = attack;
    extractedAttacks.push({ id, name, description, icon });
  }

  return extractedAttacks;
}

// Проверка результата:
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

