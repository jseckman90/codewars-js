const XO = (str) => {
  str = str.toLowerCase();
  const characters = str.split("");
  const charO = [];
  const charX = [];

  characters.map((char) => {
    if (char === "x") {
      charX.push(char);
    } else if (char === "o") {
      charO.push(char);
    } else {
      console.log("letter not x or o");
    }
  });

  charX.length === charO.length ? true : false;
};

XO("xoxoxo");
