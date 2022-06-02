import charactersSort from '../app';

const characters = [
  { name: 'Мечник', health: 10 },
  { name: 'Маг', health: 100 },
  { name: 'Лучник', health: 80 },
];

test('sort characters by health', () => {
  const exp = [
    { name: 'Маг', health: 100 },
    { name: 'Лучник', health: 80 },
    { name: 'Мечник', health: 10 },
  ];
  expect(charactersSort(characters)).toEqual(exp);
});
