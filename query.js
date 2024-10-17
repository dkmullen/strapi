const q = {
  populate: {
    metaData: {
      populate: {
        metaImage: {
          populate: true,
          fields: ['name', 'alternativeText', 'url'],
        },
      },
    },
    blocks: {
      populate: {
        link: {
          populate: true,
        },
        image: {
          fields: ['name', 'alternativeText', 'url'],
        },
        card: {
          populate: {
            image: {
              fields: ['name', 'alternativeText', 'url'],
            },
          },
        },
        plan: {
          populate: ['services', 'link'],
        },
        form: {
          populate: ['input', 'button'],
        },
      },
    },
  },
};
