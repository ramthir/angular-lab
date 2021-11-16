describe('merge arrays', () => {
  const first = ['🍎', '🍌', '🍓'];
  const second = ['🍍', '🍐', '🍋'];

  function assert(value: string | any[]) {
    expect(value.length).toBe(6);
    expect(value[0]).toBe('🍎');
    expect(value[value.length - 1]).toBe('🍋');
  }

  it('spread', () => {
    const merged = [...first, ...second];

    assert(merged);
  });

  it('concat', () => {
    // doing `first.concat(second)` will mutate the `first` array, so
    // preferred is to use contact on empty array.
    const merged = [].concat(first, second);

    assert(merged);
  });

  it('push', () => {
    const merged = [];
    merged.push(...first, ...second);

    assert(merged);
  });

  it('loop', () => {
    const merged: string[] = [];

    first.forEach(item => merged.push(item));
    second.forEach(item => merged.push(item));

    assert(merged);
  });

  it('reduce', () => {
    const merged = second.reduce((result, item) => {
      result.push(item);
      return result;
    }, first);

    assert(merged);
  });
});
