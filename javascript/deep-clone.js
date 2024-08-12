/**
 * Creates a deep copy of the arg. Remember that the arg can be nested with infinite levels.
 * Use case: List copy. Object copy.
 *
 * @param {JSON serializable value} arg Any JSON serializable value
 *
 * @returns An Literal exact copy of the arg
 */

function deepClone (obj){
  const cloned = {}
  Object.entries(obj).map((entry) => {
    let key = entry[0]
    let value = entry[1]
    console.log(typeof value)
    if( typeof value === 'object'){
      cloned[key] = deepClone({...value})
    } else {
      cloned[key] = value
    }
  })
  return cloned
}
const original ={
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    postalCode: "10001",
    country: {
      name: "USA",
      code: "US"
    }
  },
  hobbies: [{text: "reading", option:{test2: 'test2'}}, "traveling"],
  contact: {
    phone: "123-456-7890",
    email: "john@example.com",
    social: {
      twitter: "@johnDoe",
      facebook: "facebook.com/johnDoe",
      linkedIn: "linkedin.com/in/johnDoe"
    }
  }
}
const copy = deepClone(original)
copy.name = 'jack'
copy.contact.phone = '222-222-2222'
copy.contact.social.twitter= '@jack123'

console.log(copy)
console.log(original)