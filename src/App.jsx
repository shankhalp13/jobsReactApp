import React from 'react'

const App = () => {
  const name = 'Shankhalp';
  const x = 10; 
  const y = 20;
  const names = ['Shankhalp','Sondeep','Amrit'];
  const loggedIn = true;

  if(loggedIn){
    return <h1>Hello Member</h1>;
  }

  return (
    <>
      <div className='text-5xl'>App</div>
      <p>Hello { name }</p>
      <p>The sum of {x} and {y} is {x+y}</p>
      <ul>
        {names.map((name ,index) => (
          <li key ={ index } >{name}</li>
        ))}
      </ul>
    </>
    
  )
}

export default App