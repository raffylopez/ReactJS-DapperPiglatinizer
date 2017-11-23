var expect = require('expect')
var actions = require('../../../redux-playground/actions')

describe(
  'Actions',
  ()=>{
    var action = {
      type: 'DO_SOMETHING'
    }

    it(
      'should generate proper action foo',
      ()=>{
        var res = actions.doSomething()
        expect(res).toEqual(action)
      }
    )
  }
)



