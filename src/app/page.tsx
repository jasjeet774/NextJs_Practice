'use client';
import Button from '../components/button';

export default function Home() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to MyApp</h1>
      <Button text="Click Me" onClick={handleClick} />
    </div>
  );
}
