import gql from 'graphql-tag';

export const COMPANY_INFO = gql`
  query getCompany($id: UUID!) {
    company: companyById(id: $id) {
      name
      website
      description
      image: imageUrl
      products: productsByCompanyId {
        nodes {
          name
          price
          discounted_price: discountedPrice
          mrp: marketPrice
          image: imageUrl
          quantity
        }
      }
    }
  }
`;
