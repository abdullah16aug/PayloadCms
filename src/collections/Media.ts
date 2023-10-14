import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  access:{
    read: () => true,
  },
  
  fields: [
    {
      name: "name",
      type: "text",
    },
    
    {
      name: "posts",
      type: "upload",
      relationTo: "posts",

    }
  ],
};

export default Media;
