const express = require('express')
const next = require('next')
const routes = require('../routes')
// SERVICE
const authService = require('./services/auth');
const mongoose = require('mongoose');
const config = require('./config')

const bodyParse = require('body-parser');
const bookRoutes = require('./routes/book')
const portfolioRoutes = require('./routes/portfolio')

const secretData = [
    {
        title: 'SecretData 1',
        description: 'Plans how to build spaceship'
    },
    {
        title: 'SecretData 2',
        description: 'My secret passwords'
    }
]

const dev = process.env.NODE_ENV != 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app)

mongoose.connect(config.DB_URI, { useNewUrlParser: true })
    .then(() => console.log('DataBase Connected.'))
    .catch(err => console.error(err));
app.prepare()
    .then(() => {
        const server = express();

        server.use(bodyParse.json());

        console.log('antes de chamar')
        server.use('/api/v1/books', bookRoutes);
        server.use('/api/v1/portfolios', portfolioRoutes);
        server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
            return res.json(secretData);
        })

        server.get('/api/v1/onlysiteowner', authService.checkJWT, authService.checkRole('siteOwner'), (req, res) => {
            return res.json(secretData);
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })



        server.use(function (err, req, res, next) {
            if (err.name === 'UnauthorizedError') {
                res.status(401).send({ title: 'Unauthorized', detail: 'Unauthorized Access' });
            }
        });


        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> ready on http://')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })
