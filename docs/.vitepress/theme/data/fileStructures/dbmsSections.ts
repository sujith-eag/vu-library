const sqlSection = [
    {
      title: 'SQL',
      items: [
        { label: 'Querying', link: '/dbms/sql/0_query' },
        { label: 'Relating Data', link: '/dbms/sql/1_relating' },
        { label: 'Designing Tables', link: '/dbms/sql/2_designing' },
        { label: 'Writing Queries', link: '/dbms/sql/3_writing' },
        { label: 'Viewing & Selecting', link: '/dbms/sql/4_viewing' },
        { label: 'Optimizing Queries', link: '/dbms/sql/5_optimising' },
        { label: 'Scaling & Performance', link: '/dbms/sql/6_scaling' }
      ]
    }
  ];
  
  const mongoSection = [
    {
      title: 'MongoDB',
      items: [
        // MongoDB topics here as they are created
      ]
    }
  ];
  
  const otherDbSection = [
    {
      title: 'Other Databases',
      items: [
        // Reserved for future: PostgreSQL, Redis, Cassandra, etc.
      ]
    }
  ];
  
export const dbmsSection = [...sqlSection, ...mongoSection, ...otherDbSection];