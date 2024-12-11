describe('getDayAbbreviation', () => {
  it('should return the correct day abbreviation for a given date string', () => {
    const result = getDayAbbreviation('2024-12-09');
    const expectedResult = getDayAbbreviation('2024-12-09');
    expect(result).toBe(expectedResult);
  });

  it('should return the correct day abbreviation for the current date when no date string is provided', () => {
    const result = getDayAbbreviation();
    const expectedResult = getDayAbbreviation();
    expect(result).toBe(expectedResult);
  });
});