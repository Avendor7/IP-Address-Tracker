/**
 * IpAddressController
 *
 * @description :: Server-side logic for managing ipaddresses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    schema: true,
    autoPK: true,
    attributes: {
        hostname: {
            type: 'string',
            required: true,
            unique: true
        },
        ipv4: {
            type: 'string',
            required: true,
            unique: true
        },
        VM: {
            type: 'boolean',
            required: true,
            defaultsTo: false
        },
        operatingSystem: {
            type: 'string',
            required: true
        },
        description: {
            type: 'text',
            required: true
        }
        
    }
};

