interface Props {
  item?: string;
  children?: React.ReactNode;
  className?: string;
}

const Status = ({ item, children, className }: Props) => {
  return (
    <div className={className}>
      {item && <div>{item}</div>}
      {children}
    </div>
  );
};

export default Status;
