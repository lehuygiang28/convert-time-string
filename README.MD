# convert-time-string

The JavaScript/TypeScript library that convert time string to seconds or milliseconds.

## Installation:

Install `convert-time-string` using npm:

```sh
npm install convert-time-string
```

Install `convert-time-string` using yarn:

```sh
yarn add convert-time-string
```

Install `convert-time-string` using pnpm:

```sh
pnpm add convert-time-string
```

## Usage

The `convertTimeString` function takes a time string as input and returns the corresponding number of milliseconds. The time string can be in the format of a single time unit (e.g. "1h") or multiple time units separated by spaces or without spaces (e.g. "1h 30m" or "1h30m").

```typescript
// in CommonJS
const { convertTimeString } = require('convert-time-string');

// or in ES module
import { convertTimeString } from 'convert-time-string';
```

Parameters:

```typescript
import { TimeUnitOutPut } from 'convert-time-string';

convertTimeString(timeString: string, unitOutPut?: TimeUnitOutPut | string, leapYear?: boolean): number;
```

-   `timeString`: The time string to convert.
    ```typescript
    const timeString = '1h 30m';
    const timeValue = convertTimeString(timeString);
    console.log(timeValue); // Output: 5400000
    ```
-   `unitOutPut`: The time unit to convert to. Can be "second" or "millisecond". Default is "millisecond".
Hint: You can use the `TimeUnitOutPut` enum to avoid typo.

    ```typescript
    const timeString = '1h 30m';
    const timeValue = convertTimeString(timeString, 'millisecond'); // default is "millisecond"
    console.log(timeValue); // Output: 5400000

    const timeValue = convertTimeString(timeString, 'second');
    console.log(timeValue); // Output: 5400
    ```

-   `leapYear`: Whether to consider leap year when converting to "y" (years). Default is false.

    ```typescript
    const timeString = '1y';
    const timeValue = convertTimeString(timeString, 'second', false); // default is false
    console.log(timeValue); // Output: 31536000000

    const timeValue = convertTimeString(timeString, 'second', true);
    console.log(timeValue); // Output: 31622400000
    ```

## Contribution

<a href="https://github.com/lehuygiang28/convert-time-string/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=lehuygiang28/convert-time-string" />
</a>
