import {calculateYear} from '../'


describe('calculateYear Utils', () => {
  it('should calculateYear -7-9-1989', () => {
    expect(
      calculateYear("7-9-1989")
    ).toEqual(28)
  })


  it('should calculateYear - 5-30-1989', () => {
    expect(
      calculateYear("5-30-1989")
    ).toEqual(29)
  })

})