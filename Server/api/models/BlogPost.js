/**
 * BlogPost.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,
    autoPK: true,
    attributes: {
        title: {
            type: 'string',
            required: true,
            unique: true
        },
        post: {
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

