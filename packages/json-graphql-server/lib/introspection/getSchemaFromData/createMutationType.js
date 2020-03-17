"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
function createMutationType({ data, types, typesByName, }) {
    const mutationType = new graphql_1.GraphQLObjectType({
        name: 'Mutation',
        fields: types.reduce((fields, type) => {
            const typeFields = typesByName[type.name].getFields();
            const nullableTypeFields = Object.keys(typeFields).reduce((f, fieldName) => {
                f[fieldName] = Object.assign({}, typeFields[fieldName], {
                    type: fieldName !== 'id' &&
                        typeFields[fieldName].type instanceof graphql_1.GraphQLNonNull
                        // @ts-ignore
                        ? typeFields[fieldName].type.ofType
                        : typeFields[fieldName].type,
                });
                return f;
            }, {});
            fields[`create${type.name}`] = {
                type: typesByName[type.name],
                args: typeFields,
            };
            fields[`update${type.name}`] = {
                type: typesByName[type.name],
                args: nullableTypeFields,
            };
            fields[`remove${type.name}`] = {
                type: graphql_1.GraphQLBoolean,
                args: {
                    id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
                },
            };
            return fields;
        }, {}),
    });
    return mutationType;
}
exports.default = createMutationType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlTXV0YXRpb25UeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlTXV0YXRpb25UeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXVGO0FBSXZGLFNBQXdCLGtCQUFrQixDQUF5QixFQUNsRSxJQUFJLEVBQ0osS0FBSyxFQUNMLFdBQVcsR0FDRTtJQUViLE1BQU0sWUFBWSxHQUFHLElBQUksMkJBQWlCLENBQUM7UUFDMUMsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFFckMsTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN0RCxNQUFNLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQ3JDLFVBQVUsQ0FDVixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRTtnQkFFekIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDdkQsSUFBSSxFQUNILFNBQVMsS0FBSyxJQUFJO3dCQUNsQixVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxZQUFZLHdCQUFjO3dCQUNuRCxhQUFhO3dCQUNiLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU07d0JBQ25DLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSTtpQkFDOUIsQ0FBQyxDQUFDO2dCQUNILE9BQU8sQ0FBQyxDQUFDO1lBQ1YsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ1AsTUFBTSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUc7Z0JBQzlCLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDNUIsSUFBSSxFQUFFLFVBQVU7YUFDaEIsQ0FBQztZQUNGLE1BQU0sQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHO2dCQUM5QixJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLElBQUksRUFBRSxrQkFBa0I7YUFDeEIsQ0FBQztZQUNGLE1BQU0sQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHO2dCQUM5QixJQUFJLEVBQUUsd0JBQWM7Z0JBQ3BCLElBQUksRUFBRTtvQkFDTCxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSx3QkFBYyxDQUFDLG1CQUFTLENBQUMsRUFBRTtpQkFDM0M7YUFDRCxDQUFDO1lBQ0YsT0FBTyxNQUFNLENBQUM7UUFDZixDQUFDLEVBQUUsRUFBRSxDQUFDO0tBQ04sQ0FBQyxDQUFDO0lBRUgsT0FBTyxZQUFZLENBQUE7QUFDcEIsQ0FBQztBQTVDRCxxQ0E0Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMT2JqZWN0VHlwZSwgR3JhcGhRTE5vbk51bGwsIEdyYXBoUUxCb29sZWFuLCBHcmFwaFFMSUQgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCB7IElTb3VyY2VEYXRhUm93QmFzZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IElSdW50aW1lIH0gZnJvbSAnLi4vZ2V0U2NoZW1hRnJvbURhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNdXRhdGlvblR5cGU8VCA9IElTb3VyY2VEYXRhUm93QmFzZT4oe1xuXHRkYXRhLFxuXHR0eXBlcyxcblx0dHlwZXNCeU5hbWUsXG59OiBJUnVudGltZTxUPilcbntcblx0Y29uc3QgbXV0YXRpb25UeXBlID0gbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcblx0XHRuYW1lOiAnTXV0YXRpb24nLFxuXHRcdGZpZWxkczogdHlwZXMucmVkdWNlKChmaWVsZHMsIHR5cGUpID0+XG5cdFx0e1xuXHRcdFx0Y29uc3QgdHlwZUZpZWxkcyA9IHR5cGVzQnlOYW1lW3R5cGUubmFtZV0uZ2V0RmllbGRzKCk7XG5cdFx0XHRjb25zdCBudWxsYWJsZVR5cGVGaWVsZHMgPSBPYmplY3Qua2V5cyhcblx0XHRcdFx0dHlwZUZpZWxkcyxcblx0XHRcdCkucmVkdWNlKChmLCBmaWVsZE5hbWUpID0+XG5cdFx0XHR7XG5cdFx0XHRcdGZbZmllbGROYW1lXSA9IE9iamVjdC5hc3NpZ24oe30sIHR5cGVGaWVsZHNbZmllbGROYW1lXSwge1xuXHRcdFx0XHRcdHR5cGU6XG5cdFx0XHRcdFx0XHRmaWVsZE5hbWUgIT09ICdpZCcgJiZcblx0XHRcdFx0XHRcdHR5cGVGaWVsZHNbZmllbGROYW1lXS50eXBlIGluc3RhbmNlb2YgR3JhcGhRTE5vbk51bGxcblx0XHRcdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdFx0XHQ/IHR5cGVGaWVsZHNbZmllbGROYW1lXS50eXBlLm9mVHlwZVxuXHRcdFx0XHRcdFx0XHQ6IHR5cGVGaWVsZHNbZmllbGROYW1lXS50eXBlLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIGY7XG5cdFx0XHR9LCB7fSk7XG5cdFx0XHRmaWVsZHNbYGNyZWF0ZSR7dHlwZS5uYW1lfWBdID0ge1xuXHRcdFx0XHR0eXBlOiB0eXBlc0J5TmFtZVt0eXBlLm5hbWVdLFxuXHRcdFx0XHRhcmdzOiB0eXBlRmllbGRzLFxuXHRcdFx0fTtcblx0XHRcdGZpZWxkc1tgdXBkYXRlJHt0eXBlLm5hbWV9YF0gPSB7XG5cdFx0XHRcdHR5cGU6IHR5cGVzQnlOYW1lW3R5cGUubmFtZV0sXG5cdFx0XHRcdGFyZ3M6IG51bGxhYmxlVHlwZUZpZWxkcyxcblx0XHRcdH07XG5cdFx0XHRmaWVsZHNbYHJlbW92ZSR7dHlwZS5uYW1lfWBdID0ge1xuXHRcdFx0XHR0eXBlOiBHcmFwaFFMQm9vbGVhbixcblx0XHRcdFx0YXJnczoge1xuXHRcdFx0XHRcdGlkOiB7IHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMSUQpIH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIGZpZWxkcztcblx0XHR9LCB7fSksXG5cdH0pO1xuXG5cdHJldHVybiBtdXRhdGlvblR5cGVcbn1cbiJdfQ==