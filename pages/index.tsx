import { useState, useEffect } from "react";
import { Htag, Button, Ptag, Tag } from "../components";


export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log('Counter', counter);

    return () => {
      console.log('Counter go out', counter);
    };
  });


  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearence="primary" arrow='down' onClick={() => setCounter(counter + 1)} >Qwertudihjuthg</Button>
      <Button appearence="ghost" arrow='right'>Qwertu</Button>
      <Ptag size='l'>fiuhyu</Ptag> 
      <Tag color='red' size='m'>dfijgurgh</Tag>
      <Tag color='primary' size='s' href='pravda.com.ua'>12sf</Tag>
      <Tag color='green' size='m' href='pravda.com.ua'>12sf</Tag>
    </>
  );
}
