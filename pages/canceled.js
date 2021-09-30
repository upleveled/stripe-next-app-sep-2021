import Link from 'next/link';

export default function Canceled() {
  return (
    <section className="error">
      <h1>Failed Transaction</h1>
      <Link href="/">
        <a>home</a>
      </Link>
    </section>
  );
}
