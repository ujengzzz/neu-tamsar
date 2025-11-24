const ScrapbookDecorations = () => {
  return (
    <>
      {/* Floating decorative shapes */}
      <div className="absolute top-10 right-20 w-6 h-6 bg-pink-300 rounded-full opacity-40 animate-float" />
      <div className="absolute top-40 left-16 w-8 h-8 bg-blue-300 rounded-full opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 right-32 w-10 h-10 bg-yellow-300 rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }} />
    </>
  );
};

export default ScrapbookDecorations;
