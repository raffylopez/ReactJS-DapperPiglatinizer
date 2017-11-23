var expect = require('expect')
var uuid = require('uuid')
var reducers = require('../../reducers/reducers.jsx')
var deepFreezeStrict = require('deep-freeze-strict')

describe(
  'ReducersTests',
  ()=>{
    it(
      'should foobar',
      ()=>{
        var uuid_id = uuid() 
        var action = {
          type: 'ADD_TODO',
          todo: {
            id: uuid_id,
            text: "ganymede"
          }
        }
        var res = reducers.todosReducer(deepFreezeStrict([]), deepFreezeStrict(action))
        expect(1).toBe(1)
        // console.log('ASDFSDF' + res)
        expect(res[0].text).toEqual("ganymede");
      }
    )
  }
)
