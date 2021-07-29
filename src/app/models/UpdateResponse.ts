export type UpdateResponse = {
  data: {
    updateEvent: {
      event: {
        id: string;
        name: string;
        updated_at: string;
        display: boolean;
      };
    };
  };
};
