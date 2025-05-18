export function checkAnswers(userAnswers, correctFirst, correctSecond) {
  const correctAnswer = '✔️ Правильный ответ!';
  const incorrectAnswer = '❌ Неправильный ответ.';

  return {
    firstQuestion: userAnswers.firstQuestion
      ? {
          userAnswers: userAnswers.firstQuestion,
          isCorrect:
            userAnswers.firstQuestion === correctFirst
              ? correctAnswer
              : incorrectAnswer,
          name: 'firstQuestion',
        }
      : null,
    secondQuestion: userAnswers.secondQuestion?.length
      ? {
          userAnswers: userAnswers.secondQuestion,
          isCorrect: userAnswers.secondQuestion?.reduce((acc, el) => {
            acc[el] = correctSecond.includes(el)
              ? correctAnswer
              : incorrectAnswer;
            return acc;
          }, {}),
          name: 'secondQuestion',
        }
      : null,
  };
}
