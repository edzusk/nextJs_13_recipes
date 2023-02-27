import RecepieFilter from "./components/RecepieFilter/RecepieFilter";

const RecepiesLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) => {
  return (
    <section>
      <RecepieFilter/>
      {/* Include shared UI here e.g. a header or sidebar */}
      {children}
    </section>
  );
}

export default RecepiesLayout;
