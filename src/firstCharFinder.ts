const firstCharFinder = function (input: string) {
  const map = new Map<string, number>();

  const textNoWhiteSpace = input.replaceAll(" ", "");

  for (let x of textNoWhiteSpace) {
    if (!map.has(x)) {
      map.set(x, 0);
    }
    map.set(x, map.get(x)! + 1);
  }
  for (let x of textNoWhiteSpace) {
    if (map.get(x) === 1) return x;
  }
  return "there is no singel character";
};

export default firstCharFinder;
