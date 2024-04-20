const HightlightString = ({ text, icon }: { text: string; icon: string }) => {
  return (
    <span className="text-primary bg-slate-800 p-1 rounded hover:bg-slate-700 transition-colors font-space text-nowrap">
      {icon} {text}
    </span>
  );
};

export default HightlightString;
