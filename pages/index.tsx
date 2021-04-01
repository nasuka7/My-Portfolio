import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { services } from '../data'

const Index = ({ services }) => {
  return (
    <div>Hello, World</div>
  );
}

export default Index;

// export const getServerSideProps = async(context:GetServerSidePropsContext) => {
//   const res  = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()
  
//   console.log("SERVER", services);
  
//   return {
//     props: {
//       services: data.services,
//     }
//   }
// }

export const getStaticProps = async(context:GetStaticPropsContext) => {
  const res  = await fetch('http://localhost:3000/api/services')
  const data = await res.json()
  
  console.log("SERVER", services);
  
  return {
    props: {
      services: data.services,
    }
  }
}