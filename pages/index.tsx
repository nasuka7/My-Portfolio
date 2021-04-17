import { motion } from "framer-motion";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { fadeInUp, routeAnimation, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const Index = () => {
  return (
    <motion.div
      className="flex flex-col px-6 pt-1 flex-grow"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2 className="font-bold border-b-2 border-blue-400 text-lg">Profile</h2>
      <h3 className="font-medium mt-6">・Introduction</h3>

      <h5 className="my-4 ml-2 leading-8">
        今年1月より本格的にフロントエンドの学習をはじめました。今後の展望としては、大学4年次を休学し、2023年度でのWeb系企業様への就職を目指しています。
        また、現在はReactの勉強に力を入れており、中長期のインターンシップに参加することを近い目標としています。
        <p className="mt-3">学習している技術としてはモダンなものが多く、最近はNext.js を使用した開発に力を注いでいます。加えて、Tailwind CSSも使いやすく、学習もしやすいため使用しております。こちらのポートフォリオもこの2つを使用しております。</p>
        <p className="mt-3">学習についての今後は、バックエンドの知識を深めていくことや基本情報技術者試験に合格すること、AWSについての資格を持ちたいのでそのための勉強など、やることは山積みです。</p>
      </h5>

      <h3 className="font-medium mt-6">・Hobby</h3>

      <h5 className="my-4 ml-2 leading-8">
        小さいころから高校まで野球をしていたので、野球をすることが好きです。野球以外のスポーツも好きでよく遊びでやりますが、サッカーは絶望的に下手くそです。スポーツ好きなので見ることも好きで、最近はアメフトの面白さに気が付きました。
        <p className="mt-3">また、最近は筋トレにはまっています。週に3回くらい友人といじめあう瞬間が快感です。</p>
      </h5>

      <div
        className="p-4 mt-5 flex-grow dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="font-bold border-b-2 border-blue-400 text-lg mx-2 mb-6">My data</h6>

        <motion.div
          className="grid gap-5 lg:grid-cols-2"
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
  return { props: { endpoint: process.env.VERCEL_URL } };
};

export default Index;
