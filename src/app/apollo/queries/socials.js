import gql from "graphql-tag";

const SOCIAL_QUERY = gql`
  query SocialMedia {
    socialMedias {
      id
      name
      href
      icon
      display
      target
      fill
    }
  }
`;

export default SOCIAL_QUERY;
