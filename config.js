const Config = {
    
    // Property: <name: string> <friendlyName: string> <type: string> [pattern: RegExp] [sanitize: boolean]
    // Important! `id` & `date` are reserved for storing additional information.
    properties: [
        {
            name: "name",
            friendlyName: "Név",
            type: "string",
            sanitize: true
        },
        {
            name: "email",
            friendlyName: "E-mail",
            type: "string",
            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        }
    ]

}

module.exports = Config
