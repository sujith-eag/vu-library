export const osIntroduction = [
    {
      title: "Introduction",
      items: [
        { label: "OS Intro", link: "/os/c01_introduction/1_1_os" },
        { label: "OS Operations", link: "/os/c01_introduction/1_5_os_operations" },
        { label: "Environments", link: "/os/c01_introduction/1_11_environments" },
      ]
    }
  ];
  
  export const osSystemStructure = [
    {
      title: "System Structure",
      items: [
        { label: "OS Services", link: "/os/c02_system_structure/2_1_os_services" },
        { label: "System Calls", link: "/os/c02_system_structure/2_3_system_calls" },
        { label: "Types of System Calls", link: "/os/c02_system_structure/2_4_types_system_calls" },
        { label: "System Programs", link: "/os/c02_system_structure/2_5_system_programs" },
        { label: "OS Structure", link: "/os/c02_system_structure/2_7_os_structure" },
        { label: "System Boot", link: "/os/c02_system_structure/2_10_system_boot" },
      ]
    }
  ];
  
  export const osProcessConcept = [
    {
      title: "Process Concept",
      items: [
        { label: "Process Concept", link: "/os/c03_process_concept/3_1_process_concept" },
        { label: "Process Scheduling", link: "/os/c03_process_concept/3_2_process_scheduling" },
        { label: "Interprocess Communication", link: "/os/c03_process_concept/3_4_interprocess_communication" },
      ]
    }
  ];
    
  export const osProcessScheduling = [
    {
      title: "Process Scheduling",
      items: [
        { label: "Process Scheduling", link: "/os/c05_process_scheduling/5_1_process_scheduling" },
        { label: "Scheduling Algorithms", link: "/os/c05_process_scheduling/5_3_1_scheduling_algorithms" },
        { label: "SJF Scheduling", link: "/os/c05_process_scheduling/5_3_2_sjf" },
        { label: "Priority Scheduling", link: "/os/c05_process_scheduling/5_3_3_priority_scheduling" },
        { label: "Round Robin", link: "/os/c05_process_scheduling/5_3_4_round_robin" },
        { label: "Multilevel Queue", link: "/os/c05_process_scheduling/5_3_5_multilevel_queue" },
      ]
    }
  ];
  
  export const osSynchronization = [
    {
      title: "Synchronization",
      items: [
        { label: "Process Synchronization", link: "/os/c06_synchronization/6_1_process_sync" },
        { label: "Critical Section", link: "/os/c06_synchronization/6_2_critical_section" },
        { label: "Mutex Locks", link: "/os/c06_synchronization/6_5_mutex_locks" },
        { label: "Semaphores", link: "/os/c06_synchronization/6_6_semaphores" },
        { label: "Classic Problems", link: "/os/c06_synchronization/6_7_classic_problems" },
      ]
    }
  ];
  
  export const osDeadlocks = [
    {
      title: "Deadlocks",
      items: [
        { label: "Deadlock Intro", link: "/os/c07_deadlocks/7_1_deadlock" },
        { label: "Deadlock Prevention", link: "/os/c07_deadlocks/7_2_deadlock_prevention" },
        { label: "Deadlock Avoidance", link: "/os/c07_deadlocks/7_3_deadlock_avoidance" },
        { label: "Deadlock Recovery", link: "/os/c07_deadlocks/7_4_deadlock_recovery" },
      ]
    }
  ];
  
  export const osMemoryManagement = [
    {
      title: "Memory Management",
      items: [
        { label: "Memory Management", link: "/os/c08_memory_management/8_1_memory_management" },
        { label: "Paging", link: "/os/c08_memory_management/8_2_paging" },
        { label: "Page Replacement", link: "/os/c08_memory_management/8_3_replacement" },
      ]
    }
  ];

  
  export const osSection = [
    ...osIntroduction,
    ...osSystemStructure,
    ...osProcessConcept,
    // ...osMultithreaded,
    ...osProcessScheduling,
    ...osSynchronization,
    ...osDeadlocks,
    ...osMemoryManagement,
    // ...osVirtualMemory,
    // ...osFileSystem,
    // ...osFileSystemImplementation,
    // ...osMassStorage,
    // ...osIO,
  ];
  
  

  
  
  
  
  
  
  //   Not Done yet
  export const osMultithreaded = [
    {
      title: "Multithreaded",
      items: [
        { label: "Multithreaded", link: "/os/c04_multithreaded/index" },
      ]
    }
  ];

  export const osVirtualMemory = [
    {
      title: "C09 Virtual Memory",
      items: [
        { label: "Virtual Memory", link: "/os/c09_virtual_memory/index" },
      ]
    }
  ];
  
  export const osFileSystem = [
    {
      title: "C10 File System",
      items: [
        { label: "File System", link: "/os/c10_file_system/index" },
      ]
    }
  ];
  
  export const osFileSystemImplementation = [
    {
      title: "C11 Implementing File System",
      items: [
        { label: "Implementing File System", link: "/os/c11_implimenting_file_system/index" },
      ]
    }
  ];
  
  export const osMassStorage = [
    {
      title: "C12 Mass Storage Structure",
      items: [
        { label: "Mass Storage Structure", link: "/os/c12_mass_storage_structure/index" },
      ]
    }
  ];
  
  export const osIO = [
    {
      title: "C13 I/O Systems",
      items: [
        { label: "I/O Systems", link: "/os/c13_io_systems/index" },
      ]
    }
  ];


