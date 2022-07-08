const { dbConnection } = require('./server/db')
const app = require('./server')
const PORT = 8080

const startServer = async () => {
    try{
        dbConnection.sync().then(()=>{
            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`);
            });

        })
    }catch(error){
        console.log(error)
    }
};

startServer();
