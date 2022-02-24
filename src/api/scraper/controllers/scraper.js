'use strict';

/**
 *  scraper controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const googleNewsScraper = require('google-news-scraper')
module.exports = createCoreController('api::scraper.scraper', ({ strapi }) => ({

  async find(ctx) {

    ctx.query = { ...ctx.query, local: 'en' }
    

    //=============================================================================================
    const data = {};
    const GetUsInMedia = async () => {
      try {
        const articles = await googleNewsScraper({
          searchTerm: "nit calicut",
          prettyURLs: false,
          queryVars: {
            hl: "en-US",
            gl: "US",
            ceid: "US:en"
          },
          timeframe: "100d",
          puppeteerArgs: []
        });
        data.articles = articles;

      } catch (err) {
        console.log(err);
      }
    }

    await GetUsInMedia();
    return  data;
    //=============================================================================================

    
  }

}));
