/** @type {import('prettier').Config} */
module.exports = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: all,
  endOfLine: "auto",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "^@components/(.*)$",
    "^@lib/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^types$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
};