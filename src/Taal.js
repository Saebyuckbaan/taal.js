/**
 * Author: Davis Yi
 * Created Date : 11 / 4 / 2017
 * Description : Taal.js is simple input masking helper function.
 */
'use strict';

const Taal = ( input, maskingTemplate ) => {
  //seperate masking string into string
  let subStrStartIndex = 0,
  hasError = false,  
  errorMessage = '',
  result = '';

  //throw error is user does not pass input
  if ( typeof input === 'undefined' ) {
    hasError = true;
    errorMessage = 'input value and masking template is required';
  }
  //throw error if user passed input but no masking template
  else if ( typeof maskingTemplate === 'undefined' ) {
    hasError = true;
    errorMessage = 'Masking template is missing';
  }
  //number of 0s in mask must matches to user input.
  else if ( maskingTemplate.match(/([\w\d]+)/g).join('').length !== input.length ) {
    hasError = true;
    errorMessage = 'your input length is not compatible with given mask';
  }

  if ( !hasError ) {
    //replace 0s with the user input and consolidate result.
    result =  maskingTemplate.match(/([^\w\d]+)|([\w\d]+)/g).map( ( element ) => {
      //result can be substring from user input or the special characters
      let result = element;

      // if current element inside of mask is not a special character
      if( element.match(/([\w\d]+)/g) ) {

        // get ending index of substring
        let subStrEndIndex = subStrStartIndex + element.length;

        //slide out substring from the user input 
        result = input.slice( subStrStartIndex, subStrEndIndex );

        //update start index of next substring
        subStrStartIndex = subStrEndIndex;
      }

      //return the value
      return result;

    }).join("");
  }
  
  return {
    hasError: hasError,
    errorMessage: errorMessage,
    result: result
  };
};