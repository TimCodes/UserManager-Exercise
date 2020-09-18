const GetUsers = () => {
  return fetch(`http://localhost:3000/example_data.json`)
    .then((res) => res.json())
    .then((json) => json);
};

export default GetUsers;
