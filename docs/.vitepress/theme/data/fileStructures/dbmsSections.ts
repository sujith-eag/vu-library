const sqlSection = [
    {
      title: 'SQL',
      items: [
        { label: '0 Querying', link: '/dbms/sql/0_query' },
        { label: '1 Relating Data', link: '/dbms/sql/1_relating' },
        { label: '2 Designing Tables', link: '/dbms/sql/2_designing' },
        { label: '3 Writing Queries', link: '/dbms/sql/3_writing' },
        { label: '4 Viewing & Selecting', link: '/dbms/sql/4_viewing' },
        { label: '5 Optimizing Queries', link: '/dbms/sql/5_optimising' },
        { label: '6 Scaling & Performance', link: '/dbms/sql/6_scaling' }
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