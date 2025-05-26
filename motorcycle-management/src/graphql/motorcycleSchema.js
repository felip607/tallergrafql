const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLSchema, GraphQLList, GraphQLNonNull } = require('graphql');
const MotorcycleService = require('../services/motorcycleService');

const motorcycleService = new MotorcycleService();

const MotorcycleType = new GraphQLObjectType({
    name: 'Motorcycle',
    fields: {
        id: { type: GraphQLNonNull(GraphQLString) },
        make: { type: GraphQLNonNull(GraphQLString) },
        model: { type: GraphQLNonNull(GraphQLString) },
        year: { type: GraphQLNonNull(GraphQLInt) },
        price: { type: GraphQLNonNull(GraphQLFloat) },
        color: { type: GraphQLNonNull(GraphQLString) },
        status: { type: GraphQLNonNull(GraphQLString) },
        mileage: { type: GraphQLNonNull(GraphQLInt) }
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        motorcycles: {
            type: new GraphQLList(MotorcycleType),
            resolve() {
                return motorcycleService.getAllMotorcycles();
            }
        },
        motorcycle: {
            type: MotorcycleType,
            args: { id: { type: GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return motorcycleService.findMotorcycle(args.id);
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addMotorcycle: {
            type: MotorcycleType,
            args: {
                make: { type: GraphQLNonNull(GraphQLString) },
                model: { type: GraphQLNonNull(GraphQLString) },
                year: { type: GraphQLNonNull(GraphQLInt) },
                price: { type: GraphQLNonNull(GraphQLFloat) },
                color: { type: GraphQLNonNull(GraphQLString) },
                status: { type: GraphQLNonNull(GraphQLString) },
                mileage: { type: GraphQLNonNull(GraphQLInt) }
            },
            resolve(parent, args) {
                return motorcycleService.addMotorcycle(
                    args.make,
                    args.model,
                    args.year,
                    args.price,
                    args.color,
                    args.status,
                    args.mileage
                );
            }
        },
        updateMotorcycle: {
            type: MotorcycleType,
            args: {
                id: { type: GraphQLNonNull(GraphQLString) },
                make: { type: GraphQLString },
                model: { type: GraphQLString },
                year: { type: GraphQLInt },
                price: { type: GraphQLFloat },
                color: { type: GraphQLString },
                status: { type: GraphQLString },
                mileage: { type: GraphQLInt }
            },
            resolve(parent, args) {
                const { id, ...updatedData } = args;
                return motorcycleService.modifyMotorcycle(id, updatedData);
            }
        },
        deleteMotorcycle: {
            type: MotorcycleType,
            args: { id: { type: GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return motorcycleService.removeMotorcycle(args.id);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});