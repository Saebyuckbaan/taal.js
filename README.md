## Taal.js
탈(Taal) means a mask in Korean. Taal.js is a basic and simple input masking helper. This does not have any framework dependency.


## Usage
- You can import by just simply add Taal.js file into your project. 
- Taal( userInput, maskPattern ) will return an object with three keys.

Example
``` javascript
/*
* You have to use 0s in your mask pattern in order to replace 0 into your input.
* User input must be in string
*/

Taal( '6503213323', '(000)000-0000') // this will return { hasError: false, errorMessage: '', result: '(650)321-3323'}
Taal( '65032133233', '(000)000-0000') // this will return { hasError: true, errorMessage: 'your input length is not compatible with given mask', result: ''}
Taal( '12211990', '00/00/0000') // this will return { hasError: false, errorMessage: '', result: '12/21/1990'}
```

##### UPDATE LOG
##### 11/10/2017
- Entry point change for require or import statement
- Export default function added (Bug fix)

##### 11/9/2017
- Karma issue fixed.
- Minor edge case has handled

##### 11/4/2017 
- Project initiated and test spec has created.
- Basic functionality has been created
- Has issue with Karma testing


