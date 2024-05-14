const HightlightString = ({ text, icon }: { text: string; icon: string }) => {
  return (
    <span className="text-primary border-muted-foreground/20 border-[0.5px] bg-muted p-1 rounded hover:bg-muted-foreground transition-colors font-space text-nowrap font-light">
      {icon} {text}
    </span>
  );
};

export default HightlightString;
