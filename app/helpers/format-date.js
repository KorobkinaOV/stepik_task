import { helper } from '@ember/component/helper';

export default helper(function formatDate([date]) {
  if (!date) {
    return 'Н/Д';
  }

  try {
    const parsedDate = new Date(date);

    if (isNaN(parsedDate)) {
      return 'Неверная дата';
    }

    return parsedDate.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch (e) {
    return 'Ошибка даты';
  }
});
