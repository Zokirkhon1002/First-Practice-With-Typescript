// with interfaces
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
  }
  
  const docThree: Resource<object> = {
    uid:1,
    resourceName: 'Zokirkhon',
    data: {name:'Zokirkhon'}
  }
  
  const docFour: Resource<string[]> = {
    uid:1,
    resourceName: 'Zokirkhon',
    data: ['shopping','assets']
  }