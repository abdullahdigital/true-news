import React from 'react';
import News from './News';

const CategorySection = (props) => {
  const categories = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];

  return (
    <div id="categories" className="container-premium py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <section key={category} className="glass-surface elevate-sm rounded-[var(--radius-lg)] p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[var(--text-color)]">{category} News</h2>
              <a href={`/${category.toLowerCase()}`} className="text-[var(--accent-color)]">View all</a>
            </div>
            <div className="mt-4">
              <News key={category} setProgress={props.setProgress} pageSize={8} category={category.toLowerCase()} showHeading={false} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
