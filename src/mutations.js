import gql from 'graphql-tag';

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $name: String!
    $title: String!
    $description: String!
    $manufactureDate: String!
    $expireDate: String!
    $manufacturerId: String!
    # $category: String!
  ) {
    addProduct(
      name: $name
      title: $title
      description: $description
      manufactureDate: $manufactureDate
      expireDate: $expireDate
      manufacturerId: $manufacturerId
    #   category: $category
    ) {
      id
    #   category
      name
      title
      description
      manufactureDate
      expireDate
      manufactureDate
    }
  }
`;
