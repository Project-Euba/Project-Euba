class EubaUtils {
  // A function that returns a random integer in the given min/max range
  static randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

export default EubaUtils;