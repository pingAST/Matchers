import sortHeroesByHealth from '../heroSorter';

describe('sortHeroesByHealth', () => {
  test('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const sortedHeroes = sortHeroesByHealth(heroes);


    expect(sortedHeroes).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);


    expect(sortedHeroes).not.toBe(heroes);
    expect(sortedHeroes).not.toBe([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });

  test('should handle an empty array', () => {
    expect(sortHeroesByHealth([])).toEqual([]);
  });

  test('should handle a single hero', () => {
    const singleHero = [{ name: 'маг', health: 100 }];
    expect(sortHeroesByHealth(singleHero)).toEqual(singleHero);
  });

  test('should sort heroes with the same health', () => {
    const heroes = [
      { name: 'мечник', health: 50 },
      { name: 'маг', health: 50 },
      { name: 'лучник', health: 50 },
    ];
    expect(sortHeroesByHealth(heroes)).toEqual(heroes);
  });
});
