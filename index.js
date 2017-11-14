"use strict";

module.exports = {
  plugins: ['mocha'],
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  rules: {
    // Reference: http://eslint.org/docs/rules/
    // Value of 0: rule not enforced, 1: rule generates warning, 2: rules generates error

    // Enforces indentation of 2 and also applies for switch cases
    "indent": [2, 2, { "SwitchCase": 1 }],
    // Eforces consistent spacing inside array brackets.
    "array-bracket-spacing": [2, "never"],
    // Enforces consistent spacing inside single-line blocks
    "block-spacing": 2,
    // Enforce consistent spacing before and after commas
    "comma-spacing": [2, { "before": false, "after": true }],
    // Enforce consistent comma style with comma last
    "comma-style": [2, "last"],
    // Enforce consistent spacing inside computed property brackets
    "computed-property-spacing": [2, "never"],
    // Require or disallow spacing between function identifiers and their invocations
    "func-call-spacing": [2, "never"],
    // Enforce consistent spacing between keys and values in object literal properties
    "key-spacing": 2,
    // Disallow if statements as the only statement in else blocks
    "no-lonely-if": 2,
    // Enforce consistent spacing inside braces
    "object-curly-spacing": [2, "never"],
    // Require quotes around object literal property names
    "quote-props": [2, "as-needed"],
    // Enforce the consistent use of either backticks, double, or single quotes
    "quotes": [2, "single"],
    // Enforce consistent spacing before and after semicolons
    "semi-spacing": 2,

    // .only test throws an error
    "mocha/no-exclusive-tests": 2,
    //enforce semicolons
    "semi" : 2,

    // No global (undefined) variables. We disable this rule because Sails.js uses globals all over the place.
    "no-undef": 0,
    // Enforces getter/setter pairs in objects
    "accessor-pairs": 0,
    // specify the maximum cyclomatic complexity allowed in a program
    "complexity": 1,
    // require return statements to either always or never specify values
    "consistent-return": 0,
    // specify curly brace conventions for all control statements
    "curly": [2, "all"],
    // require default case in switch statements
    "default-case": 2,
    // enforces consistent newlines before or after dots
    "dot-location": 0,
    // encourages use of dot notation whenever possible
    "dot-notation": [2, { "allowKeywords": true }],
    // require the use of === and !==
    "eqeqeq": 2,
    // make sure for-in loops have an if statement
    "guard-for-in": 0,
    // disallow the use of alert, confirm, and prompt
    "no-alert": 2,
    // disallow use of arguments.caller or arguments.callee
    "no-caller": 2,
    // disallow lexical declarations in case clauses
    "no-case-declarations": 2,
    // disallow division operators explicitly at beginning of regular expression
    "no-div-regex": 0,
    // disallow else after a return in an if
    "no-else-return": 2,
    // disallow use of empty destructuring patterns
    "no-empty-pattern": 2,
    // disallow comparisons to null without a type-checking operator
    "no-eq-null": 2,
    // disallow use of eval()
    "no-eval": 2,
    // disallow adding to native types
    "no-extend-native": 2,
    // disallow unnecessary function binding
    "no-extra-bind": 2,
    // disallow fallthrough of case statements
    "no-fallthrough": 2,
    // disallow the use of leading or trailing decimal points in numeric literals
    "no-floating-decimal": 2,
    // disallow the type conversions with shorter notations,
    // only allow boolean such as const boolVar = !!stringVar
    "no-implicit-coercion": [2, { "boolean": false }],
    // disallow use of eval()-like methods
    "no-implied-eval": 2,
    // disallow this keywords outside of classes or class-like objects
    "no-invalid-this": 0,
    // disallow usage of __iterator__ property
    "no-iterator": 2,
    // disallow use of labeled statements
    "no-labels": 2,
    // disallow unnecessary nested blocks
    "no-lone-blocks": 2,
    // disallow creation of functions within loops
    "no-loop-func": 2,
    // disallow the use of magic numbers
    "no-magic-numbers": 0,
    // disallow use of multiple spaces
    "no-multi-spaces": 2,
    // disallow use of multiline strings
    "no-multi-str": 2,
    // disallow reassignments of native objects
    "no-native-reassign": 2,
    // disallow use of new operator for Function object
    "no-new-func": 2,
    // disallows creating new instances of String,Number, and Boolean
    "no-new-wrappers": 2,
    // disallow use of new operator when not part of the assignment or comparison
    "no-new": 2,
    // disallow use of octal escape sequences in string literals, such as
    // var foo = "Copyright \251";
    "no-octal-escape": 2,
    // disallow use of (old style) octal literals
    "no-octal": 2,
    // disallow reassignment of function parameters
    "no-param-reassign": 0,
    // disallow use of process.env
    "no-process-env": 0,
    // disallow usage of __proto__ property
    "no-proto": 2,
    // disallow declaring the same variable more then once
    "no-redeclare": 2,
    // disallow use of assignment in return statement
    "no-return-assign": 2,
    // disallow use of `javascript:` urls.
    "no-script-url": 2,
    // disallow comparisons where both sides are exactly the same
    "no-self-compare": 2,
    // disallow use of comma operator
    "no-sequences": 2,
    // restrict what can be thrown as an exception
    "no-throw-literal": 2,
    // disallow usage of expressions in statement position
    "no-unused-expressions": 2,
    // disallow unnecessary .call() and .apply()
    "no-useless-call": 2,
    // disallow unnecessary concatenation of literals or template literals
    "no-useless-concat": 2,
    // disallow use of void operator
    "no-void": 2,
    // disallow usage of configurable warning terms in comments: e.g. todo
    "no-warning-comments": 0,
    // disallow use of the with statement
    "no-with": 2,
    // require use of the second argument for parseInt()
    "radix": 0,
    // requires to declare all vars on top of their containing scope
    "vars-on-top": 0,
    // require immediate function invocation to be wrapped in parentheses
    "wrap-iife": 0,
    // require or disallow Yoda conditions
    "yoda": [2, "never"],
    // disallow trailing commas in object literals
    "comma-dangle": [2, "never"],
    // disallow assignment in conditional expressions
    "no-cond-assign": 2,
    // disallow use of console
    "no-console": 1,
    // disallow use of constant expressions in conditions
    "no-constant-condition": 2,
    // disallow control characters in regular expressions
    "no-control-regex": 2,
    // disallow use of debugger
    "no-debugger": 2,
    // disallow duplicate arguments in functions
    "no-dupe-args": 2,
    // disallow duplicate keys when creating object literals
    "no-dupe-keys": 2,
    // disallow a duplicate case label.
    "no-duplicate-case": 2,
    // disallow the use of empty character classes in regular expressions
    "no-empty-character-class": 2,
    // disallow empty statements
    "no-empty": 2,
    // disallow assigning to the exception in a catch block
    "no-ex-assign": 2,
    // disallow double-negation boolean casts in a boolean context
    "no-extra-boolean-cast": 2,
    // disallow unnecessary parentheses
    "no-extra-parens": [2, "functions"],
    // disallow unnecessary semicolons
    "no-extra-semi": 2,
    // disallow overwriting functions written as function declarations
    "no-func-assign": 2,
    // disallow function or variable declarations in nested blocks
    "no-inner-declarations": [2, "functions"],
    // disallow invalid regular expression strings in the RegExp constructor
    "no-invalid-regexp": 2,
    // disallow irregular whitespace outside of strings and comments
    "no-irregular-whitespace": 2,
    // disallow negation of the left operand of an in expression
    "no-negated-in-lhs": 2,
    // disallow the use of object properties of the global object (Math and JSON) as functions
    "no-obj-calls": 2,
    // disallow multiple spaces in a regular expression literal
    "no-regex-spaces": 2,
    // disallow sparse arrays
    "no-sparse-arrays": 2,
    // Avoid code that looks like two expressions but is actually one
    "no-unexpected-multiline": 2,
    // disallow unreachable statements after a return, throw, continue, or break statement
    "no-unreachable": 2,
    // disallow comparisons with the value NaN
    "use-isnan": 2,
    // ensure JSDoc comments are valid
    "valid-jsdoc": 0,
    // ensure that the results of typeof are compared against a valid string
    "valid-typeof": 2,
    // require braces in arrow function body
    "arrow-body-style": 0,
    // require parens in arrow function arguments
    "arrow-parens": 0,
    // require space before/after arrow function's arrow
    "arrow-spacing": 2,
    // verify super() callings in constructors
    "constructor-super": 2,
    // enforce the spacing around the * in generator functions
    "generator-star-spacing": 2,
    // disallow modifying variables of class declarations
    "no-class-assign": 2,
    // disallow modifying variables that are declared using const
    "no-const-assign": 2,
    // disallow duplicate name in class members
    "no-dupe-class-members": 2,
    // disallow to use this/super before super() calling in constructors.
    "no-this-before-super": 2,
    // require let or const instead of var
    "no-var": 2,
    // require method and property shorthand syntax for object literals
    "object-shorthand": [0, "properties"],
    // suggest using arrow functions as callbacks
    "prefer-arrow-callback": 0,
    // suggest using of const declaration for variables that are never modified after declared
    "prefer-const": 2,
    // suggest using Reflect methods where applicable
    "prefer-reflect": 0,
    // suggest using the spread operator instead of .apply()
    "prefer-spread": 1,
    // suggest using template literals instead of strings concatenation
    "prefer-template": 0,
    // disallow generator functions that do not have yield
    "require-yield": 2,
    // enforce return after a callback
    "callback-return": 2,
    // disallow require() outside of the top-level module scope
    "global-require": 2,
    // enforces error handling in callbacks (node environment)
    "handle-callback-err": 2,
    // disallow mixing regular variable and require declarations
    "no-mixed-requires": 0,
    // disallow use of new operator with the require function
    "no-new-require": 2,
    // disallow string concatenation with __dirname and __filename
    "no-path-concat": 0,
    // disallow process.exit()
    "no-process-exit": 0,
    // restrict usage of specified node modules
    "no-restricted-modules": 0,
    // disallow use of synchronous methods (off by default)
    "no-sync": 0
  }
}
