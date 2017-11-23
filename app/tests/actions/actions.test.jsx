var expect = require('expect')
var actions = require('../../actions/actions.jsx')

describe(
  'Actions',
  ()=>{
    it(
      'should yield correct retvalue',
      ()=>{
        var objekt = {
          type: 'CHANGE_COLOR',
          color: "blue"
        }
        var res = actions.changeColor(objekt.color)
        expect(res).toEqual(objekt)
      }
    )
    it(
      'should ...description...',
      ()=>{
        // .. code
        expect(1).toEqual(1);
      }
    ) 
  }
)
