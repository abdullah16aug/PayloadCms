import { CollectionConfig } from "payload/types";
const Posts: CollectionConfig = {
  slug: "posts",
  access:{
    read:()=>true,
  },
  admin:{
    useAsTitle:"type",
  },
  fields: [
    {
      name: 'type', // required
      type: 'select', // required
      options:[
        {label:"short-video",value:"shortVideo"},
        {label:"image",value:"image"},
        {label:"video",value:"video"},
      ]
    },
  ],
  upload:{

    mimeTypes:['image/*','video/*'],
   
  }
  ,
  
  
  }
export default Posts;
