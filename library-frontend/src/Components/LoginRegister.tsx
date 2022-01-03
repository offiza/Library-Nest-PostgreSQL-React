import React from 'react';

export const LoginRegister = () => {
  const [email, setEmail] = React.useState('sd');
  const [password, setPassword] = React.useState('sd');

  const handleSumbmit = (event: any) => {
    event.preventDefault();
    console.log(email, password);
  }

  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value);
  }

  const handleChangePassword = (event) => {
    setPassword( event.target.value);
  }

  return (
    <div style={{ borderRadius: '5px', width: 'clamp(200px, 100%, 600px)', margin: 'auto' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ padding: '1em', backgroundColor: '#66BB6A' }}>
          <h1>Library</h1>
        </div>
        <div style={{ padding: '30px 0' }}>
          <form action="" onSubmit={ (event) => handleSumbmit(event)}>
            <div style={{ margin: '20px 0'}}>
              <input type="text" placeholder='email' value={email}  onChange={ (event) => handleChangeEmail(event)}style={{width: '90%', height: '30px', padding: '10px'}} />
            </div>
            <div style={{ margin: '20px 0'}}>
              <input type="text" placeholder='password' value={password} onChange={ (event) => handleChangePassword(event)} style={{width: '90%', height: '30px',padding: '10px'}}/>
            </div>
            <div style={{ margin: '20px 0'}}>
              <input type="submit" value={"Login/Register"} style={{width: '90%', height: '50px'}} />
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}