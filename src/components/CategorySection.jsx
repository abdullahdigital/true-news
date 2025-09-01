import React from 'react';
import News from './News';

const CategorySection = (props) => {
  const categories = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];

  return (
    <div className="category-sections container mx-auto px-4 py-8">
      {categories.map((category) => (
        <section key={category} className="my-2">
          <h2 className="text-center text-5xl font-bold mb-2 pt-10 text-[var(--text-color)]">{category} News</h2>
          <News key={category} setProgress={props.setProgress} pageSize={8} category={category.toLowerCase()} showHeading={false} />
        </section>
      ))}
    </div>
  );
};

export default CategorySection;