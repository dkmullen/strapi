'use strict';

const middlewares = require('../../../../config/middlewares');

/**
 * landing-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::landing-page.landing-page', {
  config: {
    controller: {
      // @ts-ignore
      find: {
        middlewares: ['api::landing-page.landing-page-populate'],
      },
      findOne: {
        middlewares: ['api::landing-page.landing-page-populate'],
      },
    },
  },
});
