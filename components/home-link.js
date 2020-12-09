import Link from 'next/link';

const HomeLink = () => (
  <Link href='/'>
    <a className='text-purple-500 transition-colors hover:text-purple-600'>
      <svg
        className='w-8 h-8'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
      </svg>
    </a>
  </Link>
);

export default HomeLink;
