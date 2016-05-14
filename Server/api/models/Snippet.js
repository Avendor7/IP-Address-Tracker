/**
 * Snippet.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    schema: true,
    autoPK: true,
    attributes: {
        title: {
            type: 'string',
            required: true,
            unique: true
        },
        language: {
            type: 'string',
            required: true,
            unique: true
        },
        description: {
            type: 'string',
            required: true,
            unique: true
        },
        code: {
            type: 'string',
            required: true,
            unique: true
        }
    }
  }
};

