// docs/.vitepress/sidebar/os.js

export function osSidebar() {
    return [
      {
        text: 'OS',
        collapsed: false,
        items: [
          {
            text: 'C01 Introduction',
            collapsed: true,
            items: [
              { text: '1.1 OS', link: '/os/c01_introduction/1_1_os' },
              { text: '1.5 OS Operations', link: '/os/c01_introduction/1_5_os_operations' },
              { text: '1.11 Environments', link: '/os/c01_introduction/1_11_environments' }
            ]
          },
          {
            text: 'C02 System Structure',
            collapsed: true,
            items: [
              { text: '2.1 OS Services', link: '/os/c02_system_structure/2_1_os_services' },
              { text: '2.3 System Calls', link: '/os/c02_system_structure/2_3_system_calls' },
              { text: '2.4 Types of System Calls', link: '/os/c02_system_structure/2_4_types_system_calls' },
              { text: '2.5 System Programs', link: '/os/c02_system_structure/2_5_system_programs' },
              { text: '2.7 OS Structure', link: '/os/c02_system_structure/2_7_os_structure' },
              { text: '2.10 System Boot', link: '/os/c02_system_structure/2_10_system_boot' }
            ]
          },
          {
            text: 'C03 Process Concept',
            collapsed: true,
            items: [
              { text: '3.1 Process Concept', link: '/os/c03_process_concept/3_1_process_concept' },
              { text: '3.2 Process Scheduling', link: '/os/c03_process_concept/3_2_process_scheduling' },
              { text: '3.4 Interprocess Communication', link: '/os/c03_process_concept/3_4_interprocess_communication' }
            ]
          },
          {
            text: 'C04 Multithreaded',
            link: '/os/c04_multithreaded/index' // assumed index.md exists
          },
          {
            text: 'C05 Process Scheduling',
            collapsed: true,
            items: [
              { text: '5.1 Process Scheduling', link: '/os/c05_process_scheduling/5_1_process_scheduling' },
              { text: '5.3.1 Scheduling Algorithms', link: '/os/c05_process_scheduling/5_3_1_scheduling_algorithms' },
              { text: '5.3.2 SJF', link: '/os/c05_process_scheduling/5_3_2_sjf' },
              { text: '5.3.3 Priority Scheduling', link: '/os/c05_process_scheduling/5_3_3_priority_scheduling' },
              { text: '5.3.4 Round Robin', link: '/os/c05_process_scheduling/5_3_4_round_robin' },
              { text: '5.3.5 Multilevel Queue', link: '/os/c05_process_scheduling/5_3_5_multilevel_queue' }
            ]
          },
          {
            text: 'C06 Synchronization',
            collapsed: true,
            items: [
              { text: '6.1 Process Sync', link: '/os/c06_synchronization/6_1_process_sync' },
              { text: '6.2 Critical Section', link: '/os/c06_synchronization/6_2_critical_section' },
              { text: '6.5 Mutex Locks', link: '/os/c06_synchronization/6_5_mutex_locks' },
              { text: '6.6 Semaphores', link: '/os/c06_synchronization/6_6_semaphores' },
              { text: '6.7 Classic Problems', link: '/os/c06_synchronization/6_7_classic_problems' }
            ]
          },
          {
            text: 'C07 Deadlocks',
            collapsed: true,
            items: [
              { text: '7.1 Deadlock', link: '/os/c07_deadlocks/7_1_deadlock' },
              { text: '7.2 Deadlock Prevention', link: '/os/c07_deadlocks/7_2_deadlock_prevention' },
              { text: '7.3 Deadlock Avoidance', link: '/os/c07_deadlocks/7_3_deadlock_avoidance' },
              { text: '7.4 Deadlock Recovery', link: '/os/c07_deadlocks/7_4_deadlock_recovery' }
            ]
          },
          {
            text: 'C08 Memory Management',
            collapsed: true,
            items: [
              { text: '8.1 Memory Management', link: '/os/c08_memory_management/8_1_memory_management' },
              { text: '8.2 Paging', link: '/os/c08_memory_management/8_2_paging' },
              { text: '8.3 Replacement', link: '/os/c08_memory_management/8_3_replacement' }
            ]
          },
          {
            text: 'C09 Virtual Memory',
            link: '/os/c09_virtual_memory/index' // assumed index.md (excluding _index.md)
          },
          {
            text: 'C10 File System',
            link: '/os/c10_file_system/index' // assumed index.md
          },
          {
            text: 'C11 Implementing File System',
            link: '/os/c11_implimenting_file_system/index' // assumed index.md
          },
          {
            text: 'C12 Mass Storage Structure',
            link: '/os/c12_mass_storage_structure/index' // assumed index.md
          },
          {
            text: 'C13 I/O Systems',
            link: '/os/c13_io_systems/index' // assumed index.md
          },
          {
            text: 'OS MCA',
            collapsed: true,
            items: [
              { text: 'U1 QA', link: '/os/os_mca/os_u1_qa' },
              { text: 'U2 QA', link: '/os/os_mca/os_u2_qa' },
              { text: 'U2 QA 2', link: '/os/os_mca/os_u2_qa2' },
              { text: 'U3 QA', link: '/os/os_mca/os_u3_qa' },
              { text: 'U4 QA', link: '/os/os_mca/os_u4_qa' },
              { text: 'U4 QA 2', link: '/os/os_mca/os_u4_qa2' },
              { text: 'U5 QA', link: '/os/os_mca/os_u5_qa' }
            ]
          }
        ]
      }
    ]
  }
  