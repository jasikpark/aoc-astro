export const attempt2 = (input: string) => {
  return input
    .split("\n")
    .map((line) => line.split(" "))
    .map(([them, me]) => {
      console.log("lol");
    })
    .reduce((sum, [them, me]) => {
      let round = 0;

      if (me === "X") {
        round += 1;
      }

      if (me === "Y") {
        round += 2;
      }

      if (me === "Z") {
        round += 3;
      }

      if (them === me) {
        round += 3;
        return round;
      }
    }, 0);
};
