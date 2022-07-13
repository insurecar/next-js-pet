import { Htag } from "../components";
import { Button } from "../components/Button/Button";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearence="primary">Qwertu</Button>
      <Button appearence="ghost">Qwertu</Button>
    </>
  );
}
