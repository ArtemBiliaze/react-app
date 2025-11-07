import { Component } from "react";
const userData = [
  {
    id: 1,
    firstname: "Test",
    lastName: "Testovich",
  },
  {
    id: 2,
    firstname: "John",
    lastName: "Testovich",
  },
  {
    id: 3,
    firstname: "Jane",
    lastName: "Testovich",
  },
];
class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: userData.map((u) => ({ ...u, isSelected: false })),
    };
  }

  selectUser = (id) => {
    const {users} = this.state;
    const foundIndex = users.findIndex((u) => u.id === id);
    const newUsers = [...users];
    newUsers[foundIndex] = {
      ...newUsers[foundIndex],
      isSelected: !newUsers[foundIndex].isSelected,
    };
    this.setState({users: newUsers})
  };

  mapUser = (u) => {
    const inlineStyle = {
      backgroundColor: u.isSelected ? "yellow" : "transparent",
    };
    return (
      <li key={u.id} style={inlineStyle} onClick={() => this.selectUser(u.id)}>
        {u.firstname} {u.lastName}
      </li>
    );
  };
  render() {
    const { users } = this.state;
    return (
      <>
        <ul>{users.map(this.mapUser)}</ul>
      </>
    );
  }
}

export default UsersList;
