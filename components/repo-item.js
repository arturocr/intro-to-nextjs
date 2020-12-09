import Link from 'next/link';

const RepoItem = ({
  name,
  full_name,
  stargazers_count = 0,
  forks_count = 0,
  watchers_count = 0,
}) => (
  <div className='p-4 transition-shadow border border-purple-100 rounded-md shadow-lg w-96 hover:shadow-xl'>
    {!name ? (
      <p>Loading...</p>
    ) : (
      <>
        <h3 className='font-semibold'>
          <Link href={`/repos/${encodeURIComponent(full_name)}`}>
            <a>{name}</a>
          </Link>
        </h3>
        <p className='mb-2'>
          <small>{full_name}</small>
        </p>
        <span className='inline-flex items-center px-2 py-1 mr-2 text-xs bg-purple-100 border border-purple-200 rounded-md'>
          {stargazers_count}{' '}
          <svg
            aria-hidden='true'
            className='w-4 h-4 ml-1'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
          </svg>
        </span>
        <span className='inline-flex items-center px-2 py-1 mr-2 text-xs bg-purple-100 border border-purple-200 rounded-md'>
          {forks_count}{' '}
          <svg
            aria-hidden='true'
            className='w-4 h-4 ml-1'
            fill='currentColor'
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z'></path>
          </svg>
        </span>
        <span className='inline-flex items-center px-2 py-1 text-xs bg-purple-100 border border-purple-200 rounded-md'>
          {watchers_count}{' '}
          <svg
            className='w-4 h-4 ml-1'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
            <path
              fillRule='evenodd'
              d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
              clipRule='evenodd'
            />
          </svg>
        </span>
      </>
    )}
  </div>
);

export default RepoItem;
