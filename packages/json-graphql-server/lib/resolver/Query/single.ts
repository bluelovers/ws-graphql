export default (entityData = []) => (_, { id }: { id? } ) =>
    entityData.find(d => d.id == id);
