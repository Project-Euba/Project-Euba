
// A function that returns a random number in the interval

class EubaUtils {
  static randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

export default EubaUtils;