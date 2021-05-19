import gql from "graphql-tag";

const EMERGENCY_QUERY = (id) => gql`
  query EmergencyMessage {
    emergencyMessage(id: ${id}) {
      headline
      details
      link
    }
  }
`;

export default EMERGENCY_QUERY;
