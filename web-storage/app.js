const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();


// using cookie
app.use(cookieParser());

// using session
app.use(session({
  secret: 'john',
  resave: false,
  saveUninitialized: true
}));



app.get('/', (req, res) => {
  console.log(req)

  if (req.cookies.isFirstTimeVisit) {
    res.send(req.cookies);
    return
  }

  res.cookie('isFirstTimeVisit', 'true', {
    maxAge: 10 * 1000
  });

  res.send(req.cookies);
});



app.get('/session', (req, res) => {
  console.log('before: ' + req.session.isLogin);

  if (req.session.isLogin) {
    res.send('Wellcome back!')
  } else {
    req.session.isLogin = true;
    res.send('Wellcome!')
    console.log('after: ' + req.session.isLogin);
  }
})

app.get('/logout', (req, res) => {
  console.log('before: ' + req.session.isLogin);

  req.session.isLogin = null;
  res.send('logout')
  console.log('after: ' + req.session.isLogin);
});



app.listen(3000, () => {
  console.log('running...');
});
