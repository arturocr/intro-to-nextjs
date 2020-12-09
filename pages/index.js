import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className='text-5xl font-extrabold tracking-tighter'>
        Intro to Next.js!
      </h1>
      <Link href='repos/csr'>
        <a className='btn'>
          Repos w/ <code>CSR</code>
        </a>
      </Link>
      <Link href='repos/ssg'>
        <a className='btn'>
          Repos w/ <code>SSG</code>
        </a>
      </Link>
      <Link href='repos/ssr'>
        <a className='btn'>
          Repos w/ <code>SSR</code>
        </a>
      </Link>
    </>
  );
}
