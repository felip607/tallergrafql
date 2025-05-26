const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const motorcycleSchema = require('./graphql/motorcycleSchema');
const setMotorcycleRoutes = require('./routes/motorcycleRoutes');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// REST endpoints
setMotorcycleRoutes(app);

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
    schema: motorcycleSchema,
    graphiql: true
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});