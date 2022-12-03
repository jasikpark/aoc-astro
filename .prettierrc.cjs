/** @type {import('prettier.Options')} */
module.exports = {
  proseWrap: "always",
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
