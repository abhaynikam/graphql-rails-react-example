import gql from "graphql-tag";

const CREATE_CONTACT = gql`
  mutation createContact($contact: ContactInputType){
    contact: createContact(contact: $contact) {
      email
      title
      body
      errors
    }
  }
`;

export { CREATE_CONTACT };
