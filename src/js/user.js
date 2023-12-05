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

// HW6 Задание 2. Destructuring
export function extractAttacks({ special }) {
  const extractedAttacks = [];

  for (const attack of special) {
    const { id, name, description = 'Описание недоступно', icon } = attack;
    extractedAttacks.push({ id, name, description, icon });
  }

  return extractedAttacks;
}

