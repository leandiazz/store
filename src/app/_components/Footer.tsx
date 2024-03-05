export default function Footer() {
  return (
    <footer>
      <div className="text-center leading-[3rem] opacity-70">
        © {new Date().getFullYear()} <span className="font-logo">Cruel Summer</span>
      </div>
    </footer>
  );
}
