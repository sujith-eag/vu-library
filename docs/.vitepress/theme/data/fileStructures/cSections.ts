  
  
  export const krCBook = [
    {
  title: 'C Programming Book',
  items: [  
    {
      title: 'Introduction to C',
      items: [
        { label: 'Introduction to C - Part 1', link: '/c/k&r_c_book/c0-introduction-p-c-0' },
        { label: 'Introduction to C - Part 2', link: '/c/k&r_c_book/c0-introduction-p-c-1' },
        { label: 'Introduction to C - Part 3', link: '/c/k&r_c_book/c0-introduction-p-c-2' },
        { label: 'Basic Syntax', link: '/c/k&r_c_book/c1-basic-syntax' },
        { label: 'Types, Operators, Expressions', link: '/c/k&r_c_book/c2-types-operators-expressions' }
      ]
    },
    {
      title: 'Program Control & Structure',
      items: [
        { label: 'Control Flow', link: '/c/k&r_c_book/c3-control-flow' },
        { label: 'Functions and Program Structure', link: '/c/k&r_c_book/c4-function-program-structure' }
      ]
    },
    {
      title: 'Pointers, Arrays & Structures',
      items: [
        { label: 'Pointers and Arrays', link: '/c/k&r_c_book/c5-pointers-arrays' },
        { label: 'Structures: Part 1', link: '/c/k&r_c_book/c6-1-structures' },
        { label: 'Structures: Part 2', link: '/c/k&r_c_book/c6-2-structures' }
      ]
    },
    {
      title: 'I/O & System Interface',
      items: [
        { label: 'Input/Output', link: '/c/k&r_c_book/c7-input-output' },
        { label: 'UNIX Interface', link: '/c/k&r_c_book/c8-unix-interface' }
        ]
      }
    ]
  }
  ];
  
  export const dsUsingC = [
    {
      title: 'Data Structures Using C',
      items: [
        {
          title: 'Stacks (Using Arrays)',
          items: [
            { label: 'Tower of Hanoi', link: '/c/ds_using_c/0_tower_of_hanoi' },
            { label: 'Stack Operations', link: '/c/ds_using_c/stack_array/1_stack_operations' },
            { label: 'Infix to Postfix Conversion', link: '/c/ds_using_c/stack_array/2_infix_postfix' },
            { label: 'Postfix Evaluation', link: '/c/ds_using_c/stack_array/3_postfix_evaluation' }
          ]
        },
        {
          title: 'Queues and Stacks',
          items: [
            { label: 'Queue Implementation', link: '/c/ds_using_c/quequ_stack/4_queue' },
            { label: 'Circular Queue', link: '/c/ds_using_c/quequ_stack/5_cir_queue' }
          ]
        },
        {
          title: 'Linked Lists',
          items: [
            { label: 'Singly Linked List', link: '/c/ds_using_c/linked_list/6_singly_link_list' },
            { label: 'Singly Linked List (Full)', link: '/c/ds_using_c/linked_list/7_singly_link_list_full' },
            { label: 'Circular Singly Linked List', link: '/c/ds_using_c/linked_list/8_circular_singly_linked_list' },
            { label: 'Doubly Linked List', link: '/c/ds_using_c/linked_list/9_doubly_linked_list' },
            { label: 'Circular Doubly Linked List', link: '/c/ds_using_c/linked_list/10_circular_doubly_linked_list copy' },
            { label: 'Stack using Linked List', link: '/c/ds_using_c/linked_list/11_stack_linked_list' },
            { label: 'Queue using Linked List', link: '/c/ds_using_c/linked_list/12_queue_linked_list' },
            { label: 'Binary Tree', link: '/c/ds_using_c/linked_list/13_binary_tree' }
          ]
        }
      ]
    }
  ];
  

  export const cSection = [...krCBook, ...dsUsingC ];
  