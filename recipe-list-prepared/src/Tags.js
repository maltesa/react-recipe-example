import React from "react";

export const TagList = ({ tags }) =>
  tags.map((tag, i) => <Tag key={i} tag={tag} />);

export const Tag = ({ tag }) => <span className="tag">#{tag}</span>;
