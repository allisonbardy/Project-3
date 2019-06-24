var React = require('react');

class SignUp extends React.Component {
  render() {
    return (
    <form id="signup" name="signup" method="post" action="/api/signup">
        <label htmlFor="email">Email Address</label>
        <input className="text" name="email" type="email" />
        <label htmlFor="firstname">Firstname</label>
        <input name="firstname" type="text" />
        <label htmlFor="lastname">Lastname</label>
        <input name="lastname" type="text" />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" />
        <input className="btn" type="submit" value="Sign Up" />
    </form>
  )}
}

module.exports = SignUp;