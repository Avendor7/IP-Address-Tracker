/**
 * Weather.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    schema: true,
    autoPK: true,
    attributes: {
        temperature1: {
            type: 'number'
        },
        temperature2: {
            type: 'number'
        },
        temperature3: {
            type: 'number'
        },
        temperature4: {
            type: 'number'
        },
        temperature5: {
            type: 'number'
        },
        temperature6: {
            type: 'number'
        }
    }
};

