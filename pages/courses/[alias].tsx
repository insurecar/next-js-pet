import { withLayout } from "../../Layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../../interfaces/menu.interfaces";

const Course = ({ menu, firstCategory }: CourseProps): JSX.Element => {
  return <div>sdg</div>;
};

export default withLayout(Course);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.get<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/category"
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
