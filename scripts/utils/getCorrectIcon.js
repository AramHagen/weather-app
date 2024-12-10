async function getCorrectIcon(apiData) {
  const iconsData = await fetchIcons();
  if (!iconsData) {
    console.error('Failed to load icons data');
    return;
  }

  const isDay = apiData.icon.includes('/day/');
  const match = iconsData.find((item) => item.code == apiData.code);

  if (match) {
    const correctIcon = isDay ? match.icons[0] : match.icons[1];
    return correctIcon;
  } else {
    console.error('No matching icon found for code:', apiData.condition.code);
    return null;
  }
}
