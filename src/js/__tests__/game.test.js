import {
  sortHeroes
} from "../game"
test("should sort heroes", function () {
  const result = sortHeroes([{
      name: 'мечник',
      health: 10
    },
    {
      name: 'маг',
      health: 100
    },
    {
      name: 'лучник',
      health: 80
    },
  ]);
  expect(result).toEqual([{
      name: 'маг',
      health: 100
    },
    {
      name: 'лучник',
      health: 80
    },
    {
      name: 'мечник',
      health: 10
    },
  ]);
  expect(result).not.toBe([{
      name: 'маг',
      health: 100
    },
    {
      name: 'лучник',
      health: 80
    },
    {
      name: 'мечник',
      health: 10
    },
  ]);
})
