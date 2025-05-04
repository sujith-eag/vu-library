export function pythonSidebar() {
    return [
      {
        text: 'Python',
        collapsed: false,
        items: [
          {
            text: 'Col Extra',
            collapsed: true,
            items: [
              { text: 'Unit 1: Answer 1', link: '/python/col_extra/unit_1_ans1.md' },
              { text: 'Unit 1: Answer 2', link: '/python/col_extra/unit_1_ans2.md' },
              { text: 'Unit 1: Question', link: '/python/col_extra/unit_1_q.md' },
              { text: 'Unit 2: Answer 1', link: '/python/col_extra/unit_2_ans_1.md' },
              { text: 'Unit 2: Answer 2', link: '/python/col_extra/unit_2_ans_2.md' },
              { text: 'Unit 2: Question', link: '/python/col_extra/unit_2_q.md' },
              { text: 'Unit 3: Answer 1', link: '/python/col_extra/unit_3_ans_1.md' },
              { text: 'Unit 3: Answer 2', link: '/python/col_extra/unit_3_ans_2.md' },
              { text: 'Unit 3: Question', link: '/python/col_extra/unit_3_q.md' },
              { text: 'Unit 4: Answer 1', link: '/python/col_extra/unit_4_ans_1.md' },
              { text: 'Unit 4: Answer 2', link: '/python/col_extra/unit_4_ans_2.md' },
              { text: 'Unit 4: Question', link: '/python/col_extra/unit_4_q.md' },
              { text: 'Unit 5: Answer 1', link: '/python/col_extra/unit_5_ans_1.md' },
              { text: 'Unit 5: Answer 2', link: '/python/col_extra/unit_5_ans_2.md' },
              { text: 'Unit 5: Question', link: '/python/col_extra/unit_5_q.md' }
            ]
          },
          {
            text: 'I/O Operators',
            collapsed: true,
            items: [
              { text: 'Input and Output', link: '/python/3io_operators/3input_output.md' }
            ]
          },
          {
            text: 'Control Statements',
            collapsed: true,
            items: [
              { text: 'Conditionals', link: '/python/4control_statements/1_conditional.md' },
              { text: 'Match Case', link: '/python/4control_statements/2_match_case.md' },
              { text: 'Range Function', link: '/python/4control_statements/3_range.md' },
              { text: 'For and While Loops', link: '/python/4control_statements/4_for_while.md' }
            ]
          },
          {
            text: 'Exceptions',
            collapsed: true,
            items: [
              { text: 'Errors', link: '/python/7exceptions/7_1_errors.md' },
              { text: 'Handling Errors', link: '/python/7exceptions/7_2_handling_errors.md' },
              { text: 'Unit Testing', link: '/python/7exceptions/7_3_unit_testing.md' },
              { text: 'Additional Topics', link: '/python/7exceptions/7_4_additionaal.md' }
            ]
          },
          {
            text: 'OOP',
            collapsed: true,
            items: [
              { text: 'OOP Basics', link: '/python/6oop/6_1_oop.md' },
              { text: 'Class Definition', link: '/python/6oop/6_2_class.md' },
              { text: 'Method Types', link: '/python/6oop/6_3_method_types.md' },
              { text: 'Class Attributes', link: '/python/6oop/6_4_class_attributes.md' },
              { text: 'Inheritance', link: '/python/6oop/6_5_inheritance.md' },
              { text: 'Inheritance (Copy)', link: '/python/6oop/6_6_inheritance copy.md' }
            ]
          },
          {
            text: 'NumPy',
            collapsed: true,
            items: [
              { text: 'Introduction', link: '/python/10numpy/01_numpy_intro.md' },
              { text: 'Creating Arrays', link: '/python/10numpy/21_creating_arrays.md' },
              { text: 'Array Dimensions', link: '/python/10numpy/12_array_dimensions.md' },
              { text: 'Array Attributes', link: '/python/10numpy/13_array_atributes.md' },
              { text: 'Slicing and Indexing', link: '/python/10numpy/32_slicing_indexing.md' },
              { text: 'Modifying Arrays', link: '/python/10numpy/30_modifying_arrays.md' },
              { text: 'Transposing Arrays', link: '/python/10numpy/31_transposing_arrays.md' },
              { text: 'Math Operators', link: '/python/10numpy/41_math_operators.md' },
              { text: 'Unique Sets', link: '/python/10numpy/43_unique_set_linear.md' },
              { text: 'Array Comparison', link: '/python/10numpy/50_array_comparison.md' },
              { text: 'Boolean Indexing', link: '/python/10numpy/51_boolean_indexing.md' },
              { text: 'Masking', link: '/python/10numpy/52_numpy_masking.md' },
              { text: 'Fancy Indexing', link: '/python/10numpy/60_fancy_indexing.md' },
              { text: 'Matrix Operations', link: '/python/10numpy/71_matrix_operations.md' },
              { text: 'Universal Functions', link: '/python/10numpy/80_universal_functions.md' },
              { text: 'Broadcasting', link: '/python/10numpy/90_broadcasting.md' },
              { text: 'Summary', link: '/python/10numpy/99_numpy_summary.md' }
            ]
          },
          {
            text: 'Data Types',
            collapsed: true,
            items: [
              {
                text: 'Primitive Types',
                collapsed: true,
                items: [
                  { text: 'Variables', link: '/python/1data-types/primitive-types/1variables.md' },
                  { text: 'Data Types', link: '/python/1data-types/primitive-types/2datatypes.md' },
                  { text: 'Operators', link: '/python/1data-types/primitive-types/3operators.md' },
                  { text: 'Integer and Float', link: '/python/1data-types/primitive-types/4int_float.md' },
                  { text: 'String Manipulation', link: '/python/1data-types/primitive-types/5string-mani.md' },
                  { text: 'String Methods', link: '/python/1data-types/primitive-types/6string-meth.md' }
                ]
              },
              {
                text: 'Complex Types',
                collapsed: true,
                items: [
                  {
                    text: 'Lists',
                    collapsed: true,
                    items: [
                      { text: 'List Basics', link: '/python/1data-types/complex-types/4list/4.0_lists.md' },
                      { text: 'Updating Lists', link: '/python/1data-types/complex-types/4list/4.1_updating_list.md' },
                      { text: 'List Methods', link: '/python/1data-types/complex-types/4list/4.2_list_methods.md' },
                      { text: 'Map and Filter', link: '/python/1data-types/complex-types/4list/4.3_map_filter.md' },
                      { text: 'List Comprehension', link: '/python/1data-types/complex-types/4list/4.4_list_comprehension.md' }
                    ]
                  },
                  {
                    text: 'Tuples and Sets',
                    collapsed: true,
                    items: [
                      { text: 'Tuples', link: '/python/1data-types/complex-types/5tuple_set/5tuples.md' },
                      { text: 'Sets', link: '/python/1data-types/complex-types/5tuple_set/6sets.md' },
                      { text: 'Arrays', link: '/python/1data-types/complex-types/5tuple_set/4arrays.md' }
                    ]
                  },
                  {
                    text: 'Dictionaries',
                    collapsed: true,
                    items: [
                      { text: 'Basics', link: '/python/1data-types/complex-types/7dictionary/7.0_dictinaries.md' },
                      { text: 'Accessing', link: '/python/1data-types/complex-types/7dictionary/7.1_accessing_dictionary.md' },
                      { text: 'Manipulating', link: '/python/1data-types/complex-types/7dictionary/7.2_manipulating.md' }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
  }
  