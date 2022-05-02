export const getTime = (time) => {
  if (time) {
    if (time.length === 15) {
      return time.slice(-5);
    } else {
      return time.slice(-6);
    }
  }
};

export const getTranslationForCondition = (condition) => {
  if (condition) {
    const text = condition.split(" ");
    let counter = 0;
    let words = text.map((word) => {
      if (counter === 0) {
        counter++;
        return word.toLowerCase();
      } else {
        counter++;
        return word[0].toUpperCase() + word.slice(1);
      }
    });
    return words.join("");
  }
};

export const getTranslationForMoonPhase = (moonPhase) => {
  if (moonPhase) {
    const text = moonPhase.split(" ");
    let counter = 0;
    let words = text.map((word) => {
      if (counter === 0) {
        counter++;
        return word.toLowerCase();
      } else {
        counter++;
        return word[0].toUpperCase() + word.slice(1);
      }
    });
    return words.join("");
  }
};
