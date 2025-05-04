export function javaScriptSidebar() {
    return [
      {
        text: '1 Data Types',
        collapsed: true,
        items: [
          {
            text: '01 Basics',
            collapsed: true,
            items: [
              { text: '0 Lexial Structure', link: '/java-script/1-data-types/01-basics/0-lexial_structure' },
              { text: '1 Values Types', link: '/java-script/1-data-types/01-basics/1-values-types' },
              { text: '2 Variables', link: '/java-script/1-data-types/01-basics/2-variables' },
              { text: '3 Methods', link: '/java-script/1-data-types/01-basics/3-methods' },
              { text: '4 Scope', link: '/java-script/1-data-types/01-basics/4-scope' }
            ]
          },
          {
            text: '02 Number Type',
            collapsed: true,
            items: [
              { text: '1 Number Types', link: '/java-script/1-data-types/02-number_type/1-number-types' },
              { text: '2 Number Methods', link: '/java-script/1-data-types/02-number_type/2-number-methods' },
              { text: '3 Math Object', link: '/java-script/1-data-types/02-number_type/3-math_object' }
            ]
          },
          {
            text: '03 String Type',
            collapsed: true,
            items: [
              { text: '1 String Type', link: '/java-script/1-data-types/03-string_type/1-string_type' },
              { text: '2 String Methods', link: '/java-script/1-data-types/03-string_type/2-string_methods' },
              { text: '3 Modifying String', link: '/java-script/1-data-types/03-string_type/3-modifying_string' }
            ]
          },
          {
            text: '04 Boolean Type',
            link: '/java-script/1-data-types/04-boolean_type/index'
          },
          {
            text: '05 Type Conversion',
            collapsed: true,
            items: [
              { text: '1 Type Conversions', link: '/java-script/1-data-types/05-type_conversion/1-type_conversions' },
              { text: '2 Explicit Conversions', link: '/java-script/1-data-types/05-type_conversion/2-explicit_conversions' },
              { text: '3 Object To Primitive', link: '/java-script/1-data-types/05-type_conversion/3-object_to_primitive' }
            ]
          }
        ]
      },
      {
        text: '2 Expressions Operators',
        collapsed: true,
        items: [
          { text: '1 Expressions', link: '/java-script/2-expressions_operators/1-expressions' },
          { text: '2 Operators', link: '/java-script/2-expressions_operators/2-operators' },
          { text: '3 Ternary Operator', link: '/java-script/2-expressions_operators/3-ternary_operator' },
          { text: '4 Logical Operators', link: '/java-script/2-expressions_operators/4-logical_operators' },
          { text: '5 Nullish Coalescing', link: '/java-script/2-expressions_operators/5-nullish_coalescing' }
        ]
      },
      {
        text: '3 Control Flow',
        collapsed: true,
        items: [
          {
            text: 'Conditionals',
            collapsed: true,
            items: [
              { text: '1 Control Statements', link: '/java-script/3-control-flow/conditionals/1-control_statements' },
              { text: '2 Conditionals', link: '/java-script/3-control-flow/conditionals/2-conditionals' },
              { text: '3 Switch Case', link: '/java-script/3-control-flow/conditionals/3-switch-case' }
            ]
          },
          {
            text: 'Loops',
            collapsed: true,
            items: [
              { text: '1 While Do', link: '/java-script/3-control-flow/loops/1-while_do' },
              { text: '2 For Loop', link: '/java-script/3-control-flow/loops/2-for_loop' },
              { text: '3 For Of Loop', link: '/java-script/3-control-flow/loops/3-for_of_loop' },
              { text: '4 For In Loop', link: '/java-script/3-control-flow/loops/4-for_in_loop' }
            ]
          },
          {
            text: 'Jump Statements',
            collapsed: true,
            items: [
              { text: '1 Label Return', link: '/java-script/3-control-flow/jump_statements/1-label_return' },
              { text: '2 Continue Break', link: '/java-script/3-control-flow/jump_statements/2-continue_break' },
              { text: '3 Throw Catch', link: '/java-script/3-control-flow/jump_statements/3-throw_catch' }
            ]
          }
        ]
      },
      {
        text: '4 Objects',
        collapsed: true,
        items: [
          {
            text: 'Object Basics',
            collapsed: true,
            items: [
              { text: '1 Object', link: '/java-script/4-objects/1-object_basics/1-object' },
              { text: '2 Object Characters', link: '/java-script/4-objects/1-object_basics/2-object-characters' },
              { text: '3 Quering Setting Properties', link: '/java-script/4-objects/1-object_basics/3-quering_setting_properties' },
              { text: '4 Symbols', link: '/java-script/4-objects/1-object_basics/4-symbols' },
              { text: '5 Object Key', link: '/java-script/4-objects/1-object_basics/5-object_key' },
              { text: '6 Deleting Propety', link: '/java-script/4-objects/1-object_basics/6-deleting_propety' }
            ]
          },
          {
            text: 'Object Detailed',
            collapsed: true,
            items: [
              { text: '1 Object', link: '/java-script/4-objects/2-object_detailed/1-object' },
              { text: '2 Object Characters', link: '/java-script/4-objects/2-object_detailed/2-object-characters' },
              { text: '3 Quering Setting Properties', link: '/java-script/4-objects/2-object_detailed/3-quering_setting_properties' },
              { text: '4 Symbols', link: '/java-script/4-objects/2-object_detailed/4-symbols' },
              { text: '5 Object Key', link: '/java-script/4-objects/2-object_detailed/5-object_key' }
            ]
          }
        ]
      },
      {
        text: '5 Arrays',
        collapsed: true,
        items: [
          {
            text: '01 Array Basics',
            collapsed: true,
            items: [
              { text: '1 Array Creation', link: '/java-script/5-arrays/01-array_basics/1-array_creation' },
              { text: '2 Array Acess Write', link: '/java-script/5-arrays/01-array_basics/2-array-acess_write' },
              { text: '3 Adding Removing', link: '/java-script/5-arrays/01-array_basics/3-adding_removing' },
              { text: '4 Iterating Array', link: '/java-script/5-arrays/01-array_basics/4-iterating_array' },
              { text: '5 Basic Array Methods', link: '/java-script/5-arrays/01-array_basics/5-basic_array_methods' },
              { text: '6 Array Like Objects', link: '/java-script/5-arrays/01-array_basics/6-array-like-objects' }
            ]
          },
          {
            text: '02 Array Methods',
            collapsed: true,
            items: [
              { text: '1 Array Iterators', link: '/java-script/5-arrays/02-array_methods/1-array_iterators' },
              { text: '2 Map Method', link: '/java-script/5-arrays/02-array_methods/2-map_method' },
              { text: '3 Filter Method', link: '/java-script/5-arrays/02-array_methods/3-filter_method' },
              { text: '4 Reduce Method', link: '/java-script/5-arrays/02-array_methods/4-reduce_method' },
              { text: '5 Every Some Find', link: '/java-script/5-arrays/02-array_methods/5-every_some_find' },
              { text: '6 Splice Method', link: '/java-script/5-arrays/02-array_methods/6-splice_method' },
              { text: '7 Manipulating Arrays', link: '/java-script/5-arrays/02-array_methods/7-manipulating_arrays' },
              { text: '8 Sort Shuffle', link: '/java-script/5-arrays/02-array_methods/8-sort_shuffle' },
              { text: '9 Combining Arrays', link: '/java-script/5-arrays/02-array_methods/9-combining_arrays' }
            ]
          },
          { text: '5.6 Rest Spread', link: '/java-script/5-arrays/5.6-rest-spread' }
        ]
      },
      {
        text: '6 Functions',
        collapsed: true,
        items: [
          { text: '3 Function', link: '/java-script/6-functions/3-function' },
          { text: '3.1 Defining Function', link: '/java-script/6-functions/3.1-defining-function' },
          { text: '3.2 Arrow Function', link: '/java-script/6-functions/3.2-arrow-function' },
          { text: '3.3 Scope Of Variable', link: '/java-script/6-functions/3.3-scope-of-variable' },
          { text: '3.4 Parameters Arguments', link: '/java-script/6-functions/3.4-parameters-arguments' },
          { text: '3.5 Return Recursion Call Stack', link: '/java-script/6-functions/3.5-return-recursion-call-stack' },
          { text: '3.6 Scheduling', link: '/java-script/6-functions/3.6-scheduling' },
          { text: '3.7 Decorators', link: '/java-script/6-functions/3.7-decorators' },
          { text: '3.8 Function Object', link: '/java-script/6-functions/3.8-function-object' }
        ]
      }
    ];
  }
  