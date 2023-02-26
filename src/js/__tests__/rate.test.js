import rateParticipant from '../main/rate';

test('rateParticipant test', () => {
  const result = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const array = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const received = rateParticipant(array);

  expect(received).toEqual(result);
});
