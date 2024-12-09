describe('getCorrectIcon', () => {
  let mockFetchIcons;

  beforeEach(() => {
    // Mock fetchIcons function
    mockFetchIcons = jasmine.createSpy('fetchIcons').and.callFake(() => {
      return Promise.resolve([
        {
          code: 1003,
          text: 'Partly cloudy',
          iconCode: 116,
          icons: ['./assets/icons/day/116.svg', './assets/icons/night/116.svg'],
        },
        {
          code: 1006,
          text: 'Cloudy',
          iconCode: 119,
          icons: ['./assets/icons/day/119.svg', './assets/icons/night/119.svg'],
        },
      ]);
    });

    window.fetchIcons = mockFetchIcons;
  });

  it('should return the correct day icon', async () => {
    const apiData = { icon: '/day/', code: 1003 };
    const icon = await getCorrectIcon(apiData);
    expect(icon).toBe('./assets/icons/day/116.svg');
  });

  it('should return the correct night icon', async () => {
    const apiData = { icon: '/night/', code: 1006 };
    const icon = await getCorrectIcon(apiData);
    expect(icon).toBe('./assets/icons/night/119.svg');
  });
});
