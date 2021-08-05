import gql from "graphql-tag";

export const ANNOUNCEMENT_MUTATION = (data) => gql`
  mutation Announcements {
    createAnnouncement(input: {}) {
      announcement {
        link
      }
    }
  }
`;
