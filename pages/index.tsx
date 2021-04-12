import { motion } from 'framer-motion';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { fadeInUp, routeAnimation, stagger } from '../animations';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data'

const Index = ({endpoint}) => {
  console.log(endpoint);
  
  return (
    <motion.div 
      className="flex flex-col px-6 pt-1 flex-grow" 
      variants={routeAnimation} 
      initial="initial" 
      animate="animate"
      exit="exit"
    >
      <h5 className="my-3 font-medium">
        今年1月より本格的にフロントエンドの学習をはじめました。 
        <p>大学4年次を休学し、2023年度での就職を目指しております。
        </p>
        現在はReactの勉強に力を入れており、中長期のインターンシップに参加することが近い目標です。
      </h5>

      <div 
        className="p-4 mt-5 flex-grow bg-gray-200 dark:bg-dark-100" 
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >

        <h6 className="my-3 text-xl font-bold tracking-wide">Profile</h6>

        <motion.div 
          className="grid gap-6 lg:grid-cols-2" 
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              className="bg-gray-100 dark:bg-dark-200 rounded-lg lg:col-span-2"
              key={service.title}
              variants={fadeInUp}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // console.log(process.env.VERCEL_URL);
  
  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  // const data = await res.json();
  // console.log(data);
  return  { props: { endpoint: process.env.VERCEL_URL }};
}

export default Index;