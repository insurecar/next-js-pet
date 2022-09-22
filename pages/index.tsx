import { useState } from "react";
import { Htag, Button, Ptag, Tag, Rating } from "../components";
import { withLayout } from "../Layout/Layout";


const Home = (): JSX.Element => {
  const [r, setR] = useState<number>(3);




  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearence="primary" arrow='down'  >Qwertudihjuthg</Button>
      <Button appearence="ghost" arrow='right'>Qwertu</Button>
      <Ptag size='l'>fiuhyu</Ptag> 
      <Tag color='red' size='m'>dfijgurgh</Tag>
      <Tag color='primary' size='s' href='pravda.com.ua'>12sf</Tag>
      <Tag color='green' size='m' href='pravda.com.ua'>12sf</Tag>
      <Rating rating={r} isEditable={true} setRating={setR} />
    </>
  );
}

export default withLayout(Home);