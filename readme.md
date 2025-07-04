# is-pw-match

Password Match Percentage Library

A lightweight utility to calculate the similarity percentage between two strings (like passwords) with support for both Node.js and React environments.

---

# Features:

- Calculate percentage match between any two strings
- Optional React component for UI integration
- Works in Node.js, browsers, and React apps
- Configurable options (case sensitivity, minimum length)
- Based on Levenshtein distance algorithm
- Zero dependencies

# Installation:

```bash
npm install password-match-percent
# or
yarn add password-match-percent
```

# Basic Usage:

## In Node.js/Express:

```bash const { matchPercent } = require('password-match-percent');
const similarity = matchPercent('password123', 'Password123!');
console.log(`Match: ${similarity}%`);
```

## In React:

```bash import { matchPercent } from 'password-match-percent';
function PasswordMatch({ password, confirmPassword }) {
const percent = matchPercent(password, confirmPassword);
return <div>Password match: {percent}%</div>;
}
```

## Using the React Component:

```bash
import PasswordMatcher from 'password-match-percent/react';
function PasswordForm() {
const [pass1, setPass1] = useState('');
const [pass2, setPass2] = useState('');
return (

<div>
<input type="password" value={pass1} onChange={(e) => setPass1(e.target.value)} />
<input type="password" value={pass2} onChange={(e) => setPass2(e.target.value)} />
<PasswordMatcher str1={pass1} str2={pass2} as="div" />
</div>
);
}
```

# API Reference:

```bash
matchPercent(str1, str2, [options])
```

Calculates the percentage match between two strings.

## Parameters:

- str1 (string): First string to compare
- str2 (string): Second string to compare
- options (object, optional):
  - caseSensitive (boolean): Default false
  - minLength (number): Minimum length to consider (default 0)

Returns: Number between 0-100 representing match percentage

React Component: PasswordMatcher
Props:

- str1 (string): First string
- str2 (string): Second string
- options (object): Same as matchPercent options
- as (React.ElementType): Component to render (default 'div')
- children (function): Render prop (percent) => ReactNode

Advanced Usage:

## With Custom Thresholds:

```bash
const percent = matchPercent(userInput, storedPassword);
if (percent > 90) {
console.log('Almost identical');
} else if (percent > 70) {
console.log('Close match');
} else {
console.log('Not similar');
}
```

## With Minimum Length Requirement:

```bash
const percent = matchPercent(pw1, pw2, { minLength: 8 });
```

## ase Sensitive Comparison:

```bash
const percent = matchPercent(str1, str2, { caseSensitive: true });
```
