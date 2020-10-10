const slugify = require("slugify");

module.exports = {
	lifecycles: {
		async beforeCreate(data) {
			data.slug = slugify(data.title, { lower: true });
		},
		async beforeUpdate(params, data) {
			data.slug = slugify(data.title, { lower: true });
		},
	},
};
