// const Navbar = () => {
//   let name = "Ansal R";
//   let array = ["user1","user2","user2","user3"];
  
//   return (
//     <div> 
//       <h2>{name}</h2>
//       {array.map((user)=>{return <h2>{user}</h2>})}
//       </div>
//   )
// }

// export default Navbar

const array = ["user1","user2","user2","user3"];

export default function Navbar() {
  const listItems = array.map(name => 
    <li>{name}</li>
    );
    return <ul>{listItems}</ul>
}

// const people = [
//   'Creola Katherine Johnson: mathematician',
//   'Mario José Molina-Pasquel Henríquez: chemist',
//   'Mohammad Abdus Salam: physicist',
//   'Percy Lavon Julian: chemist',
//   'Subrahmanyan Chandrasekhar: astrophysicist'
// ];

// export default function List() {
//   const listItems = people.map(person =>
//     <li>{person}</li>
//   );
//   return <ul>{listItems}</ul>;
// }