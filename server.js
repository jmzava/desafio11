const httpServer = require('./src/httpServer')
const PORT = process.env.PORT || 8080


httpServer.listen(PORT, () => console.log('Servidor faker corriendo en http://localhost:8080/api/productos-test'))

