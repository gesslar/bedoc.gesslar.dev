import uglify from "@gesslar/uglier"
import mdx from 'eslint-plugin-mdx';

export default [
  ...uglify({
    with: [

      "lints-jsdoc", // default files: ["**/*.{js,mjs,cjs}"
      "react", // default files: ["src/**/*.{js,jsx,mjs,cjs}"]
      "node" // default files: ["**/*.{js,mjs,cjs}"]
    ],
    overrides: {
      "lints-js": "src/**/*.{cj}?js",
      "lints-jsdoc": "src/**/*.{cj}?js",
      "node": "src/**/*.{cj}?js"
    }
  }),
    {
    files: ["**/*.md", "**/*.mdx"],
    plugins: {
      mdx
    },
    processor: mdx.createRemarkProcessor({
      // Configure remark plugins here
    }),
    rules: {
      "react/jsx-no-undef": "off", // Example: turn off specific JSX rules
      ...mdx.configs.recommended.rules
    }
  }
]
