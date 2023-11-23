import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "JPAFS",
    name: "John Acquaviva",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo H.",
    isFollowing: false,
  },
  {
    userName: "PacoHdezs",
    name: "Paco Hdez",
    isFollowing: true,
  },
  {
    userName: "TMChein",
    name: "Tomás",
    isFollowing: false,
  }
];

export function App() {
  return (
    <section className="App">
      {
        users.map((user) => {
          const {userName, name, isFollowing} = user;
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  );
}

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
