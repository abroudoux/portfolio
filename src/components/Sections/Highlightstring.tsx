const HightlightString = ({ text, icon }: { text: string; icon: string }) => {
  return (
    <span className="text-primary bg-muted p-1 rounded hover:bg-muted-foreground transition-colors font-space text-nowrap">
      {icon} {text}
    </span>
  );
};

export default HightlightString;
