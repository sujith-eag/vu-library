
export function bashSidebar() {
    return [
      {
        text: 'Bash',
        collapsed: false,
        items: [
          {
            text: 'Bash Basics',
            collapsed: true,
            items: [
              { text: '1 Basics', link: '/linux/bash/01_bash_basics/bash-1_basics.md' },
              { text: '2 Bash Features', link: '/linux/bash/01_bash_basics/bash-2_bash_features.md' },
              { text: '3 Help Pages', link: '/linux/bash/01_bash_basics/bash-3_help_pages.md' },
              { text: '4 Variable Aliases', link: '/linux/bash/01_bash_basics/bash-4_variable_aliases.md' },
              { text: '6 Environment Subshell', link: '/linux/bash/01_bash_basics/bash-6_environment_subshell.md' }
            ]
          },
          {
            text: 'Basic Commands',
            collapsed: true,
            items: [
              { text: '5 Listing Files', link: '/linux/bash/02_basic_commands/bash-5_listing_files.md' },
              { text: '7 Storage Terminology', link: '/linux/bash/02_basic_commands/bash-7_storage_terminology.md' },
              { text: '8 Basic File Commands', link: '/linux/bash/02_basic_commands/bash-8_basic_file_commands.md' },
              { text: '8.1 BC & Date', link: '/linux/bash/02_basic_commands/bash-8.1_bc_date.md' },
              { text: '9 File Movement Commands', link: '/linux/bash/02_basic_commands/bash-9_file_movement_commands.md' }
            ]
          },
          {
            text: 'File Search & Edit',
            collapsed: true,
            items: [
              { text: '10 File Viewing & Editing', link: '/linux/bash/04_file_search_edit/bash-10_file_viewing_editing.md' },
              { text: '11 File Permissions', link: '/linux/bash/04_file_search_edit/bash-11_file_permissions.md' },
              { text: '12 Hard & Soft Links', link: '/linux/bash/04_file_search_edit/bash-12_hard_soft_links.md' },
              { text: '14 File Search', link: '/linux/bash/04_file_search_edit/bash-14_file_search.md' },
              { text: '16 Grep', link: '/linux/bash/04_file_search_edit/bash-16_grep.md' },
              { text: '17 Sed', link: '/linux/bash/04_file_search_edit/bash-17_sed.md' }
            ]
          },
          {
            text: 'Neovim',
            collapsed: true,
            items: [
              { text: 'NeoVim', link: '/linux/bash/03_neovim/bash-15_neo_vim.md' }
            ]
          },
          {
            text: 'Regex',
            collapsed: true,
            items: [
              { text: '13 Regex', link: '/linux/bash/06_regex/bash-13_regex.md' },
              { text: '13.1 Regex Expanded', link: '/linux/bash/06_regex/bash-13.1_regex_expanded.md' },
              { text: '13.2 Regex Matching', link: '/linux/bash/06_regex/bash-13.2_regex_matching.md' }
            ]
          },
          {
            text: 'Shell Scripting',
            collapsed: true,
            items: [
              { text: '18 Shell Script', link: '/linux/bash/07_shell_scripting/bash-18_shell_script.md' },
              { text: '18.1 Conditionals', link: '/linux/bash/07_shell_scripting/bash-18.1_conditionals.md' },
              { text: '18.2 Loop', link: '/linux/bash/07_shell_scripting/bash-18.2_loop.md' }
            ]
          }
        ]
      }
    ];
  }

  
export function linuxSidebar() {
    return [
      {
        text: 'Linux',
        collapsed: false,
        items: [
          {
            text: 'Linux OS',
            collapsed: true,
            items: [
              { text: '01 Linux Kernel', link: '/linux/linux_os/01_linux_kernel.md' },
              { text: '02 Process Management', link: '/linux/linux_os/02_process_management.md' },
              { text: '03 System Resources', link: '/linux/linux_os/03_system_resources.md' }
            ]
          },
          {
            text: 'Command Docs',
            collapsed: true,
            items: [
              { text: 'Bash Commands', link: '/linux/command-docs/bash-commands.md' },
              { text: 'CD (Change Directory)', link: '/linux/command-docs/cd-change-directory.md' },
              { text: 'Cat (Concatenate)', link: '/linux/command-docs/cat-concatenate.md' },
              { text: 'CP (Copy)', link: '/linux/command-docs/cp-copy.md' },
              { text: 'Cut with Delimiter', link: '/linux/command-docs/cut-with-delimiter.md' },
              { text: 'Echo', link: '/linux/command-docs/echo.md' },
              { text: 'Grep', link: '/linux/command-docs/grep.md' },
              { text: 'Head & Tail', link: '/linux/command-docs/head-tail.md' },
              { text: 'LS (List)', link: '/linux/command-docs/ls-list.md' },
              { text: 'MKDIR', link: '/linux/command-docs/mkdir.md' },
              { text: 'MV (Move)', link: '/linux/command-docs/mv-move.md' },
              { text: 'PWD', link: '/linux/command-docs/pwd.md' },
              { text: 'RM (Remove)', link: '/linux/command-docs/rm-remove.md' },
              { text: 'Sort', link: '/linux/command-docs/sort.md' },
              { text: 'Touch', link: '/linux/command-docs/touch.md' },
              { text: 'Uniq', link: '/linux/command-docs/uniq.md' },
              { text: 'WC (Word Count)', link: '/linux/command-docs/wc-word-count.md' }
            ]
          }
        ]
      }
    ];
  }
  