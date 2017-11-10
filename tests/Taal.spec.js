describe('Taal...', function () {
  
  it('given user input 1231231234, (000)000-0000, should mask 1231231234 into (123)123-1234', function () {
    let maskingResult = Taal('1231231234', '(000)000-0000');
    expect(maskingResult.hasError).toEqual(false);
    expect(maskingResult.errorMessage).toEqual('');
    expect(maskingResult.result).toEqual('(123)123-1234');
  });
  
  it('given user input 12312341234, (000)000-0000, Should not mask 12312341234 into (123)123-1234', function () {
    let maskingResult = Taal('12312341234', '(000)000-0000');
    expect(maskingResult.hasError).toEqual(true);
    expect(maskingResult.errorMessage).toEqual('your input length is not compatible with given mask');
    expect(maskingResult.result).toEqual('');
  });
  
  it('given user input 12312017, 00/00/0000, should mask 12312017 into 12/31/2017', function () {
    let maskingResult = Taal('12312017', '00/00/0000');
    expect(maskingResult.hasError).toEqual(false);
    expect(maskingResult.errorMessage).toEqual('');
    expect(maskingResult.result).toEqual('12/31/2017');
  });
  
  it('given user input 123120178, 00/00/0000, should mask 12312017 into 12/31/2017', function () {
    let maskingResult = Taal('123120178', '00/00/0000');
    expect(maskingResult.hasError).toEqual(true);
    expect(maskingResult.errorMessage).toEqual('your input length is not compatible with given mask');
    expect(maskingResult.result).toEqual('');
  });
  
  it('given user input "", 00/00/0000, should mask 12312017 into 12/31/2017', function () {
    let maskingResult = Taal('', '00/00/0000');
    expect(maskingResult.hasError).toEqual(true);
    expect(maskingResult.errorMessage).toEqual('your input length is not compatible with given mask');
    expect(maskingResult.result).toEqual('');
  });

  it('given user input AA13BB12, 00/00/0000, should mask AA13BB12 into AA/13/BB12', function () {
    let maskingResult = Taal('AA13BB12', '00/00/0000');
    expect(maskingResult.hasError).toEqual(false);
    expect(maskingResult.errorMessage).toEqual('');
    expect(maskingResult.result).toEqual('AA/13/BB12');
  });

});