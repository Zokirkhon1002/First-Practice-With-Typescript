// ENUMS
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}


// with interfaces
interface Resource<T> {
  uid: number;
  resourceType: number;
  data: T;
}

const docThree: Resource<object> = {
  uid:1,
  resourceType: ResourceType.PERSON,
  data: {name:'Zokirkhon'}
}

const docFour: Resource<string[]> = {
  uid:10,
  resourceType: ResourceType.BOOK,
  data: ['shopping','assets']
}

console.log(docThree,docFour)