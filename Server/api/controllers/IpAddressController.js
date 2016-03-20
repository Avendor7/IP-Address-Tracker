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
            required: true
        },
        VM: {
            type: 'boolean',
            defaultsTo: false
        },
        ipv4: {
            type: 'string',
            required: true
        },
        ipv6: {
            type: 'string',
            required: true
        },
        description: {
            type: 'text',
            required: true
        }
        
    }
};

