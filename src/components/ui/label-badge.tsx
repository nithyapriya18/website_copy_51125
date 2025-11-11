export default function LabelBadge({ children }) {
  return (
    <div className="inline-flex px-2 py-1 border border-white/12 rounded-md">
      <span className="text-[11px] tracking-wide uppercase text-white/60 font-medium">
        {children}
      </span>
    </div>
  );
}
