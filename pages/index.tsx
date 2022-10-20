import { useState } from "react";
// import { Htag, Button, Ptag, Tag, Rating } from "../components";
// import { Htag } from "../components/Htag/Htag";
import { Htag } from "../components";
import { withLayout } from "../Layout/Layout";
import { GetStaticProps } from "next";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interfaces";


const Home = ({ menu, firstCategory }: HomeProps): JSX.Element => {
  const [r, setR] = useState<number>(3);
  console.log(menu);


  console.log(process.env.NEXT_PUBLIC_DOMAIN)
  return (
    <>
      <Htag tag="h1">cds</Htag>
      {/* <Htag tag="h1">Текст</Htag>
      <Button appearence="primary" arrow='down'  >Qwertudihjuthg</Button>
      <Button appearence="ghost" arrow='right'>Qwertu</Button>
      <Ptag size='l'>fiuhyu</Ptag>
      <Tag color='red' size='m'>dfijgurgh</Tag>
      <Tag color='primary' size='s' href='pravda.com.ua'>12sf</Tag>
      <Tag color='green' size='m' href='pravda.com.ua'>12sf</Tag>
      <Rating rating={r} isEditable={true} setRating={setR} />
      <ul>

        {menu.map(m => <li key={m._id.secondCategory} >{m._id.secondCategory}</li>)}
      </ul>
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.get<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/category');

  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;

}
