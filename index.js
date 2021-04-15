function cloneDeep(object) {
  let result;
  let key;
  let value;
  
  result = Array.isArray(object) 
             ? [] 
             : (typeof object === "object") 
                 ? (object === null)
                   ? null
                   : {}
                 : object; 
  for (key in object) { 
    value = object[key]; 
    result[key] = (typeof value === "object") 
                    ? (object === null)
                      ? null
                      : cloneDeep(value) 
                    : value; 
  } 
  return result; 
}


let object = {
  name: 'Test',
  data: {
   nested: {
     key: {
       key12: {
         key13: 'Nested test',
         key14: 'dfdfs'
       }
     }
   },
   nested2: {
     key2: [0, 'fgfdf'],
     key21: {
        a: null,
        b: [0, null, 'dfgdg'],
     }
   } 
  },
  title: {arr: 'Title'},
  ages: [2,5,1],
  address: null,
  surname: undefined,
  payment: {1: ['asdas', 'adasd'], 2: 0},
  boolean: true
}
