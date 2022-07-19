import { CollectionConfig } from "payload/types";

const Tags: CollectionConfig = {
	slug: "tags",
	admin: {
		useAsTitle: "name",
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "name",
			type: "text",
		},
		{
			name: "prettyName",
			type: "text",
		},
	],
	timestamps: false,
};

export default Tags;
