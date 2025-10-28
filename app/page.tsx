import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Image
        src="/turtle.jpeg"
        alt="Turtle"
        width={600}
        height={600}
        priority
      />
    </main>
  );
}
