import { EmergencyMessage } from './../../components/topnavigation/topnavigation.component';
import gql from "graphql-tag";


const meta = (collection: string) => gql`
fragment FieldMeta on Query {
  __type(name: "${collection}") {
    fields {
      name
      description
      type {
        name
        ofType {
          name
        }
      }
    }
  }
  }`


export const CAREER_QUERY = gql`
${meta("Career")}
  query Career {
    careers {
      display
      id
      name
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
  ...FieldMeta
  }
`;

export const SOCIAL_QUERY = gql`
${meta("SocialMedia")}
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
    ...FieldMeta
  }
`;

export const ARTICLES_QUERY = gql`
${meta("Article")}
  query Articles {
    articles {
      title
      content
      date_created
      display
      name
      id
      category {
        id
        name
      }
      image {
        url
      }
    }
    ...FieldMeta
  }
`;

export const EMERGENCY_QUERY = gql`
${meta('EmergencyMessage')}
  query EmergencyMessage {
    emergencyMessage {
      headline
      details
      link
      display
    }
    ...FieldMeta
  }
`;

export const CATEGORIES_QUERY = gql`
${meta("Categories")}
  query Categories {
    categories {
      id
      name
    }
  }
`;

export const MOMENTS_QUERY = gql`
${meta("MonumentalMoments")}
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
${meta("Events")}
  query Events {
    events {
      id
      name
      date
      display
      eventLink
      file {
        name
        url
      }
    }
    ...FieldMeta
  }
`;
export const ANNOUNCEMENTS_QUERY =  gql`
${meta("Announcements")}
  query Announcements {
    announcements {
      id
      name
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
    ...FieldMeta
  }
`;

export const FAMILY_RESOURCES_QUERY =  gql`
${meta("FamilyResources")}
  query FamilyResources {
    familyResources {
      id
      title
      subtitle
      description
      image {
        url
        updated_at
      }
      url
    }
    ...FieldMeta
  }
`;

export const NEWS_MEDIA_QUERY =  gql`
${meta("FamilyResources")}
  query FamilyResources {
    familyResources {
      id
      title
      subtitle
      description
      image {
        url
        updated_at
      }
      url
    }
    ...FieldMeta
  }
`;

const fieldMap = {
  careers: CAREER_QUERY,
  socials: SOCIAL_QUERY,
  categories: CATEGORIES_QUERY,
  emergencyMessage: EMERGENCY_QUERY,
  "monumental-moments": MOMENTS_QUERY,
  events: EVENTS_QUERY,
  announcements: ANNOUNCEMENTS_QUERY,
  'family-resources': FAMILY_RESOURCES_QUERY,
  articles: ARTICLES_QUERY
}

export default (collection: string) =>  fieldMap[collection]

