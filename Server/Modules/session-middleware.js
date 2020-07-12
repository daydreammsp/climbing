
import cookieSession from 'cookie-session';


const serverSessionSecret = () => {
  if (!process.env.SERVER_SESSION_SECRET ||
      process.env.SERVER_SESSION_SECRET.length < 8) {
    
    console.log('bad secret');
  }

  return process.env.SERVER_SESSION_SECRET;
};

export default cookieSession({
  secret: serverSessionSecret() || process.env.Session_Secret, 
  key: 'user', 
  resave: 'false',
  saveUninitialized: false,
  cookie: { maxage: 60000, secure: false },
});