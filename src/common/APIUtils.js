const GetUsers = async () =>  {
    try {
      const response = await fetch(`http://localhost:3000/example_data.json`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
};

export default GetUsers;
