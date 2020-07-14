import passport, { serializeUser, deserializeUser, use } from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { comparePassword } from '../modules/encryption';
import { query } from '../DataBase'

serializeUser((user, done) => {
  done(null, user.id);
});

deserializeUser((id, done) => {
  console.log('registar made it', id)
  query('SELECT * FROM Auth.User WHERE Id = $1', [id]).then((result) => {
    
    const user = result && result.rows && result.rows[0];

    if (!user) {
     
      done(null, false, { message: 'Incorrect credentials.' });
    } else {
      
      done(null, user);
    }
  }).catch((err) => {
    console.log('query err ', err);
    done(err);
  });
});


use('local', new LocalStrategy({
  passReqToCallback: true,
  usernameField: 'username',
}, ((req, username, password, done) => {
    query('SELECT * FROM person WHERE username = $1', [username])
      .then((result) => {
        const user = result && result.rows && result.rows[0];
        if (user && comparePassword(password, user.password)) {
          
          done(null, user);
        } else if (user) {
          
          done(null, false, { message: 'Incorrect credentials.' });
        } else {
          
          done(null, false);
        }
      }).catch((err) => {
        console.log('error', err);
        done(null, {});
      });
  })));

export default passport;