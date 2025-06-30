


export const gitSection = [
{
    title: 'Developer Tools',
    items: [
        { label: 'Git Basics', link: '/tools/git1' },
        { label: 'GitHub Basics', link: '/tools/git2' },
        { label: 'Chrome', link: '/tools/chrome' },
        { label: 'Obsedian', link: '/tools/obsidian' },
        { label: 'VS-Code ', link: '/tools/vscode' },
    ]
}
];

export const viteSection = [
    {
        title: 'VitePress',
        items: [
            { label: 'Setup', link: '/tools/VitePress/1setup' },
            { label: 'Using Markdown', link: '/tools/VitePress/2markdown' },
            { label: 'Using Vue', link: '/tools/VitePress/3using_vue' },
        ]
    }
    ];
    
export const toolsSection = [ ...gitSection , ...viteSection, ]