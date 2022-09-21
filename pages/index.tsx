import { Htag, Button, Ptag, Tag } from "../components/index.js";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearence="primary" arrow='down'>Qwertudihjuthg</Button>
      <Button appearence="ghost" arrow='right'>Qwertu</Button>
      <Ptag size='l'>fiuhyu</Ptag> 
      <Tag color='red' size='m'>dfijgurgh</Tag>
    </>
  );
}
