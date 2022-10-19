import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { withLayout } from "../../Layout/Layout";
import axios from "axios";
import { MenuItem } from "../../interfaces/menu.interfaces";
import { TopPageModel } from "../../interfaces/page.interface";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from "../../interfaces/product.interface";

const Course = ({ menu }: CourseProps): JSX.Element => {
  console.log(menu);
  return <>hgd</>;
};

export default withLayout(Course);

export const getStaticPath: GetStaticPaths = async () => {
  const { data: menu } = await axios.get<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/photoshop"
  );

  return {
    paths: menu.flatMap((m) => m.tags.map((p) => console.log(p))),
    fallback: true,
  };
};

// export const getStaticProps: GetStaticProps<CourseProps> = async ({
//   params,
// }: GetStaticPropsContext<ParsedUrlQuery>) => {
//   console.log(params);
//   // !params && { notFound: true };
//   const firstCategory = 1;
//   const { data: menu } = await axios.get<MenuItem[]>(
//     process.env.NEXT_PUBLIC_DOMAIN + "/photoshop/1"
//   );

//   const { data: page } = await axios.get<TopPageModel>(
//     process.env.NEXT_PUBLIC_DOMAIN + "/category"
//   );

//   const { data: products } = await axios.get<ProductModel[]>(
//     process.env.NEXT_PUBLIC_DOMAIN + "/category"
//   );

//   return {
//     props: {
//       menu,
//       firstCategory,
//       page,
//       products,
//     },
//   };
// };

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
  page: TopPageModel;
  products: ProductModel[];
}
