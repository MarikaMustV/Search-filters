import React from "react";

type Props = {
  name: string,
  children: React.ReactNode,
}

export default function Category({ name, children }: Props) {
  return (
    <div className="category">
      <div className="category-name">{name}</div>
      {children}
    </div>
  );
}
