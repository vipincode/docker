mport { useState } from "react";
import { users } from "../utils/data";
export const Home = () => {
  const [user, setUser] = useState({
    name: "Abhishek Singh",
    age: 26,
  });
  const [userList, setUserList] = useState([
    {
      id:1,
      index: 1,
      name: "Abhishek Singh",
      age: 26,
    },
    { id:2,
      index: 2,
      name: "Aman Singh",
      age: 26,
    },
  ]);
  const updateUserList = (id:number) => {
    // setp 1 : Filter user with his id
    // filter , find
    const clikedUser = userList.filter((user) => {
      if (user.id === id) {
           return true
      }
      return false;
    })
    console.log(clikedUser)
    // Find Method
    const _clikedUser = userList.find((user) => {
      if (user.id === id) {
        return user;
      }
    })
    console.log(_clikedUser)
    // step 2 : update his age and state
    setUserList((preState) => {
      return preState.map((user) => {
        if (user.id === id && _clikedUser) {
          return {
            ..._clikedUser,
            age : _clikedUser.age + 1
          }
        }
        return user
      })
    })
  };
  const updateProfile = () => {
    // Method 1
    // const updatedUser = {
    //   ...user,
    //   age:user.age + 1
    // }
    // setUser(updatedUser)
    // Method 2
    setUser((oldState) => {
      return {
        ...oldState,
        age: oldState.age + 1,
      };
    });
  };
  return (
    <div>
      {/* <p>{user.name}</p>
      <p>{user.age}</p> */}
      <h1> Show List of items </h1>
      {userList.map((user) => {
        return (
          <div key={user.index}>
            <p onClick={() => {
              updateUserList(user.id)
            }}>
              {user.name} - {user.age}
            </p>
          </div>
        );
      })}
      {/* <UserList usersList={users} isVisible={false} /> */}
      <button onClick={updateProfile}>Update Profile</button>
    </div>
  );
};
interface User {
  name: string;
  gender: string;
  age: number;
}
interface UserListProps {
  usersList: User[];
  isVisible: boolean;
}
// prop
// props
// const props = {
//     usersList:[],
//     isVisible:false
//  }
//|| -> Logical OR
// | -> bitwise OR
const age: number | string | boolean = 10;
const arr: (number | boolean)[] = [1, 2, 3, 4, false];
interface UserType {
  name: string;
  age: number;
  address?: string;
}
const user1: UserType = {
  name: "Aman",
  age: 26,
};
const UserList = ({
  usersList,
  isVisible,
}: {
  usersList: User[];
  isVisible: boolean;
}) => {
  // console.log("props --->", props);
  //console.log(arr)
  // prop destructuring
  //const { usersList, isVisible } = props;
  return (
    <div>
      {usersList.map((user: User, index: number) => {
        return (
          <div key={index}>
            <p>{user.name}</p>
          </div>
        );
      })}
    </div>
  );
};