import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-10 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 grid grid-cols-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {["About", "Contact", "Privacy", "Terms"].map((item) => (
            <div key={item} className="pb-6">
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm leading-6 hover:underline"
              >
                {item}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-sm leading-5">
          Developed with ❤️ by Huuloc2026.
        </p>
      </div>
    </footer>
  );
}
