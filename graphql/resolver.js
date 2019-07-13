const kevin = {
  name: 'kevin',
  age: 38,
  gender: "male"
};

const resolvers = {
  Query: {
    person:() => kevin
  }
};

export default resolvers;