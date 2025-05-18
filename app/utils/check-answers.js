export function checkAnswers(userAnswers, correctFirst, correctSecond) {
  const correctAnswer = '✔️ Правильный ответ!';
  const incorrectAnswer = '❌ Неправильный ответ.';

  return {
    firstQuestion: {
      userAnswers: userAnswers.firstQuestion,
      isCorrect:
        userAnswers.firstQuestion === correctFirst
          ? correctAnswer
          : incorrectAnswer,
    },
    secondQuestion: {
      userAnswers: userAnswers.secondQuestion,
      isCorrect: userAnswers.secondQuestion?.reduce((acc, el) => {
        acc[el] = correctSecond.includes(el) ? correctAnswer : incorrectAnswer;
        return acc;
      }, {}),
    },
  };
}
