/* DESCRIPTION
In this kata you are given a string for example:

"example(unwanted thing)example"

Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"
*/

/* MY CODE
const removeParentheses = (s) => s.includes('(') ? removeParentheses(s.replace(/\([^()]*\)/g, '')) : s;
*/