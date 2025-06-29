const codeIcon = {
  0: require("@/assets/weather/sunny.svg"),
  1: require("@/assets/weather/suncloud.svg"),
  2: require("@/assets/weather/suncloud.svg"),
  3: require("@/assets/weather/cloudy.svg"),
  61: require("@/assets/weather/rain.svg"),
  63: require("@/assets/weather/rain.svg"),
  65: require("@/assets/weather/rain.svg"),
  95: require("@/assets/weather/thunder.svg"),
  96: require("@/assets/weather/thunder.svg"),
};
export function mapWeatherCodeToIcon(code) {
  return codeIcon[code];
}
