import React from "react";
import axios from "axios";

export default function tests({ post }) {
  return (
    <div>
      <p>{post.id}</p>
    </div>
  );
}

export const getStaticPaths = async () => {
  const { data } = await axios.get(
    "https://60531f7945e4b30017290de9.mockapi.io/dogs"
  );

  const paths = data.map(({ dog, id }) => ({
    params: {
      id: dog,
      query: {
        qw: 1,
      },
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (props) => {
  const {
    data: [post],
  } = await axios.get(
    `https://60531f7945e4b30017290de9.mockapi.io/dogs?dog=${props.params.id}`
  );
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};
