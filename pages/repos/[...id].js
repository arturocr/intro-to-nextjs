import fs from 'fs';
import path from 'path';

import { useRouter } from 'next/router';

import HomeLink from '../../components/home-link';
import Repo from '../../components/repo-item';

const Repository = ({ repo }) => {
  const router = useRouter();
  return (
    <>
      <HomeLink />
      <h1 className='text-4xl font-semibold tracking-tighter'>Repo w/ SSG</h1>
      {router.isFallback ? <p>Generating...</p> : <Repo {...repo} />}
    </>
  );
};

export const getStaticPaths = async () => {
  const dataDir = path.resolve(process.cwd(), 'data');
  const filePath = path.join(dataDir, 'repos.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const repos = JSON.parse(fileContents);

  const paths = repos.map(repo => ({
    params: { id: [repo] },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const data = await fetch(
    `https://intro-to-nextjs.vercel.app/api/repo?id=${encodeURIComponent(
      params.id
    )}`
  );
  const repoData = await data.json();

  return {
    props: {
      repo: repoData,
    },
    revalidate: 20,
  };
};

export default Repository;
