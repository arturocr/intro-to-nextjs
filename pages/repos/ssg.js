import fs from 'fs';
import path from 'path';

import HomeLink from '../../components/home-link';
import Repo from '../../components/repo-item';

const Repos = ({ repos }) => (
  <>
    <HomeLink />
    <h1 className='text-4xl font-semibold tracking-tighter'>Repos w/ SSG</h1>
    {repos.map(repo => (
      <Repo key={repo.name} {...repo} />
    ))}
  </>
);

export const getStaticProps = async () => {
  const dataDir = path.resolve(process.cwd(), 'data');
  const filePath = path.join(dataDir, 'repos.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const repos = JSON.parse(fileContents);

  const reposData = await Promise.all(
    repos.map(async repo => {
      const data = await fetch(
        `https://intro-to-nextjs-arturocr.vercel.app/api/repo?id=${encodeURIComponent(
          repo
        )}`
      );
      return await data.json();
    })
  );

  return {
    props: {
      repos: reposData,
    },
  };
};

export default Repos;
