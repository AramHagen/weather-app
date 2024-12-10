describe('getDayAbbreviation', () => {
  it('should return the correct day abbreviation for a given date', () => {
    const result = getDayAbbreviation('2024-12-09');
    expect(result).toBe('MON');
  });
});
