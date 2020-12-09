import useSWR from 'swr';

import fetcher from '../../lib/fetcher';
import HomeLink from '../../components/home-link';
import RepoItem from '../../components/repo-item';
import REPOS from '../../data/repos';

const CSR = () => {
  const RepoElement = ({ id }) => {
    const { data } = useSWR(`/api/repo?id=${encodeURIComponent(id)}`, fetcher);
    return <RepoItem {...data} />;
  };

  return (
    <>
      <HomeLink />
      <h1 className='text-4xl font-semibold tracking-tighter'>Repos w/ CSR</h1>
      {REPOS.map(repo => (
        <RepoElement key={repo} id={repo} />
      ))}
    </>
  );
};

export default CSR;
