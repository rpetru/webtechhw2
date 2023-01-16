function addTokens(input, tokens) {
  if (typeof input !== "string") {
    throw new Error("Invalid input");
  }
  if (input.length < 6) {
    throw new Error("Input should have at least 6 characters");
  }
  if (
    !Array.isArray(tokens) ||
    !tokens.every(
      (token) =>
        typeof token === "object" && typeof token.tokenName === "string"
    )
  ) {
    throw new Error("Invalid array format");
  }
  if (input.includes("...")) {
    for (let i = 0; i < tokens.length; i++) {
      input = input.replace("...", "${" + tokens[i].tokenName + "}");
    }
  }
  return input;
}

const app = {
  addTokens: addTokens,
};

module.exports = app;
