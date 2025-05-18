export function saveHistory(result) {
  const history = JSON.parse(localStorage.getItem('history')) || [];
  const newHistory = [...history, { date: new Date(), result }];
  localStorage.setItem('history', JSON.stringify(newHistory));
}
