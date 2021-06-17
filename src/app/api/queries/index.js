import gql from "graphql-tag";

export const CAREER_QUERY = gql`
  query Career {
    careers {
      id
      jobTitle
      shortDescription
      category {
        name
      }
      url
      datePosted
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

export const MOMENTS_QUERY = gql`
  query MonumentalMoments {
    monumentalMoments {
      id
      title
      content
      display
      image {
        url
        width
        height
        caption
        alternativeText
      }
    }
  }
`;

export const EVENTS_QUERY = gql`
  query Events {
    events {
      id
      name
      date
      localAsset
      display
      eventLink
      file {
        name
        url
      }
    }
  }
`;
export const ANNOUNCEMENTS_QUERY = gql`
  query Announcements {
    announcements {
      id
      displayText
      display
      date
      image {
        name
        url
      }
      link
      file {
        name
        url
      }
    }
  }
`;

export default {
  careers: CAREER_QUERY,
  socials: SOCIAL_QUERY,
  articles: ARTICLES_QUERY,
  categories: CATEGORIES_QUERY,
  emergencyMessage: EMERGENCY_QUERY,
  "monumental-moments": MOMENTS_QUERY,
  events: EVENTS_QUERY,
  announcements: ANNOUNCEMENTS_QUERY,
};
