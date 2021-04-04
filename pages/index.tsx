// import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data'

const Index = () => {
  return (
    <div className="flex flex-col px-6 pt-1 flex-grow">
      <h5 className="my-3 font-medium">今年1月より本格的にフロントエンドの学習をはじめました。 
      <p>大学4年次を休学し、2023年度での自社開発企業への就職を目指しております。
      </p>
      現在はReactの勉強に力を入れており、中長期のインターンシップに参加することが近い目標です。</h5>
      <div 
        className="p-4 mt-5 flex-grow bg-gray-200 dark:bg-dark-100" 
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}>
        <h6 className="my-3 text-xl font-bold tracking-wide">Profile</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map(service => (
            <div className="bg-gray-100 dark:bg-dark-200 rounded-lg lg:col-span-1">
            <ServiceCard service={service} />
            </div>
            // part6 6:30
          ))}
        </div>
      </div>
    </div>

  );
}

export default Index;