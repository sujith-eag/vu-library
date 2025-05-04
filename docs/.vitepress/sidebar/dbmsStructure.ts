
export function dbmsSidebar() {
  return [
    {
      text: 'DBMS',
      collapsed: true,
      items: [...sqlSection, ...mongoSection, ...otherDbSection].map(section => ({
        ...section,
        collapsed: true
      }))
    }
  ];
}


// ─────────────────────────────
// DBMS sections
// ─────────────────────────────

const sqlSection = [
  {
    text: 'SQL',
    items: [
      { text: '0 Querying', link: '/dbms/sql/0_query.md' },
      { text: '1 Relating Data', link: '/dbms/sql/1_relating.md' },
      { text: '2 Designing Tables', link: '/dbms/sql/2_designing.md' },
      { text: '3 Writing Queries', link: '/dbms/sql/3_writing.md' },
      { text: '4 Viewing & Selecting', link: '/dbms/sql/4_viewing.md' },
      { text: '5 Optimizing Queries', link: '/dbms/sql/5_optimising.md' },
      { text: '6 Scaling & Performance', link: '/dbms/sql/6_scaling.md' }
    ]
  }
];

const mongoSection = [
  {
    text: 'MongoDB',
    items: [
      // MongoDB topics here as they are created
    ]
  }
];

const otherDbSection = [
  {
    text: 'Other Databases',
    items: [
      // Reserved for future: PostgreSQL, Redis, Cassandra, etc.
    ]
  }
];
