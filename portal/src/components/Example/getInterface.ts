export const getInterface = (definitionFile: string) => {
    const typeArray = definitionFile.split("\n");

    let takeNext = false;

    // Rather naive .d.ts parser
    const typeDef = typeArray.filter((line: string) => {
        let take = takeNext;

        switch (true) {
            // interface: take from interface
            case line.startsWith("interface"):
                take = true;
                takeNext = true;
                break;
            // interface: take to end of interface
            case take && line.startsWith("}"):
                takeNext = false;
                break;
            // declare: take line with declare
            case line.startsWith("declare"):
                take = true;
                takeNext = false;
                break;
            default:
                break;
        }
        return take;
    });
    return typeDef.join("\n");
};
