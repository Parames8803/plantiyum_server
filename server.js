const express = require('express');
const path = require('path');
const cors = require('cors')
const indexRouter = require('./routes/index')

const app = express();
const port = process.env.PORT || 8000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

