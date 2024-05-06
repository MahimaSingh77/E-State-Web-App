import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import postRoute from './routes/post.route.js';
import authRoute from './routes/auth.route.js';

const app = express();

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', process.env.CLIENT_URL);
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
//   });

  
// app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(cors({origin:'*', credentials:true}))
app.use(express.json());
app.use(cookieParser());
app.use('/api/posts', postRoute);
app.use('/api/auth', authRoute);

app.listen(8800, () => {
  console.log('Server is running!');
});
