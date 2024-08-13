/**
 *
 * This function will get 2 objects and returns the changes in the format provided at the end of the file.
 * Use case: Git file diff
 *
 * @param {object} oldObject
 * @param {object} newObject
 *
 * @returns diff object.
 */
function jsonDiff(oldObject, newObject) {
  // TODO: Implement here
  const res = {}
  Object.keys(newObject).forEach(item => {
    if (oldObject[item] && newObject[item] !== oldObject[item]) {
      res[item] = {
        type: "modified",
        oldValue: oldObject[item],
        newValue: newObject[item]
      }
      delete oldObject[item]
    }
    else if( oldObject[item] && newObject[item] === oldObject[item]) delete oldObject[item]
    else if (!oldObject[item]) {
      res[item] = {
        type: "added",
        newValue: newObject[item]
      }
    }
  })
  Object.keys(oldObject).map(item => res[item] = {
    type: "removed",
    oldValue: oldObject[item]
  })
  return res
}
const old = {
  prop1: 1,
  prop2: 2,
  prop3: 3,
  prop4: 4
}
const newObj = {
  prop1: 1,
  prop2: 22,
  prop5: 5
}
console.log(jsonDiff(old, newObj))
// {
//     "key1": {
//         "type": "modified",
//         "oldValue": "old value",
//         "newValue": "new value"
//     },
//     "key 2": {
//         "type": "added",
//         "newValue": "new value"
//     },
//     "key 3": {
//         "type": "removed",
//         "oldValue": "old value"
//     },
//     ...
// }
