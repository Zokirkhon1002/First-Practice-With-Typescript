// const addUID = (obj:object) => {
  // const addUID = <T extends {name: string}>(obj: T) => {
    
    const addUID = <T extends object>(obj: T) => {
        let uid = Math.floor(Math.random() * 100000);
        return { ...obj, uid };
      };
      
      let docOne = addUID({ name: "Zokirkhon", age: 23 });
      console.log(docOne);
      