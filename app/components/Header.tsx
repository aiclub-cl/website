import Image from "next/image";

export default function Header() {
  return (
    <header className="p-5">
      <Image
        src="/logo.svg"
        alt="Logo"
        width="100"
        height="30"
      />
    </header>
  );
}