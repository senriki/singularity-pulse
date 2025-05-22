export default function QuoteBlock({ children, style = {} }) {
  return (
    <blockquote className="cyber-quote" style={style}>
      {children}
    </blockquote>
  );
}
