var expect = require('expect')
var reducers = require('../../redux-playground/reducers/index.jsx')
var df = require('deep-freeze-strict')

describe(
  'AnotherReduxFoo',
  ()=>{
    it(
      'should return the proper state',
      ()=>{
        var action = {
          type: 'MAKE_ACTIVE'
        }

        var res = reducers.activityReducer(df(''), df(action))
        expect(res).toEqual({ isActive: true });
      }
    )
  }
)


