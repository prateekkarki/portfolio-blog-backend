"use strict";
const slugify = require("slugify");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
	lifecycles: {
		async beforeCreate(data) {
			data.slug = slugify(data.name, { lower: true });
		},
		async beforeUpdate(params, data) {
			data.slug = slugify(data.name, { lower: true });
		},
	},
};
