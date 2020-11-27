const app = require('./app');

app.set("app", app);

app.listen(app.get('port'), () => {
    console.log(`Servidor por el puerto ${app.get('port')}`);
});