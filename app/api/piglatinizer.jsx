var isConsonant = (letter = "") => {
  // note: ignoring letter 'y'
  return letter.toLowerCase().search(/^[bcdfghjklmnpqrstvwxz]$/) !== -1
    ? true
    : false;
};

// var fixPunctuations = (word) => {
//   var punctuations = []
//   var nonpunctuations = []
//   var punc = ""
//   var c = word.charAt(word.length-1)
//   if (c.match(/[\!\.\,\?\)]/)) {
//   }
//   var res = nonpunctuations.concat(punctuations).join("")
//   return res
// }

var fixPunctuations = word => {
  var punctuations = [];
  var nonpunctuations = [];

  // console.log(word)
  for (var pos = 0, len = word.length; pos < len; pos++) {
    var c = word.charAt(pos);
    var isQuoteAtBeginning = pos === 0 && c.search(/\"/) != -1;

    // if (c.match( /[\!\.\,\?\)\;\"]/ ) && !isQuoteAtBeginning) {
    if (c.match(/[^a-zA-Z0-9]/) && !isQuoteAtBeginning) {
      punctuations.push(c);
    } else {
      nonpunctuations.push(c);
    }
  }
  var res = nonpunctuations.concat(punctuations).join("");
  return res;
};

var firstCharIsUcase = s => {
  return s.charAt(0).toUpperCase() == s.charAt(0);
};

var piglatinify = s => {
  // -- ignore pure numbers
  if (s.search(/^\d+$/) !== -1) {
    return s;
  }
  var lastpos = 0;
  var endswithPunctuation = false;
  var startsWithUpper = false;
  var startsWithSurrounder = false;

  // -- detect if first char is ucase
  if (firstCharIsUcase(s)) {
    startsWithUpper = true;
  }

  if (s.charAt(0).search(/[\"\'\(]/) !== -1) {
    startsWithSurrounder = true;
  }

  for (var i = 0, len = s.length; i < len; i++) {
    var c = s.charAt(i);

    // -- acronyms fix
    if (lastpos == 2 && isConsonant(c)) {
      return s;
    }
    if (startsWithSurrounder) {
      return s;
    }
    if (i == 0 && !isConsonant(c) && !startsWithSurrounder) {
      lastpos++;
      return fixPunctuations(s + "way");
    } else if (isConsonant(c)) {
      lastpos++;
    } else {
      var lastchar = s.charAt(s.length - 1);
      var res = "";
      if (startsWithUpper === true) {
        res =
          s
            .substring(lastpos)
            .charAt(0)
            .toUpperCase() +
          s.substring(lastpos + 1).toLowerCase() +
          s.substring(0, lastpos).toLowerCase() +
          "ay";
        return fixPunctuations(res);
      } else {
        res = s.substring(lastpos) + s.substring(0, lastpos) + "ay";
        return fixPunctuations(res);
      }
    }
  }
};

var punkifySplit = word => {
  var enders = /[\!\.\,\?\;']/;
  var surrounders = /[\']/;
  var nonpunc_r = [];
  var surrounders_r = [];
  var enders_r = [];

  for (var pos = 0, len = word.length; pos < len; pos++) {
    var c = word.charAt(pos);

    var isQuoteAtBeginning = pos === 0 && c.search(/\"/) != -1;

    if (c.match(enders)) {
      enders_r.push(c);
    } else if (c.match(surrounders)) {
    } else {
      nonpunc_r.push(c);
    }
  }
  return { nonpunctuations, punctuations };
};

var punkifyRestore = word => {};

var piglatinizer = (
  input = "",
  options = { ignoreCommon: false, excludeIfWordLength: 2 }
) => {
  var { ignoreCommon, excludeIfWordLength } = options;
  ignoreCommon = ignoreCommon || true;
  excludeIfWordLength = excludeIfWordLength || 2;

  var regexIgnores = "^(the|a|in|of)$";
  var arr = input.split(" ");

  var mapped = arr.map(item => {
    if (
      item.replace(/[\!\.\,\?\)\;]/, "").length <= excludeIfWordLength ||
      (options.ignoreCommon === true && item.match(regexIgnores) != null)
    )
      return item;
    else return piglatinify(item);
  });

  return mapped.join(" ");
};

console.log(piglatinizer("an 'apple' a day!"));

module.exports = piglatinizer;
