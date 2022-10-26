export const getEntries = async () => {
  return [
    {
      id: "1",
      data: {
        message: `Message id 1`,
      },
    },
    {
      id: "2",
      data: {
        message: `Message id 2`,
      },
    },
    {
      id: "3",
      data: {
        message: `Message id 3`,
      },
    },
  ];
};

export const getEntry = async (id: string) => {
  return {
    id,
    data: {
      message: `Message id ${id}`,
    },
  };
};

export const publishEntry = async (message: string) => {
  return {
    id: 1,
    data: {
      message,
    },
    success: true,
  };
};
