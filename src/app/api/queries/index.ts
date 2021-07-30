import gql from 'graphql-tag';


const meta = (collection: string) => gql`
fragment ${collection}Meta on Query {
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
  }`;


export const CAREER_QUERY = gql`
${meta('Career')}
  query Career {
    careers {
      display
      id
      name
      shortDescription
      url
      date
      image{
        name
        url
      }
      attachment {
        name
        url
      }
    }
  ...${'Career'}Meta
  }
`;

export const SOCIAL_QUERY = gql`
${meta('SocialMedia')}
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
    ...${'SocialMedia'}Meta
  }
`;

export const ARTICLES_QUERY = gql`
${meta('Article')}
  query Articles {
    articles {
      title
      image {
        url
      }
      content
      date
      name
      display
      subtitle
      link
      location
      id

    }
    ...${'Article'}Meta
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
    ...${'EmergencyMessage'}Meta
  }
`;

export const CATEGORIES_QUERY = gql`
${meta('Categories')}
  query Categories {
    categories {
      id
      name
    }
  }
`;

export const MOMENTS_QUERY = gql`
${meta('MonumentalMoments')}
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
    ...${'MonumentalMoments'}Meta
  }
`;

export const EVENTS_QUERY = gql`
${meta('Events')}
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
    ...${'Events'}Meta
  }
`;
export const ANNOUNCEMENTS_QUERY =  gql`
${meta('Announcements')}
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
    ...${'Announcements'}Meta
  }
`;

export const FAMILY_RESOURCES_QUERY =  gql`
${meta('FamilyResources')}
  query FamilyResources {
    familyResources {
      id
      title
      display
      subtitle
      description
      image {
        url
        updated_at
      }
      url
    }
    ...${'FamilyResources'}Meta
  }
`;

export const NEWS_MEDIA_QUERY =  gql`
${meta('FamilyResources')}
  query FamilyResources {
    familyResources {
      id
      title
      subtitle

      image {
        url
        updated_at
      }
      url
    }
    ...${'FamilyResources'}Meta
  }
`;

export const BOARD_QUERY =  gql`
${meta('BoardMeetings')}
query BoardMeeting{
  boardMeetings{
    name
    id
    start
    end
    date
    agenda{
      name
      url
    }
    minutes{
      name
      url
    }
    meeting_recording{
      name
      url
    }
  }
  ...${'BoardMeetings'}Meta
}
`;





const fieldMap = {
  careers: CAREER_QUERY,
  socials: SOCIAL_QUERY,
  categories: CATEGORIES_QUERY,
  emergencyMessage: EMERGENCY_QUERY,
  'monumentalMoments': MOMENTS_QUERY,
  events: EVENTS_QUERY,
  announcements: ANNOUNCEMENTS_QUERY,
  'familyResources': FAMILY_RESOURCES_QUERY,
  articles: ARTICLES_QUERY,
  'boardMeetings': BOARD_QUERY
};

export default (collection: string) => {

  return fieldMap[collection];
};

