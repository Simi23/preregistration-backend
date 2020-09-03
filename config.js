module.exports = {
    Config
}

const Config = {
    
    // Property: <name> <friendlyName> <type> [pattern]
    properties = [
        {
            name: "name",
            friendlyName: "Név",
            type: "string",
            sanitize: ""
        },
        {
            name: "email",
            friendlyName: "E-mail",
            type: "string",
            pattern: /^.+?@.+?\..+?$/
        }
    ]

}
