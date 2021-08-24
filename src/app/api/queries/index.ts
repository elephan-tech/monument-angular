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
      date
      file{
        id
        name
        url
      }
    }
  ...${'Career'}Meta
  }
`;

// NOT NEEDED ATM -- keep hardcoded
// export const SOCIAL_QUERY = gql`
// ${meta('SocialMedia')}
//   query SocialMedia {
//     socialMedias {
//       id
//       name
//       href
//       icon
//       display
//       target
//       fill
//     }
//     ...${'SocialMedia'}Meta
//   }
// `;

export const ARTICLES_QUERY = gql`
${meta('Article')}
  query Articles {
    articles {
      title
      image {
        id
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

// NOT USED ATM
// export const CATEGORIES_QUERY = gql`
// ${meta('Categories')}
//   query Categories {
//     categories {
//       id
//       name
//     }
//   }
// `;

export const MOMENTS_QUERY = gql`
${meta('MonumentalMoments')}
  query MonumentalMoments {
    monumentalMoments {
      id
      title
      description
      display
      image {
        id
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
      file{
        id
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
        id
        name
        url
      }
      link
      file {
        id
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
        id
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
    display
    agenda{
      name
      url
    }
    minutes{
      name
      url
    }
    meetingRecording{
      name
      url
    }
  }
  ...${'BoardMeetings'}Meta
}
`;





const fieldMap = {
  careers: CAREER_QUERY,
  // categories: CATEGORIES_QUERY,
  emergencyMessage: EMERGENCY_QUERY,
  monumentalMoments: MOMENTS_QUERY,
  events: EVENTS_QUERY,
  announcements: ANNOUNCEMENTS_QUERY,
  familyResources: FAMILY_RESOURCES_QUERY,
  articles: ARTICLES_QUERY,
  boardMeetings: BOARD_QUERY
};

export default (collection: string) => {

  return fieldMap[collection];
};

