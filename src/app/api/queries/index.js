import gql from "graphql-tag";

export const CAREER_QUERY = gql`
  query JobPosting {
    jobPostings {
      id
      title
      description
      category {
        name
      }
      link
      date_posted
      attachment {
        name
        url
      }
    }
  }
`;

export const SOCIAL_QUERY = gql`
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

export const ARTICLES_QUERY = gql`
  query Articles {
    article {
      id
      Title
      category {
        id
        name
      }
      image {
        url
      }
    }
  }
`;

export const EMERGENCY_QUERY = gql`
  query EmergencyMessage {
    emergencyMessage {
      headline
      details
      link
      display
    }
  }
`;

export const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      name
    }
  }
`;
