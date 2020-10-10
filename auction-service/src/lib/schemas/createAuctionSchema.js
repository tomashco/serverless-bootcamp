const schema = {
  required: ["body"],
  properties: {
    body: {
      type: "object",
      required: ["title"],
      properties: {
        title: {
          type: "string",
        },
      },
    },
  },
};

export default schema;
