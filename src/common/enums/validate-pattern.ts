export const VALIDATE_PATTERN = {
  number: /^\d*$/,
  alphabet: /^(?!-)(?!.*--)[A-Za-zÀ-ÿĀ-žƀ-ƶǍ-ǰȀ-ȳẽṅỹ\s-]*$/,
  alphabetWithSpecial: /^(?!.* {2})[A-Za-zÀ-ÖØ-öø-ÿĀ-žƀ-ƶǍ-ǰȀ-ȳẽẼṅṄǹǸẏẎ@#$%^&*()_+\-={}|\\:;"'<>,.?/!`~ ]*$/,
  alphaNumericSpecialWithSpace: /^(?!.* {2})[A-Za-zÀ-ÖØ-öø-ÿĀ-žƀ-ƶǍ-ǰȀ-ȳẽẼṅṄǹǸẏẎ@#$%^&*()_+\-={}|\\:;"'<>,.?/!`~0-9 ]*$/,
};
