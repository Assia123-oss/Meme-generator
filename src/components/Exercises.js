// const Exercises = () => {
//   const [formData, setFormData] = React.useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     isFriendly: true,
//   });

//   function handleChange(event) {
//     const [name, value, type, checked] = event.target;
//     setFormData((prevFormData) => {
//       return {
//         ...prevFormData,
//         [name]: type === "checkbox" ? checked : value,
//       };
//     });
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter firstname"
//         onChange={handleChange}
//         name="firstName"
//         value={formData.firstName}
//       />
//       <input
//         type="text"
//         placeholder="Enter lastname"
//         onChange={handleChange}
//         name="lastName"
//         value={formData.lastName}
//       />

//       <input
//         type="email"
//         placeholder="Enter email"
//         onChange={handleChange}
//         name="email"
//         value={formData.email}
//       />
//       <input
//         type="checkbox"
//         id="isFriendly"
//         checked={handleChange}
//         name="isFriendly"
//       />
//       <label htmlFor="isFriendly">Are you Friendly?</label>
//       <br />
//     </div>
//   );
// };

import React from "react";
import WindowTracker from "./WindowTracker";

const Exercises = () => {
  const[show , setShow] = React.useState(true)

  function toggle(){
    setShow(prevShow => !prevShow)
  }
  return (
    <div>
      <button onClick={toggle}>Toggle window tracker</button>
      {show && <WindowTracker />}
    </div>
  );
};

export default Exercises;
