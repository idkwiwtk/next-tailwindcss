import React from "react";

type LayoutProps = {
  children?: React.ReactNode;
  className?: string;
  divider?: React.ReactNode;
};

const Layout = ({ children, className, divider }: LayoutProps) => {
  const childrenArrray = React.Children.toArray(children);

  const isLast = (index: number) => index + 1 === childrenArrray.length;

  return (
    <div className={className}>
      {childrenArrray.map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {!isLast(index) && divider}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Layout;
